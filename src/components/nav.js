
function Nav() {
    // navbar navbar-default navbar-fixed-top
    // navbar navbar-expand-lg cols-12 justify-content-between fix
    return(
        <nav className="navbar navbar-fixed-top">
            <a
            href="#home"
            id="portfolio"
            className="navbar-brand "
            > Lucas Lopez - Portfolio </a>
            <div id="nav-container_" className="justify-content-between">
                <a
                href="#home"
                id="homeA"
                className="navbar-brand text-color_"
                > Home </a>
                <a
                href="#gallery"
                id="galleryA"
                className="navbar-brand text-color_"
                > Gallery </a>
                <a
                href="#contact"
                id="contentA"
                className="navbar-brand text-color_"
                > Contact </a>
            </div>
        </nav>
    )
}

export default Nav;