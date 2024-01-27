
import "./ThemedButton.css";

export default function ThemedButton({ label, onClick, secondary}) {
    const classes = `themed-btn light ${secondary ? 'secondary' : 'primary'}`;
    return <>
        <button className={classes} onClick={x => onClick()}>{label}</button>
    </>
}