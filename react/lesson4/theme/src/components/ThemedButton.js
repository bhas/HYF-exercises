
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ThemedButton({ label, onClick, secondary}) {
    const theme = useContext(ThemeContext);
    const classes = `themed-btn ${theme} ${secondary ? 'secondary' : 'primary'}`;
    return <>
        <button className={classes} onClick={x => onClick()}>{label}</button>
    </>
}