import { useState } from "react";
import { Link } from "react-router-dom";

import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

function Login() {

    const [form, setForm] = useState({
        email: "",
        password: ""
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
            
            console.log("Login:", form);

        } catch (error) {

            console.error("Erro ao realizar login:", error);

        } finally {

            setLoading(false);

        }
    }

    return (
        <div className="auth-form-container">

            <h2>Bem-vindo!</h2>

            <p className="auth-form-description">
                Entre para acessar o sistema de checklist.
            </p>

            <form onSubmit={handleSubmit}>

                <AuthInput
                    label="E-mail"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                />

                <AuthInput
                    label="Senha"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Digite sua senha"
                />

                <AuthButton disabled={loading}>
                    {loading ? "Entrando..." : "Entrar"}
                </AuthButton>

            </form>

            <div className="auth-switch">
                Ainda não possui uma conta?{" "}
                <Link to="/register">
                    Criar conta
                </Link>
            </div>

        </div>
    );
}

export default Login;