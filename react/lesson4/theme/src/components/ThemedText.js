import "./ThemedText.css";

export default function ThemedText({ text, theme }) {
    const classes = `themed-text ${theme}`;
    return (
        <p className={classes}>{text}</p>
    )
}