import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CadastroAluno from "./pages/CadastroAluno";


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

            </Routes>

        </BrowserRouter>
    );

}