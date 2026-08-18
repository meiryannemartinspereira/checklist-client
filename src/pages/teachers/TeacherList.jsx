import { Link } from "react-router-dom";

function TeacherList() {
    return (
        <div className="teacher-list-page">

            <div className="page-header">

                <div>
                    <h2>
                        Professores
                    </h2>

                    <p>
                        Gerencie os professores cadastrados.
                    </p>
                </div>

                <Link
                    to="/teachers/create"
                    className="btn-primary"
                >
                    Cadastrar professor
                </Link>

            </div>

            <section className="teacher-list-card">

                <div className="empty-state">

                    <div className="empty-state-icon">
                        👨‍🏫
                    </div>

                    <h3>
                        Nenhum professor cadastrado
                    </h3>

                    <p>
                        Os professores cadastrados pela API
                        aparecerão aqui.
                    </p>

                    <Link
                        to="/teachers/create"
                        className="btn-primary"
                    >
                        Cadastrar professor
                    </Link>

                </div>

            </section>

        </div>
    );
}

export default TeacherList;