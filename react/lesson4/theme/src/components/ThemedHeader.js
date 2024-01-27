import "./ThemedHeader.css";

export default function ThemedHeader({ title, theme }) {
    const classes = `themed-header ${theme}`;
    return (
        <h2 className={classes}>{title}</h2>
    )
}