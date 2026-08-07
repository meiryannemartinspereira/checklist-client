import { useState } from "react";
import api from "../services/api";
import AlunoForm from "../components/CadastroAluno";
import "./CadastroAluno.css";


export default function CadastroAluno() {


    const [form, setForm] = useState({
        nome: "",
        curso: ""
    });



    function handleChange(e) {

        const { name, value } = e.target;

        setForm(prev => ({
            ...prev,
            [name]: value
        }));

    }



    async function salvarAluno(e) {

        e.preventDefault();


        try {

            await api.post("/alunos", form);


            alert("Aluno cadastrado com sucesso!");


            setForm({
                nome: "",
                curso: ""
            });


        } catch (error) {

            console.error(error);

            alert("Erro ao cadastrar aluno");

        }

    }



    return (

        <main className="cadastro-page">


            <section className="cadastro-container">


                <div className="cadastro-header">

                    <h1>
                        Cadastro de Aluno
                    </h1>


                    <p>
                        Adicione novos alunos ao sistema de checklist.
                    </p>

                </div>



                <div className="cadastro-card">


                    <AlunoForm
                        form={form}
                        onChange={handleChange}
                        onSubmit={salvarAluno}
                    />


                </div>


            </section>


        </main>

    );

}