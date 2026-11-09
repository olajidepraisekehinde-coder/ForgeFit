import { ThemeContext}  from "../context/ThemeContext"
import { useContext } from "react"

export function useTheme(){
    const user = useContext(ThemeContext)
    return user
}