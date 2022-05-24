import { createContext, useMemo, useState } from 'react'
import { IContext } from '../interfaces'

export const ThemeContext = createContext<IContext>({ isDark: false })

export const ThemeProvider: React.FC = ({ children }) => {
    const [isDark, setIsDark] = useState(false)

    const value = useMemo(() => ({ isDark, setIsDark }), [isDark])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}