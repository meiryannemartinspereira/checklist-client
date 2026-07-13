export default function ChecklistCard({ item }) {

    return (

        <div
            className={
                `checklist-card ${item.presente
                    ? "presente"
                    : "faltou"
                }`
            }
        >

            <h2>
                {item.nome}
            </h2>


            <div className="status">

                {
                    item.presente
                        ? "✅ Presente"
                        : "❌ Faltou"
                }

            </div>


            <p>
                🕒 {item.horarioAula}
            </p>


            <p>
                📝 {
                    item.descricao || "Sem descrição"
                }
            </p>


            <p>
                💬 {
                    item.observacao || "Sem observação"
                }
            </p>


        </div>

    );

}