import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { getStudentById } from "../../services/studentService";

function StudentDetails() {

    const { id } = useParams();

    const [student, setStudent] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    useEffect(() => {

        const loadStudent = async () => {

            try {

                setLoading(true);
                setError("");

                const data = await getStudentById(id);

                setStudent(data);

            } catch (error) {

                console.error(
                    "Erro ao buscar aluno:",
                    error
                );

                setError(
                    "Não foi possível carregar os dados do aluno."
                );

            } finally {

                setLoading(false);

            }
        };

        loadStudent();

    }, [id]);


    if (loading) {

        return (
            <div className="student-list-message">
                Carregando aluno...
            </div>
        );

    }


    if (error) {

        return (
            <div className="student-list-message error">
                {error}
            </div>
        );

    }


    if (!student) {

        return (
            <div className="student-list-message">
                Aluno não encontrado.
            </div>
        );

    }


    return (
        <div className="student-page">

            <div className="student-card">

                <div className="student-header">

                    <h1>
                        Detalhes do aluno
                    </h1>

                    <p>
                        Visualização das informações cadastradas.
                    </p>

                </div>


                <div className="student-details">

                    <div className="student-detail-field">

                        <span>
                            Nome
                        </span>

                        <strong>
                            {student.nome}
                        </strong>

                    </div>


                    <div className="student-detail-field">

                        <span>
                            Cursos
                        </span>

                        <div className="student-courses">

                            {student.curso?.length > 0 ? (

                                student.curso.map((course) => (

                                    <span
                                        key={course.id}
                                        className="course-badge"
                                    >
                                        {course.nome}
                                    </span>

                                ))

                            ) : (

                                <span className="no-course">
                                    Nenhum curso
                                </span>

                            )}

                        </div>

                    </div>

                </div>


                <Link
                    to="/students"
                    className="btn-secondary"
                >
                    Voltar para alunos
                </Link>

            </div>

        </div>
    );
}

export default StudentDetails;