import { useEffect, useState } from "react";
import ChecklistCarousel from "../../components/dashboard/ChecklistCarousel";
import { getChecklists } from "../../services/checklistService";

function Dashboard() {

    const [checklist, setChecklist] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        async function loadChecklist() {

            try {

                setLoading(true);
                setError("");

                const data = await getChecklists();
                setChecklist(data);

            } catch (error) {

                console.error(
                    "Erro ao carregar checklist:",
                    error
                );

                setError(
                    "Não foi possível carregar o checklist."
                );

            } finally {

                setLoading(false);

            }
        }

        loadChecklist();

    }, []);

    return (
        <main className="dashboard-page">

            <header className="dashboard-header">
                <div>
                    <h1>Dashboard</h1>

                    <p>
                        Acompanhe o checklist dos alunos.
                    </p>
                </div>
            </header>

            {loading && (
                <div className="dashboard-message">
                    Carregando checklist...
                </div>
            )}

            {!loading && error && (
                <div className="dashboard-message dashboard-error">
                    {error}
                </div>
            )}

            {!loading && !error && !checklist && (
                <div className="dashboard-message">
                    Nenhum checklist encontrado.
                </div>
            )}

            {!loading && !error && checklist && (
                <ChecklistCarousel
                    checklist={checklist}
                />
            )}

        </main>
    );
}

export default Dashboard;