import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CadastroAluno from "./pages/CadastroAluno";
import AdminAlunos from "./pages/admin/AdminAlunos";
import AdminCursos from "./pages/admin/AdminCursos";


export default function App() {

    return (
        <BrowserRouter>

            <Routes>

                <Route 
                    path="/"
                    element={<Dashboard />}
                />

                <Route 
                    path="/cadastro-aluno"
                    element={<CadastroAluno />}
                />

                <Route
                    path="/admin/alunos"
                    element={<AdminAlunos />}
                />

                <Route
                    path="/admin/cursos"
                    element={<AdminCursos />}
                />

            </Routes>

        </BrowserRouter>
    );

}