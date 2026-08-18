import {
    Eye,
    Pencil,
    Trash2
} from "lucide-react";

function StudentTable({
    students,
    onView,
    onEdit,
    onDelete
}) {
    return (
        <div className="table-container">

            <table className="students-table">

                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Cursos</th>
                        <th className="actions-column">
                            Ações
                        </th>
                    </tr>
                </thead>

                <tbody>

                    {students.map((student) => (

                        <tr key={student.id}>

                            <td>
                                {student.nome}
                            </td>

                            <td>
                                <div className="student-courses">

                                    {student.curso?.length > 0 ? (

                                        student.curso.map((course) => (

                                            <span
                                                key={course.id}
                                                className="course-badge"
                                            >
                                                {course.nome}
                                            </span>

                                        ))

                                    ) : (

                                        <span className="no-course">
                                            Nenhum curso
                                        </span>

                                    )}

                                </div>
                            </td>

                            <td>

                                <div className="table-actions">

                                    <button
                                        type="button"
                                        className="action-button view"
                                        title="Visualizar aluno"
                                        onClick={() =>
                                            onView(student.id)
                                        }
                                    >
                                        <Eye size={18} />
                                    </button>

                                    <button
                                        type="button"
                                        className="action-button edit"
                                        title="Editar aluno"
                                        onClick={() =>
                                            onEdit(student.id)
                                        }
                                    >
                                        <Pencil size={18} />
                                    </button>

                                    <button
                                        type="button"
                                        className="action-button delete"
                                        title="Excluir aluno"
                                        onClick={() =>
                                            onDelete(student.id)
                                        }
                                    >
                                        <Trash2 size={18} />
                                    </button>

                                </div>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default StudentTable;