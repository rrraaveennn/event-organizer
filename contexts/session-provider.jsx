import { createContext, useState } from "react";

const context = createContext(null);

export default function ThemeProvider({children}) {
    const [user, setUser] = useState(null);

    return <Provider value={user}>{children}</Provider>
}