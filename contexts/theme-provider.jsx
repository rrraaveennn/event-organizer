import { createContext, useState } from "react";

export const themes = [
    {
        type: "light",
        color: "#dde5eb",
        opposite: "#0c0c0c"
    },
    {
        type: "dark",
        color: "#0c0c0c",
        opposite: "#dde5eb"
    }
];

export const ThemeContext = createContext(themes[0]);

export default function ThemeProvider({children}) {
    const [theme, setTheme] = useState(themes[0]);

    const { Provider } = ThemeContext;

    return <Provider value={{
        theme,
        setTheme
    }}>
        {children}
    </Provider>
}