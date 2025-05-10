import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import {jwtDecode} from "jwt-decode";
import {getToken} from "@/utils/secureStorage";
import axios from "axios";

type DecodedToken = {
    user_id: string;
};

export default function useUserName() {
    const [name, setName] = useState<string | null>(null);

    useEffect(() => {
        const fetchName = async () => {
            try {
                const token = await getToken("jwtAccessToken");
                if (!token) return;

                const decoded: DecodedToken = jwtDecode(token);
                console.log("decoded:", decoded);

                const response = await axios.get("http://njord.vps.webdock.cloud/auth/list-users/");
                const user = response.data.find((u: any) => u.id === decoded.user_id);
                setName(user?.first_name || "Utente");

            } catch (err) {
                console.error("Errore nel recupero nome utente:", err);
            }
        };

        fetchName();
    }, []);

    return name;
}
