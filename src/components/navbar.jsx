 import { Link } from "react-router-dom/cjs/react-router-dom.min";
 function Navbar () {
    return <nav className="nav">
        <a href="/" className="site-title">JOHN DOE</a>
        <ul>
            <li>
                <a href="/home">home</a>
            </li>
            <li>
                <a href="/contact">contact</a>
                </li>
                <li>
                    <a href="/service">service</a>
                </li>
                <li>
                <a href="/portfolio">portfolio</a>
                </li>
                <li>
                    <a href="/profilgithub">profil github</a>
                </li>
                <li>
                    <a href="/mentionlegales">Mention légales</a>
                </li>
        </ul>
    </nav>
}
export default Navbar