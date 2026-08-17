import { Outlet } from "react-router-dom";
import AuthLogo from "../components/auth/AuthLogo";

function AuthLayout() {
    return (
        <main className="auth-page">

            <section className="auth-brand">
                <AuthLogo />

                <div className="auth-brand-content">
                    <h2>
                        Gestão simples.
                        <br />
                        Acompanhamento inteligente.
                    </h2>

                    <p>
                        Gerenciamento checklist dos alunos,
                        acompanhamento da presença e organização
                        das atividades da escola.
                    </p>
                </div>

                <div className="auth-brand-decoration">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </section>

            <section className="auth-content">
                <Outlet />
            </section>

        </main>
    );
}

export default AuthLayout;