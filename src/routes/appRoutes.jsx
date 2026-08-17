import { Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import StudentCreate from "../pages/students/StudentCreate";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

function AppRoutes() {
    return (
        <Routes>

            <Route element={<AuthLayout />}>

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

            </Route>

            <Route
                path="*"
                element={<Navigate to="/login" replace />}
            />

            <Route
                path="/students/create"
                element={<StudentCreate />}
            />

        </Routes>
    );
}

export default AppRoutes;