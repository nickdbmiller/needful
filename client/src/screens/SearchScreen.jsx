import Carousel from "../components/Carousel";

export default function SearchScreen() {
    return (
        <div>
            <section
                className="flex flex-col items-center font-noto-display"
            >
                <h3
                    className="text-4xl my-2"
                >
                    Searched Term
                </h3>
                
                <p>Product Card Map</p>
            </section>

            {/* Carousel Section */}
            <div
                className="font-noto-display text-2xl text-rose-1000 bg-rose-300 p-2 my-3"
            >
                <h3>Other Products</h3>
                <Carousel />
            </div>
        </div>
    )
}
