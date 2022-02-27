import Navbar from './Navbar.jsx';
import Header from './Header.jsx';
import Searchbar from './Searchbar.jsx';

const Layout = (props) => (
    <div>
        <Header />
        <div>
            {props.children}
        </div>
        <Searchbar />
        <Navbar />
    </div>
)

export default Layout
