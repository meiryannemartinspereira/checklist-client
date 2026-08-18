import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home-page">

            <section className="home-welcome">

                <span className="home-eyebrow">
                    Área administrativa
                </span>

                <h2>
                    Bem-vindo ao Código Kids! 👋
                </h2>

                <p>
                    Gerencie alunos, professores e
                    checklists através do sistema.
                </p>

            </section>

            <section className="home-actions">

                <Link
                    to="/students/create"
                    className="home-action"
                >
                    <div className="home-action-icon">
                        👨‍🎓
                    </div>

                    <div className="home-action-content">

                        <strong>
                            Cadastrar aluno
                        </strong>

                        <span>
                            Adicione um novo aluno ao sistema.
                        </span>

                    </div>
                </Link>

                <Link
                    to="/professors/create"
                    className="home-action"
                >
                    <div className="home-action-icon">
                        👨‍🏫
                    </div>

                    <div className="home-action-content">

                        <strong>
                            Cadastrar professor
                        </strong>

                        <span>
                            Adicione um novo professor ao sistema.
                        </span>

                    </div>
                </Link>

                <Link
                    to="/dashboard"
                    className="home-action"
                >
                    <div className="home-action-icon">
                        📊
                    </div>

                    <div className="home-action-content">

                        <strong>
                            Dashboard
                        </strong>

                        <span>
                            Visualize indicadores e métricas.
                        </span>

                    </div>
                </Link>

            </section>

        </div>
    );
}

export default Home;