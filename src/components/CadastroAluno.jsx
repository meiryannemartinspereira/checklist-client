import "./AlunoForm.css";


export default function AlunoForm({

    form,

    onChange,

    onSubmit

}) {


    return (

        <form
            className="aluno-form"
            onSubmit={onSubmit}
        >



            <div className="form-group">


                <label>
                    Nome do aluno
                </label>


                <input

                    type="text"

                    name="nome"

                    value={form.nome}

                    onChange={onChange}

                    placeholder="Digite o nome do aluno"

                    required

                />


            </div>





            <div className="form-group">


                <label>
                    Curso
                </label>


                <input

                    type="text"

                    name="curso"

                    value={form.curso}

                    onChange={onChange}

                    placeholder="Digite o curso"

                    required

                />


            </div>





            <button
                className="btn-salvar"
                type="submit"
            >

                Salvar aluno

            </button>



        </form>

    );

}