import { useNavigate } from "react-router-dom";

import TeacherForm from "../../components/teachers/TeacherForm";

function TeacherCreate() {
    const navigate = useNavigate();

    const handleSubmit = (teacher) => {
        console.log("Teacher para cadastro:", teacher);

        navigate("/teachers");
    };

    return (
        <div className="teacher-create-page">

            <div className="page-header">
                <div>
                    <h2>
                        Cadastrar professor
                    </h2>

                    <p>
                        Cadastre um novo professor no sistema.
                    </p>
                </div>
            </div>

            <section className="teacher-form-card">
                <TeacherForm
                    onSubmit={handleSubmit}
                />
            </section>

        </div>
    );
}

export default TeacherCreate;