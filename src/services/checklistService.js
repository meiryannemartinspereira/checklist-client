import api from "./api";

export async function getChecklists() {
    const response = await api.get("/checklist/acompanhamento");

    return response.data;
}