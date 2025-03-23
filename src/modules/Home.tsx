import { useContext, useState } from "react"
import ThemeContext from "../contexts/themeContext"
import Featured from "./inner/Featured";
import MainContent from "./inner/MainContent";

export default function Home() {
    const theme = useContext(ThemeContext);
    return <MainContent />
}