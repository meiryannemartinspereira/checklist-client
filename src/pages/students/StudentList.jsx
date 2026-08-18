import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { getStudents } from "../../services/studentService";
import StudentTable from "../../components/students/StudentTable";

function StudentList() {

    const navigate = useNavigate();

    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        loadStudents();
    }, []);

    const loadStudents = async () => {

        try {

            setLoading(true);
            setError("");

            const data = await getStudents();

            setStudents(data);

        } catch (error) {

            console.error(
                "Erro ao buscar alunos:",
                error
            );

            setError(
                "Não foi possível carregar os alunos."
            );

        } finally {

            setLoading(false);

        }
    };

    const handleView = (id) => {
        navigate(`/students/${id}`);
    };

    const handleEdit = (id) => {
        navigate(`/students/${id}/edit`);
    };

    const handleDelete = async (id) => {

        const confirmed = window.confirm(
            "Deseja realmente excluir este aluno?"
        );

        if (!confirmed) {
            return;
        }

        console.log(
            "Excluir aluno:",
            id
        );
    };

    return (
        <div className="student-list-page">

            <div className="page-header">

                <div>
                    <h2>
                        Alunos
                    </h2>

                    <p>
                        Gerencie os alunos cadastrados.
                    </p>
                </div>

                <Link
                    to="/students/create"
                    className="btn-primary"
                >
                    Cadastrar aluno
                </Link>

            </div>

            <section className="student-list-card">

                {loading && (
                    <div className="student-list-message">
                        Carregando alunos...
                    </div>
                )}

                {!loading && error && (
                    <div className="student-list-message error">
                        {error}
                    </div>
                )}

                {!loading &&
                    !error &&
                    students.length === 0 && (

                        <div className="student-list-message">
                            Nenhum aluno cadastrado.
                        </div>

                    )}

                {!loading &&
                    !error &&
                    students.length > 0 && (

                        <StudentTable
                            students={students}
                            onView={handleView}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />

                    )}

            </section>

        </div>
    );
}

export default StudentList;