export default function Card(props){
    return (
        <div className="Card-Component">
            <img src={props.image} alt="" width="150px"/>
            <p className="Text-Location"><b>{props.location}</b></p>
            <p className="Text-Default"><b>{props.name}</b></p>
            <p className={props.rating > 4.0 ? "Rating-Green" : "Rating-Red"}>{props.rating} ★</p>
            <p className="Text-Default">${props.price}/night</p>
        </div>
    )
}