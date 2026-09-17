function TableChecklist() 
{
  return (
    <div className="table-container">
        <div className="checklist-table">
          <table>
            <thead>
              <tr>
                <th>checklist</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </table>
          <table className="checklist-aluno">
            <thead>
              <tr>
                <th>Aluno</th>
                <th>nome</th>
                <th>observação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Fernando</td>
                <td>Testan</td>
              </tr>
            </tbody>
          </table>
          <table className="actions">
            <thead>
              <tr>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <button>salvar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
}


export default TableChecklist;