import { Link } from 'react-router-dom';
import Styles from './Navbar.module.css'

function Navbar(){
    return(
        <nav className={Styles.navbar}>
            <ul>
                <li className={Styles.title}>My Money</li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/signup">Signup</Link></li>
            </ul>
        </nav> 
    )
}

export default Navbar;