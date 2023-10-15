import { createContext, useState } from "react";

const Theme = createContext();

export default function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    return <Theme.Provider theme={theme}>
        {children}
    </Theme.Provider>
}