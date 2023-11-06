const basePort = (import.meta.env.VITE_PORT ? import.meta.env.VITE_PORT : 8000)

export const BASE_URL = `http://localhost:${basePort}`;
export const USERS_URL = "/api/users";

