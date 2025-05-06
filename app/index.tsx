import { Redirect } from "expo-router"
import { isAuthenticated } from "@/utils/authUtils"
import {useEffect, useState} from "react";

export default function Index() {
    const [authenticated, setAuthenticated] = useState(false);

    useEffect(() => {
        isAuthenticated().then(value => (setAuthenticated(value)));
    })

    return authenticated ? <Redirect href="/" /> : <Redirect href="/sign-in" />
}
