import { useContext, useState } from "react"
import ThemeContext from "../contexts/themeContext"
import Featured from "./inner/Featured";

export default function Home() {
    const [num, setNum] = useState(100)
    const theme = useContext(ThemeContext);
    const onClickingShowProd = (e: any, num:number) => {
        console.log(e.target.getAttribute('data-id'));
        if(num===100) {
            setNum(101);
        } else {
            setNum(100);
        }
    }
    return (
        <div className={theme+"-main-theme"}>
            <h1>Dashboard in {theme} theme</h1>
            <p>This is the dashboard</p>
            <Featured showProduct={onClickingShowProd} num={num} />
        </div>
    )
}