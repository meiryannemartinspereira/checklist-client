import api from "./api";

export async function getChecklists() {
    const response = await api.get("/checklist/acompanhamento");
    console.log("Response from getChecklists:", response);

    return response.data;
}