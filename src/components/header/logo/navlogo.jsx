import brandLogo from "../../../assets/images/logo.svg";

function NavLogo() {

    const logo = brandLogo;

    return (
        <div className="nav_logo">
            <a href="#" className="nav_logo_link">
                <img src={logo} alt="UserPortal"></img>
            </a>
        </div>
    )
}

export default NavLogo;