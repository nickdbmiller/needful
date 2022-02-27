import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
import Searchbar from './Searchbar.jsx';

const Layout = (props) => (
    <div>
        <Header />
        <div className='mb-36'>
            {props.children}
        </div>
        <footer
            className='fixed w-full bottom-0'
        >
            <Searchbar />
            <Navbar />
        </footer>
    </div>
)

export default Layout
