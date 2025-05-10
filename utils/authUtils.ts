import { getToken, saveToken } from "./secureStorage"
import { api } from "@/constants";

export const isAuthenticated = async () => {
    await refreshToken();
    let token = await getToken("jwtAccessToken");
    console.log("access token",token);
    return api.post("auth/verify-token/", {
        token: token
    }).then(response => {
        return response.status === 200
    }).catch(error => {
        console.log(error.response?.data || error.message);
        return false;
    });
};

export const refreshToken = async () => {
    let refresh = await getToken("jwtRefreshToken");
    console.log("refresh token", refresh);
    await api.post("/auth/refresh-token/", {
        refresh: refresh,
    }).then(response => {
        saveToken("jwtAccessToken", response.data.access);
        console.log("access token aggiornato con successo");
    }).catch(error => {
        console.error('Errore durante il refresh', error.response?.data || error.message)
    });
}