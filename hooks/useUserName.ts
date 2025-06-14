import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getToken } from "@/utils/secureStorage";
import {api} from "@/constants";

type DecodedToken = {
    user_id: number;
};

export default function useUserName() {
    const [name, setName] = useState<string>("");


    const fetchName = async () => {
        try {
            const token = await getToken("jwtAccessToken");
            if (!token) return;

            // Chiamalo così:
            const decoded = jwtDecode<DecodedToken>(token);
            console.log("decoded:", decoded);

            const res = await api.get("auth/list-users/");
            const user = Array.isArray(res.data)
                ? res.data.find((u: any) => u.id === decoded.user_id)
                : null;

            setName(user?.first_name ?? "Utente");
        } catch (err) {
            console.error("Errore nel recupero nome utente:", err);
            setName("Utente");
        }
    };

    fetchName().then();
    return name;
}
