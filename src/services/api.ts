import axios from "axios";

export function setupAPIClient() {
    const api = axios.create({
        baseURL: process.env.IONIC_API_BASE_URL,
        headers: {
            "Content-Type": "application/json",
        },
    });

    return api;
}

export const api = setupAPIClient();
