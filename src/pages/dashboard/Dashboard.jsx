import { useEffect, useState } from "react";

import ChecklistCarousel
    from "../../components/dashboard/ChecklistCarousel";

import { getChecklists }
    from "../../services/checklistService";

function Dashboard() {

    const [checklists, setChecklists] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");


    useEffect(() => {

        async function loadChecklists() {

            try {

                setLoading(true);

                setError("");

                const data = await getChecklists();

                setChecklists(data);

            } catch (error) {

                console.error(
                    "Erro ao carregar checklists:",
                    error
                );

                setError(
                    "Não foi possível carregar os checklists."
                );

            } finally {

                setLoading(false);

            }

        }

        loadChecklists();

    }, []);


    return (
        <main className="dashboard-page">

            {/* =========================
                HEADER
            ========================= */}

            <header className="dashboard-header">

                <div>

                    <h1>
                        Dashboard
                    </h1>

                    <p>
                        Acompanhe os checklists dos alunos.
                    </p>

                </div>

            </header>


            {/* =========================
                LOADING
            ========================= */}

            {loading && (

                <div className="dashboard-message">

                    Carregando checklists...

                </div>

            )}


            {/* =========================
                ERROR
            ========================= */}

            {!loading && error && (

                <div className="dashboard-message dashboard-error">

                    {error}

                </div>

            )}


            {/* =========================
                EMPTY
            ========================= */}

            {!loading &&
                !error &&
                checklists.length === 0 && (

                    <div className="dashboard-message">

                        Nenhum checklist encontrado.

                    </div>

                )}


            {/* =========================
                CHECKLIST
            ========================= */}

            {!loading &&
                !error &&
                checklists.length > 0 && (

                    <ChecklistCarousel
                        checklists={checklists}
                    />

                )}

        </main>
    );
}

export default Dashboard;