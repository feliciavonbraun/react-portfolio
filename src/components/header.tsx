
function Header() {
    return (
        <div>
            <div id="circularMenu" className="circular-menu">
                {/* <a className="floating-btn" onclick="document.getElementById('circularMenu').classNameList.toggle('active');">
                    <i className="fa fa-plus material-icons">menu</i>
                </a> */}

                <menu className="items-wrapper">
                    <a href="#projects" className="menu-item fa">Projects</a>
                    <a href="#about" className="menu-item fa">About</a>
                    <a href="#skills" className="menu-item fa ">Skills</a>
                    <a href="#contact" className="menu-item fa fa-linkedin">Contact</a>
                </menu>
            </div>

            <div>
                <h1 className="flex center">FELICIA VON BRAUN </h1>
                <div className="flex center">
                    <hr className="line" />
                    <h2 className="myTitle">ASPIRING FRONTEND DEVELOPER</h2>
                    <hr className="line" />
                </div>
            </div>
        </div>
    )
}
export default Header;