import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
    return (
        <div className="app-layout">

            <aside className="sidebar">

                <div className="sidebar-brand">

                    <div className="sidebar-logo">
                        CK
                    </div>

                    <div className="sidebar-brand-info">
                        <strong>Código Kids</strong>

                        <span>
                            Checklist
                        </span>
                    </div>

                </div>

                <nav className="sidebar-nav">

                    <span className="sidebar-section">
                        Principal
                    </span>

                    <NavLink
                        to="/home"
                        className="sidebar-link"
                    >
                        <span className="sidebar-link-icon">
                            ⌂
                        </span>

                        <span>
                            Home
                        </span>
                    </NavLink>

                    <span className="sidebar-section">
                        Gestão
                    </span>

                    <NavLink
                        to="/students"
                        className="sidebar-link"
                    >
                        <span className="sidebar-link-icon">
                            👨‍🎓
                        </span>

                        <span>
                            Alunos
                        </span>
                    </NavLink>

                    <NavLink
                        to="/professors"
                        className="sidebar-link"
                    >
                        <span className="sidebar-link-icon">
                            👨‍🏫
                        </span>

                        <span>
                            Professores
                        </span>
                    </NavLink>

                    <NavLink
                        to="/dashboard"
                        className="sidebar-link"
                    >
                        <span className="sidebar-link-icon">
                            ▦
                        </span>

                        <span>
                            Dashboard
                        </span>
                    </NavLink>

                    <NavLink
                        to="/checklists"
                        className="sidebar-link"
                    >
                        <span className="sidebar-link-icon">
                            ✓
                        </span>

                        <span>
                            Checklists
                        </span>
                    </NavLink>

                </nav>

                <div className="sidebar-footer">

                    <div className="sidebar-user-avatar">
                        A
                    </div>

                    <div className="sidebar-user-info">

                        <strong>
                            Administrador
                        </strong>

                        <span>
                            Administrador
                        </span>

                    </div>

                </div>

            </aside>

            <div className="app-main">

                <header className="app-header">

                    <div className="app-header-title">

                        <h1>
                            Código Kids
                        </h1>

                        <p>
                            Sistema de gerenciamento
                        </p>

                    </div>

                    <div className="header-user">

                        <div className="header-avatar">
                            A
                        </div>

                        <div className="header-user-info">

                            <strong>
                                Administrador
                            </strong>

                            <span>
                                Administrador
                            </span>

                        </div>

                    </div>

                </header>

                <main className="app-content">
                    <Outlet />
                </main>

            </div>

        </div>
    );
}

export default AppLayout;