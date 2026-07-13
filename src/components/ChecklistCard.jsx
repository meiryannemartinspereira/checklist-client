export default function ChecklistCard({ item }) {

    return (

        <div className="checklist-card">

            <h2>
                {item.nome}
            </h2>


            <p>
                🕒 Horário: {item.horarioAula}
            </p>


            <p>
                {
                    item.presente
                    ? "✅ Presente"
                    : "❌ Faltou"
                }
            </p>


            <p>
                📝 Descrição:
                {
                    item.descricao
                    ? item.descricao
                    : "Sem descrição"
                }
            </p>


            <p>
                💬 Observação:
                {
                    item.observacao
                    ? item.observacao
                    : "Sem observação"
                }
            </p>

        </div>

    );

}