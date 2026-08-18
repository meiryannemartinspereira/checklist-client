const daysOfWeek = {
    MONDAY: "Segunda-feira",
    TUESDAY: "Terça-feira",
    WEDNESDAY: "Quarta-feira",
    THURSDAY: "Quinta-feira",
    FRIDAY: "Sexta-feira",
    SATURDAY: "Sábado",
    SUNDAY: "Domingo"
};

export function formatDayOfWeek(day) {
    return daysOfWeek[day] ?? day;
}

export function formatDate(date) {

    if (!date) {
        return "";
    }

    const [year, month, day] = date.split("-");

    return `${day}/${month}/${year}`;
}