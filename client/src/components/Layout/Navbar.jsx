import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faHeart, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <nav className="text-md px-4 py-4 font-noto-display bg-rose-500">
            <ul className="flex justify-evenly text-rose-1000">
                <li
                    className="hover:text-rose-100 hover:-translate-y-0.5 transform transition
                    focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-900 focus:ring-opacity-50
                    active:text-rose-200"
                >
                    <Link
                        className="flex flex-col"
                        to="/"
                    >
                        <FontAwesomeIcon className="text-2xl" icon={faHouseChimney} />
                        <h4>home</h4>
                    </Link>
                </li>
                <li
                    className="hover:text-rose-100 hover:-translate-y-0.5 transform transition
                    focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-900 focus:ring-opacity-50
                    active:text-rose-200"
                >
                    <Link
                        className="flex flex-col"
                        to="/favorites"
                    >
                        <FontAwesomeIcon className="text-2xl" icon={faHeart} />
                        <h4>needs</h4>
                    </Link>
                </li>
                <li
                    className="hover:text-rose-100 hover:-translate-y-0.5 transform transition
                    focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-900 focus:ring-opacity-50
                    active:text-rose-200"
                >
                    <Link
                        className="flex flex-col"
                        to="/auth"
                    >
                        <FontAwesomeIcon className="text-2xl" icon={faArrowRightToBracket} />
                        <h4>login</h4>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
