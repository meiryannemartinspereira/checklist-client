import { useState } from "react";
import { Link } from "react-router-dom";

import AuthInput from "../../components/auth/AuthInput";
import AuthButton from "../../components/auth/AuthButton";

function Register() {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "PROFESSOR"
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

        if (form.password !== form.confirmPassword) {
            alert("As senhas não coincidem.");
            return;
        }

        setLoading(true);

        try {

            console.log("Registro:", form);

        } catch (error) {

            console.error("Erro ao registrar usuário:", error);

        } finally {

            setLoading(false);

        }
    }

    return (
        <div className="auth-form-container">

            <h2>Criar conta</h2>

            <p className="auth-form-description">
                Cadastre um usuário para acessar o sistema.
            </p>

            <form onSubmit={handleSubmit}>

                <AuthInput
                    label="Nome"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nome completo"
                />

                <AuthInput
                    label="E-mail"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                />

                <div className="auth-field">

                    <label htmlFor="role">
                        Perfil
                    </label>

                    <select
                        id="role"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                    >
                        <option value="PROFESSOR">
                            Professor
                        </option>

                        <option value="ADMINISTRADOR">
                            Administrador
                        </option>
                    </select>

                    <p className="role-description">
                        O perfil define as permissões do usuário
                        dentro do sistema.
                    </p>

                </div>

                <AuthInput
                    label="Senha"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Crie uma senha"
                />

                <AuthInput
                    label="Confirmar senha"
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    placeholder="Digite a senha novamente"
                />

                <AuthButton disabled={loading}>
                    {loading
                        ? "Criando conta..."
                        : "Criar conta"
                    }
                </AuthButton>

            </form>

            <div className="auth-switch">

                Já possui uma conta?{" "}

                <Link to="/login">
                    Entrar
                </Link>

            </div>

        </div>
    );
}

export default Register;