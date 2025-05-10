import * as SecureStore from 'expo-secure-store';

// Salva il token
export const saveToken = async (key:string, value:string) => {
    await SecureStore.setItemAsync(key, value);
};

// Recupera il token
export const getToken = async (key: string) => {
    return await SecureStore.getItemAsync(key);
};

// Elimina il token
export const deleteToken = async (key:string) => {
    await SecureStore.deleteItemAsync(key);
};

export const deleteAllTokens = async () => {
    await deleteToken("jwtAccessToken");
    await deleteToken("jwtRefreshToken");
};