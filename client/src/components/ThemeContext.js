import React from "react";

export const themes = {
    light: {
        background: "#F1DEDE"
    },
    dark: {
        background: "#ba9494"
    }
};

export const ThemeContext = React.createContext({
    theme: themes.light,
    toggleTheme: () => {}
});