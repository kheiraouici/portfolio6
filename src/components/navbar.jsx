 import { Link } from "react-router-dom/cjs/react-router-dom.min"
 function Navbar () {
    return <nav className="nav">
        <a href="/" className="site-title">JOHN DOE</a>
        <ul>
            <li>
                <link to="/home">home</link>
            </li>
            <li>
                <link to="/contact">contact</link>
                </li>
                <li>
                    <link to="/service">service</link>
                </li>
                <li>
                <link to="/portfolio">portfolio</link>
                </li>
                <li>
                    <link to="/profilgithub">profil github</link>
                </li>
                <li>
                    <link to="/mentionlegales">Mention légales</link>
                </li>
        </ul>
    </nav>
}
export default Navbar