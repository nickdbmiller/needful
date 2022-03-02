import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Searchbar(props) {
    const [input, setInput] = useState("");
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setQuery(input)
        setInput("")
        navigate("/search")
    };

    return (
        <form
            id="searchbar"
            onSubmit={handleSubmit}
            className="text-md p-2 font-noto-display bg-rose-300 flex justify-evenly text-rose-1000"
        >
            <input
                id="query"
                name="query"
                type="text"
                value={input}
                placeholder="Search"
                onChange={(e) => {
                    setInput(e.target.value)
                }}
                className="text-lg font-noto-display bg-rose-100 flex text-rose-1000 rounded-2xl pl-2"
            />
            <button
                className="hover:text-rose-100 hover:-translate-y-0.5 transform transition
                focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-900 focus:ring-opacity-50
                active:text-rose-200"
            >
                <FontAwesomeIcon className="text-2xl text-rose-700" icon={faMagnifyingGlass} />
            </button>
        </form>
    )
}
