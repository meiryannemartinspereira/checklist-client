import api from "./api";

export async function getChecklists() {
    const response = await api.get("/checklist");

    return response.data;
}