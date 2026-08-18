import {
    Check,
    Clock,
    User,
    X
} from "lucide-react";

import {
    formatDate,
    formatDayOfWeek
} from "../../utils/dateUtils";

function ChecklistCard({ item, checklist }) {

    const professores = checklist.professores ?? [];

    const nomeProfessores = professores.length > 0
        ? professores
            .map((professor) => professor.nome)
            .join(", ")
        : "Não informado";

    const statusClass =
        checklist.status?.toLowerCase() ?? "pendente";

    return (
        <article className="checklist-card">

            {/* =========================
                HEADER
            ========================= */}

            <div className="checklist-card-header">

                <div>

                    <h3>
                        {item.nomeAluno}
                    </h3>

                    <span className="checklist-card-date">

                        {formatDayOfWeek(
                            checklist.diaSemana
                        )}

                        {" • "}

                        {formatDate(
                            checklist.data
                        )}

                    </span>

                </div>

                <span
                    className={`checklist-status ${statusClass}`}
                >
                    {checklist.status}
                </span>

            </div>


            {/* =========================
                INFORMATION
            ========================= */}

            <div className="checklist-card-info">

                <div className="checklist-info-item">

                    <Clock size={16} />

                    <span>
                        {checklist.horaEntrada}
                        {" - "}
                        {checklist.horaSaida}
                    </span>

                </div>


                <div className="checklist-info-item">

                    <User size={16} />

                    <span>
                        {nomeProfessores}
                    </span>

                </div>

            </div>


            {/* =========================
                CHECKLIST
            ========================= */}

            <div className="checklist-card-items">

                <div className="checklist-item">

                    <span>
                        Presença
                    </span>

                    {item.presente ? (
                        <Check
                            size={18}
                            className="checklist-success"
                        />
                    ) : (
                        <X
                            size={18}
                            className="checklist-danger"
                        />
                    )}

                </div>


                <div className="checklist-item">

                    <span>
                        Intervalo
                    </span>

                    {item.intervalo ? (
                        <Check
                            size={18}
                            className="checklist-success"
                        />
                    ) : (
                        <X
                            size={18}
                            className="checklist-danger"
                        />
                    )}

                </div>


                <div className="checklist-item">

                    <span>
                        Recuperação
                    </span>

                    {item.recuperacao ? (
                        <Check
                            size={18}
                            className="checklist-success"
                        />
                    ) : (
                        <X
                            size={18}
                            className="checklist-danger"
                        />
                    )}

                </div>

            </div>


            {/* =========================
                PARECER
            ========================= */}

            {item.parecer && (

                <div className="checklist-card-opinion">

                    <strong>
                        Parecer
                    </strong>

                    <p>
                        {item.parecer}
                    </p>

                </div>

            )}


            {/* =========================
                OBSERVAÇÃO
            ========================= */}

            {item.observacao && (

                <div className="checklist-card-observation">

                    <strong>
                        Observação
                    </strong>

                    <p>
                        {item.observacao}
                    </p>

                </div>

            )}

        </article>
    );
}

export default ChecklistCard;