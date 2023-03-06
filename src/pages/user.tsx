import { useState } from "react";

type AuthUser = {
    name: string,
    email : string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null);

    const handleLogin = () => {
        setUser({
            name : "Tung Dang",
            email : 'dangtung006@gmail.com'
        })
    }

    const handleLogout = () => {
        setUser(null);
    }

    return(
        <div>
            <button onClick={handleLogin}> Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div> Username is { user?.name}  </div>
            <div> Email is { user?.email} </div>
        </div>
    )
}
