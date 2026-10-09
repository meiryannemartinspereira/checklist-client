function TableChecklist() {
    const alunos = [
        {
            id: 1,
            nome: "Fernando",
            observacao: "Teste inicial",
            status: "Pendente",
            professores: ["Mey", "Pedro"],
        },
        {
            id: 2,
            nome: "Ana",
            observacao: "Documentação incompleta",
            status: "Pendente",
            professores: ["Mey", "Pedro"],
        },
        {
            id: 3,
            nome: "Carlos",
            observacao: "Checklist concluído",
            status: "Concluído",
            professores: ["Mey", "Pedro"],
        },
    ];

    return (
        <div className="checklist-page">

            <div className="checklist-header">
                <h1>Checklist</h1>

                <p>
                    Acompanhamento dos alunos.
                </p>
            </div>

            <div className="checklist-card">

                <div className="checklist-table-container">

                    <table className="checklist-table">

                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Aluno</th>
                                <th>Status</th>
                                <th>Observação</th>
                                <th>Professores</th>
                                <th className="checklist-actions">
                                    Ações
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            {alunos.map((aluno) => (
                                <tr key={aluno.id}>

                                    <td>{aluno.id}</td>

                                    <td>
                                        {aluno.nome}
                                    </td>

                                    <td>
                                        <span
                                            className={`checklist-status ${
                                                aluno.status === "Concluído"
                                                    ? "completed"
                                                    : "pending"
                                            }`}
                                        >
                                            {aluno.status}
                                        </span>
                                    </td>

                                    <td>
                                        {aluno.observacao}
                                    </td>

                                    <td>
                                        {aluno.professores.join(", ")}
                                    </td>

                                    <td className="checklist-actions">
                                        <div className="checklist-actions-container">

                                            <button
                                                className="checklist-action-button save"
                                                type="button"
                                            >
                                                Editar
                                            </button>

                                        </div>
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    );
}

export default TableChecklist;
