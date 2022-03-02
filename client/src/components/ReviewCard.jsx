import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { deleteReview, updateReview } from '../services/reviews';

export default function ReviewCard(props) {
    const [editToggle, setEditToggle] = useState(false)

    const [title, setTitle] = useState(props.title)
    const [stars, setStars] = useState(props.stars)
    const [content, setContent] = useState(props.content)

    const handleSubmit = (e) => {
        e.preventDefault()
        const reviewData = {
            title,
            stars,
            content
        }
        updateReview(props.productId, props.reviewId, reviewData)
        props.setReviewToggle(!props.reviewToggle)
        setEditToggle(false)
    }

    return (
        <div
            className="bg-rose-100 rounded-2xl p-2 m-2"
        >
            {
                editToggle ?
                    <form
                        id="reviewEdit"
                        onSubmit={handleSubmit}
                    >
                        <label htmlFor="title">Title</label>
                        <input
                            id='title'
                            name='title'
                            type='text'
                            placeholder='Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}/>
                        <label htmlFor="stars">Stars</label>
                        <input
                            id='stars'
                            name='stars'
                            type='number'
                            value={stars}
                            onChange={(e) => setStars(e.target.valueAsNumber)}/>
                        <label htmlFor="content">Content</label>
                        <input
                            id='content'
                            name='content'
                            type='text'
                            placeholder='Content'
                            value={content}
                            onChange={(e) => setContent(e.target.value)} />
                        <button
                            className='bg-rose-700 text-rose-100 rounded-2xl px-2'
                        >
                            Save
                        </button>
                    </form>
                :
                <div>
                        <h4>{props.title}</h4>
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
                        {/* Conditionally Renders buttons if the user matches the id */}
                        {
                            props.currentUser.id === props.userId ?
                                <div>
                                    <button
                                        onClick={() => {
                                            deleteReview(props.productId, props.reviewId)
                                            props.setReviewToggle(!props.reviewToggle)
                                        }}
                                        className='bg-rose-300 text-rose-1000 rounded-2xl px-2'
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => {
                                            setEditToggle(true)
                                            // props.setReviewToggle(!props.reviewToggle)
                                        }}
                                        className='bg-rose-700 text-rose-100 rounded-2xl px-2'
                                    >
                                        Edit
                                    </button>
                                </div>
                            :
                                null
                        }
                    </div>
            }
        </div>
    )
}
