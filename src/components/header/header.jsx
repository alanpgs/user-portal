import "./header.scss";
import NavLogo from "./logo/navlogo";
import Nav from "./nav/nav";
import { useState } from "react";

 function Header() {

    let [navItems, setNavItems] = useState('')

    return (<header>
        <div className="container">
            <div className="nav_wrapper">
                <NavLogo />
                <Nav navItems={navItems}/>
            </div>
        </div>
    </header>);
}

export default Header;