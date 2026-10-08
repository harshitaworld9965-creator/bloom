import "./Nav.css";

function Nav() {
    return (
        <header className="nav">
            <a href="#hero" className="nav__logo">Bloom</a>

            <nav className="nav__links" aria-label="Main">
                <a href="#hero">The Scent</a>
                <a href="#notes">The Notes</a>
            </nav>

            <a href="#closing" className="nav__cta">Shop No.4</a>
        </header>
    )
}

export default Nav;