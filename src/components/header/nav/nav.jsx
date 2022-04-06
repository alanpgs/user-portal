import { useContext } from 'react';
import ThemeContext from '../../../store/themeContext';
import Button, {IconButton} from "../../button/button";
import {useLanguageContext} from "../../../store/langContext";
import { Link } from "react-router-dom";

function Nav() {

    const {theme, setThemeFunction} = useContext(ThemeContext);
    const {lang, setLang, langString, langSwitcher} = useLanguageContext();

    const changeTheme = ()=> {
        if(theme == 'light'){
            setThemeFunction('dark');
        }else{
            setThemeFunction('light');
        }
    }

    const langFn = ()=> {
        if(lang == 'en'){
            langSwitcher('ar')
        }else{
            langSwitcher('en')
        }
    }

    return (
        <nav>
            <ul className="nav_list">
                <li><Link className="nav_link" to='/'>Home</Link></li>
                <li><Link className="nav_link" to='/user'>User</Link></li>
                <li><IconButton setFun={changeTheme}/></li> 
                <li><Button title={langString} trigger={langFn}/></li> 
                <li><Button title="Login"/></li>
            </ul>
        </nav>
    )
}

export default Nav;