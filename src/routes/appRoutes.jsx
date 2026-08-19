import {
    Navigate,
    Route,
    Routes
} from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import AppLayout from "../layouts/AppLayout";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Dashboard from "../pages/dashboard/Dashboard";

import Home from "../pages/home/Home";

import StudentList from "../pages/students/StudentList";
import StudentCreate from "../pages/students/StudentCreate";
import StudentDetails from "../pages/students/StudentDetails";

import TeacherList from "../pages/teachers/TeacherList";
import TeacherCreate from "../pages/teachers/TeacherCreate";

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

                {/* HOME */}

                <Route
                    path="/home"
                    element={<Home />}
                />

                <Route
                    path="/dashboard"
                    element={<Dashboard />}
                />


                {/* STUDENTS */}

                <Route
                    path="/students"
                    element={<StudentList />}
                />

                <Route
                    path="/students/create"
                    element={<StudentCreate />}
                />

                <Route
                    path="/students/:id"
                    element={<StudentDetails />}
                />

                {/* TEACHERS */}

                <Route
                    path="/teachers"
                    element={<TeacherList />}
                />

                <Route
                    path="/teachers/create"
                    element={<TeacherCreate />}
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

        </Routes>
    );
}

export default AppRoutes;