import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Hero from "../components/Hero";
import { loginUser, registerUser } from "../services/user";

export default function AuthScreen(props) {
    const navigate = useNavigate()

    // True: Signup, False: Login
    const [formToggle, setFormToggle] = useState(true)

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isAdmin = false

    useEffect(() => {

    }, [formToggle])

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = null
        if (formToggle) {
            const registerData = {
                username,
                email,
                password,
                isAdmin
            }
            res = await registerUser(registerData)
        } else {
            const loginData = {
                username,
                password
            }
            res = await loginUser(loginData)
        }
        props.setCurrentUser(res)
        navigate("/")
    };

    return (
        <section
            className="flex flex-col items-center font-noto-display"
        >
            <div
                className="text-2xl text-rose-100 bg-rose-700 p-2 rounded-2xl mx-6 my-3"
            >
                <Hero
                    text = "First visit or joyful return, we’re glad you’re here."
                />
            </div>
            <h3
                className="text-4xl mb-2"
            >
                {formToggle ? "Signup" : "Login"}
            </h3>

            {/* Auth Form */}
            <form
                id="auth"
                onSubmit={handleSubmit}
                className="text-lg p-2 font-noto-display bg-rose-500 flex flex-col items-center text-rose-1000
                rounded-2xl"
            >
                {/* Username */}
                <label className="block" htmlFor="username">username</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="text-lg font-noto-display bg-rose-100 flex text-rose-1000 rounded-2xl pl-2"
                />

                {/* Email */}
                {
                    formToggle ?
                        <>
                            <label className="block mt-6" htmlFor="email">email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="text-lg font-noto-display bg-rose-100 flex text-rose-1000 rounded-2xl pl-2"
                            />
                        </>
                    :
                        null
                }

                {/* Password */}
                <label className="block mt-6" htmlFor="password">password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="text-lg font-noto-display bg-rose-100 flex text-rose-1000 rounded-2xl pl-2"
                />

                {/* Submit Button */}
                <button
                    className="bg-rose-1000 text-rose-700 hover:text-rose-100
                    hover:-translate-y-0.5 transform transition
                    focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-900 focus:ring-opacity-50
                    active:text-rose-200 rounded-2xl py-2 px-6 my-6"
                >
                    enter
                </button>
            </form>

            {/* Switch Form Button */}
            <h4>{formToggle ? "Already a user?" : "Need an Account?"}</h4>
            <button
                    onClick={() => setFormToggle(!formToggle)}
                    className="bg-rose-300 text-rose-1000
                    focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-900 focus:ring-opacity-50
                    rounded-2xl py-1 px-3"
            >
                {formToggle ? "login" : "signup"}
            </button>
        </section>
    )
}
