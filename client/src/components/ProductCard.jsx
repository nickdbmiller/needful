import { Link } from 'react-router-dom'

export default function ProductCard(props) {
    return (
        <Link to = {`/product/${props.id}`}>
            <div
                className="bg-rose-100 rounded-2xl"
            >
                <h4>{props.title}</h4>
                <img
                    src={props.imgSrc}
                    alt={props.imgAlt}
                    className="w-40"
                />
                <p>${props.price}</p>
            </div>
        </Link>
    )
}
