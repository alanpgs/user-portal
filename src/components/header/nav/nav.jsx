import { useEffect } from 'react';
import Button, {IconButton} from "../../button/button";

function Nav() {

    const changeTheme = (event)=> {
        let THEME = localStorage.getItem('theme')

        if(THEME == 'light'){
            localStorage.setItem('theme', 'dark')
        }else{
            localStorage.setItem('theme', 'light')
        }
      
    }

    return (
        <nav>
            <ul className="nav_list">
                <li><Button title="Login"/></li>
                <li><IconButton setFun={changeTheme}/></li> 
            </ul>
        </nav>
    )
}

export default Nav;