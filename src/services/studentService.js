import api from "./api";

export const getStudents = async () => {
    const response = await api.get("/alunos/nomes");

    return response.data;
};

export const getStudentById = async (id) => {
    const response = await api.get(`/alunos/${id}`);

    return response.data;
};