

export default function DateLabel(props) {
    return <div className="date-label" >
        <i class="fa-regular fa-clock"></i>
        <span style={{marginLeft: 5}}>{formatDate(props.date)}</span>
    </div>
}

function formatDate(date) {
    // formats the date late April 14
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
}