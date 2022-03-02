import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import { createReview } from '../services/reviews'

export default function CreateReviewForm(props) {
    const [title, setTitle] = useState("")
    const [stars, setStars] = useState(5)
    const [content, setContent] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const reviewData = {
            "title": title,
            "stars": stars,
            "content": content
        }
        createReview(props.productId, reviewData)
        props.setReviewToggle(!props.reviewToggle)
    }

    return (
        <form
            id="reviewCreate"
            onSubmit={handleSubmit}
            className="bg-rose-100 rounded-2xl p-2 m-2 flex flex-col"
        >
            <h3>{<FontAwesomeIcon className="text-2xl" icon={faPlus} />} Add Review</h3>
            <label className="block" htmlFor="title">Title</label>
            <input
                id='title'
                name='title'
                type='text'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>
            <label className="block" htmlFor="stars">Stars</label>
            <input
                id='stars'
                name='stars'
                type='number'
                min="1"
                max="5"
                value={stars}
                onChange={(e) => setStars(e.target.valueAsNumber)}/>
            <label className="block" htmlFor="content">Content</label>
            <input
                id='content'
                name='content'
                type='text'
                placeholder='Content'
                value={content}
                onChange={(e) => setContent(e.target.value)} />
            <button>Save</button>
        </form>
    )
}
