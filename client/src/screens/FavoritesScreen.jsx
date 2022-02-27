import Carousel from "../components/Carousel";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

export default function FavoritesScreen() {
    return (
        <Layout>
            <div
                className="font-noto-display text-2xl text-rose-100 bg-rose-700 p-2 rounded-2xl mx-6 my-3"
            >
                <Hero
                    text = "Need anything? Add it here."
                />
            </div>
            <div
                className="font-noto-display text-2xl text-rose-1000 bg-rose-300 p-2 my-3"
            >
                <h3>Products</h3>
                <Carousel />
            </div>
        </Layout>
    )
}
