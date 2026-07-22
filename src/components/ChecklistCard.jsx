export default function ChecklistCard({ item }) {
    return (
        <div
            className={`checklist-card ${
                item.presente ? "presente" : "faltou"
            }`}
        >
            <h2>{item.nome}</h2>

            <div className="status">
                {item.presente ? "✅ Presente" : "❌ Faltou"}
            </div>

            <p>
                📅 <strong>Data:</strong> {item.data}
            </p>

            <p>
                🕒 <strong>Horário:</strong>{" "}
                {item.horarioAula ?? "Não informado"}
            </p>

            <p>
                📚 <strong>Descrição:</strong>{" "}
                {item.descricao ?? "Sem descrição"}
            </p>

            <p>
                💬 <strong>Observação:</strong>{" "}
                {item.observacao ?? "Sem observação"}
            </p>
        </div>
    );
}