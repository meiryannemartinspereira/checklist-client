import { useState } from "react";
import api from "../services/api";
import ChecklistCard from "../components/ChecklistCard";

export default function Dashboard() {
    const [checklists, setChecklists] = useState([]);

    async function buscarAluno() {
        try {
            const response = await api.get("/alunos/alunos");
            setChecklists(response.data);
        } catch (error) {
            console.error(error);
            alert("Erro ao carregar checklist");
        }
    }

    // Divide os cards em páginas de 10 itens (5 colunas x 2 linhas)
    const paginas = [];

    for (let i = 0; i < checklists.length; i += 10) {
        paginas.push(checklists.slice(i, i + 10));
    }

    return (
        <div>
            <h1>Checklist dos Alunos</h1>

            <button onClick={buscarAluno}>
                Carregar Checklists
            </button>

            <hr />

            {paginas.length > 0 && (
                <div className="slider-container">
                    <div className="slider-track">

                        {[...paginas, ...paginas].map((pagina, paginaIndex) => (
                            <div
                                className="slider-page"
                                key={paginaIndex}
                            >
                                {pagina.map((item, index) => (
                                    <ChecklistCard
                                        key={index}
                                        item={item}
                                    />
                                ))}
                            </div>
                        ))}

                    </div>
                </div>
            )}
        </div>
    );
}