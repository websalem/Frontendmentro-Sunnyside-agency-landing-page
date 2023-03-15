function Testimonials(props) {
    return (


        <div className="testimonial">
            <img src={props.img} alt="Emily" />
            <p>{props.paragraph}</p>
            <h2>{props.name}</h2>
            <p>{props.title}</p>
        </div>


    )
}
export default Testimonials;