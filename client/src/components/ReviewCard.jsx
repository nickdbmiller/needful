import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default function ReviewCard(props) {
    // key = {review.id}
    // currentUser = {props.currentUser}
    // reviewId = {review.id}
    // productId = {review.product_id}
    // userId = {review.user_id}

    return (
            <div
                className="bg-rose-100 rounded-2xl"
            >
                <h4>{props.title}</h4>
                {
                    props.currentUser.id === props.userId ?
                        <button>Edit</button>
                    :
                        null
                }
                <div>
                    {
                        Array(props.stars)?.map(() => {
                            return (
                                <FontAwesomeIcon className="text-2xl" icon={faStar} />
                            )
                        })
                    }
                </div>
                <p>{props.content}</p>
            </div>
    )
}
