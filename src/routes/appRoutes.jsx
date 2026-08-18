import {
    Navigate,
    Route,
    Routes
} from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import TeacherList from "../pages/teachers/TeacherList";
import TeacherCreate from "../pages/teachers/TeacherCreate";

import Home from "../pages/home/Home";

import StudentCreate from "../pages/students/StudentCreate";

function AppRoutes() {
    return (
        <Routes>

            {/* =========================
                AUTH
            ========================= */}

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


            {/* =========================
                APPLICATION
            ========================= */}

            <Route element={<AppLayout />}>

                <Route
                    path="/home"
                    element={<Home />}
                />

                <Route
                    path="/students/create"
                    element={<StudentCreate />}
                />

            </Route>


            {/* =========================
                DEFAULT
            ========================= */}

            <Route
                path="/"
                element={
                    <Navigate
                        to="/home"
                        replace
                    />
                }
            />

            <Route
                path="*"
                element={
                    <Navigate
                        to="/home"
                        replace
                    />
                }
            />

            <Route
                path="/teachers"
                element={<TeacherList />}
            />

            <Route
                path="/teachers/create"
                element={<TeacherCreate />}
            />

        </Routes>
    );
}

export default AppRoutes;