import { useContext } from "react/";
import ThemeContext from "../../../store/themeContext";
import blackLogo from "../../../assets/images/logo.svg";
import whiteLogo from "../../../assets/images/logo-white.svg";


function NavLogo() {

    const {isDark} = useContext(ThemeContext)

    const logo = isDark ? whiteLogo : blackLogo;

    return (
        <div className="nav_logo">
            <a href="#" className="nav_logo_link">
                <img src={logo} alt="UserPortal"></img>
            </a>
        </div>
    )
}

export default NavLogo;