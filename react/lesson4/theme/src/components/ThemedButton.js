
import "./ThemedButton.css";

export default function ThemedButton({ label, onClick, secondary, theme}) {
    const classes = `themed-btn ${theme} ${secondary ? 'secondary' : 'primary'}`;
    return <>
        <button className={classes} onClick={x => onClick()}>{label}</button>
    </>
}