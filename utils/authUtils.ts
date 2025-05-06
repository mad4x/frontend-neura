import { getToken, saveToken } from "./secureStorage"
import { api } from "@/constants";

export const isAuthenticated = async () => {
    await refreshToken();
    let token = getToken("accessToken");
    return api.post("auth/verify-token", {
        access: token
    }).then(response => {
        return response.status === 200;
    }).catch(error => {
        console.log(error.response?.data || error.message);
        return false;
    });
};

export const refreshToken = async () => {
    let refresh = await getToken("jwtRefreshToken");
    await api.post("/auth/refresh-token/", {
        refresh: refresh,
    }).then(response => {
        saveToken("jwtAccessToken", response.data.code);
        console.log("access token aggiornato con successo");
    }).catch(error => {
        console.error('Errore durante il refresh', error.response?.data || error.message)
    });
}