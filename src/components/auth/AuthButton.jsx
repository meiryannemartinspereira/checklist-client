function AuthButton({
    children,
    type = "submit",
    disabled = false
}) {
    return (
        <button
            type={type}
            className="auth-button"
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default AuthButton;