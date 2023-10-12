import axios from "axios";

export function setupAPIClient() {
    const api = axios.create({
        // TODO: Adjust this
        baseURL: "https://localhost:7079/api", //import.meta.env.IONIC_API_BASE_URL,
        headers: {
            "Content-Type": "application/json",
        },
    });

    return api;
}

export const api = setupAPIClient();
