import { useState } from "react";
import StudentForm from "../../components/students/StudentForm";

function StudentCreate() {

    const [form, setForm] = useState({
        nome: "",
        curso: ""
    });

    const [loading, setLoading] = useState(false);

    function handleChange(event) {

        const { name, value } = event.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function handleSubmit(event) {

        event.preventDefault();

        setLoading(true);

        try {

            console.log("Aluno:", form);

        } catch (error) {

            console.error(
                "Erro ao cadastrar aluno:",
                error
            );

        } finally {

            setLoading(false);

        }
    }

    return (
        <main className="student-page">

            <section className="student-card">

                <div className="student-header">

                    <h1>
                        Cadastrar aluno
                    </h1>

                    <p>
                        Preencha os dados do aluno
                        para realizar o cadastro.
                    </p>

                </div>

                <StudentForm
                    form={form}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    loading={loading}
                />

            </section>

        </main>
    );
}

export default StudentCreate;