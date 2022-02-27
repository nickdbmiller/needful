export default function Header() {
    return (
        <header className="sticky top-0 z-50 flex-col justify-start 
        sm:justify-around bg-rose-500 p-2"
        >
            <a
                className="flex-row inline-flex rounded-lg text-rose-100 text-6xl font-bold
                hover:text-rose-50 hover:-translate-y-0.5 transform transition
                focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-100 focus:ring-opacity-50
                active:text-rose-200"
                href="https://github.com/nickdbmiller/needful"
                target="_blank"
                rel="noreferrer"
            >
                <h1
                    className="font-noto-display"
                >
                    Needful
                </h1>
            </a>
        </header>
    )
}
