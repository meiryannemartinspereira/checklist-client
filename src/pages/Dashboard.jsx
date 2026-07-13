import { useState } from "react";
import api from "../services/api";
import ChecklistCard from "../components/ChecklistCard";

export default function Dashboard() {

    const [nome, setNome] = useState("");
    const [checklists, setChecklists] = useState([]);


    async function buscarAluno() {

        if (nome.trim() === "") {
            alert("Digite o nome do aluno.");
            return;
        }

        try {

            const response = await api.get(`/checklist/${nome}`);

            setChecklists(response.data);

        } catch (error) {

            alert("Aluno não encontrado.");

            setChecklists([]);

        }

    }


    return (

        <div>

            <h1>Checklist dos Alunos</h1>


            <input
                type="text"
                placeholder="Digite o nome do Aluno"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
            />


            <button onClick={buscarAluno}>
                Buscar
            </button>


            <hr />


            {
                checklists.length > 0 && (

                    <div className="slider-container">

                        <div className="slider-track">

                            {
                                checklists.map((item, index) => (

                                    <ChecklistCard
                                        key={index}
                                        item={item}
                                    />

                                ))
                            }

                        </div>

                    </div>

                )
            }


        </div>

    );

}