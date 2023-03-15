function Card(props) {
    return (
        <div className="card">
            <h2>{props.heading}</h2>
            <p>{props.paragraph}</p>
            <button>{props.button}</button>
        </div>
    )
}
export default Card;