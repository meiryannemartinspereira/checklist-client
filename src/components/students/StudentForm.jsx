import StudentInput from "./StudentInput";

function StudentForm({
    form,
    onChange,
    onSubmit,
    loading = false
}) {
    return (
        <form
            className="student-form"
            onSubmit={onSubmit}
        >

            <StudentInput
                label="Nome do aluno"
                name="nome"
                value={form.nome}
                onChange={onChange}
                placeholder="Digite o nome do aluno"
            />

            <div className="student-field">

                <label htmlFor="curso">
                    Curso
                </label>

                <select
                    id="curso"
                    name="curso"
                    value={form.curso}
                    onChange={onChange}
                    required
                >
                    <option value="">
                        Selecione o curso
                    </option>

                    <option value="WEB">
                        Web
                    </option>

                    <option value="ROBOTICA">
                        Robótica
                    </option>

                    <option value="GAMES">
                        Games
                    </option>
                </select>

            </div>

            <button
                type="submit"
                className="student-button"
                disabled={loading}
            >
                {loading
                    ? "Salvando..."
                    : "Cadastrar aluno"
                }
            </button>

        </form>
    );
}

export default StudentForm;