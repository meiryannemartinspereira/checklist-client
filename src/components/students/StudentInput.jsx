function StudentInput({
    label,
    name,
    value,
    onChange,
    placeholder,
    required = true
}) {
    return (
        <div className="student-field">
            <label htmlFor={name}>
                {label}
            </label>

            <input
                id={name}
                name={name}
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
        </div>
    );
}

export default StudentInput;