import { useState } from "react";

function TeacherForm({ onSubmit }) {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const teacher = {
            nome: name.trim(),
        };

        onSubmit(teacher);
    };

    return (
        <form
            className="teacher-form"
            onSubmit={handleSubmit}
        >
            <div className="form-group">
                <label htmlFor="name">
                    Nome
                </label>

                <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                    placeholder="Digite o nome do professor"
                    required
                />
            </div>

            <div className="form-actions">
                <button
                    type="submit"
                    className="btn-primary"
                >
                    Cadastrar professor
                </button>
            </div>
        </form>
    );
}

export default TeacherForm;