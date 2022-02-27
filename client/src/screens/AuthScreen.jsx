import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";

export default function AuthScreen() {
    const [input, setInput] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        // navigate("/")
    };

    return (
        <Layout>
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
                    Welcome
                </h3>

                {/* Auth Form */}
                <form
                    id="auth"
                    onSubmit={handleSubmit}
                    className="text-lg p-2 font-noto-display bg-rose-500 flex flex-col items-center text-rose-1000
                    rounded-2xl"
                >
                    {/* Email */}
                    <label className="block" htmlFor="email">email</label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value)
                            console.log(e.target.value)
                        }}
                        className="text-lg font-noto-display bg-rose-100 flex text-rose-1000 rounded-2xl pl-2"
                    />

                    {/* Password */}
                    <label className="block mt-6" htmlFor="password">password</label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value)
                            console.log(e.target.value)
                        }}
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
            </section>
            <div
                className="font-noto-display text-2xl text-rose-1000 bg-rose-300 p-2 my-3"
            >
                <h3>Products</h3>
                <Carousel />
            </div>
        </Layout>
    )
}
