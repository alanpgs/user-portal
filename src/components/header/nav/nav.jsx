import { useContext } from 'react';
import ThemeContext from '../../../store/themeContext';
import Button, {IconButton} from "../../button/button";
import {useLanguageContext} from "../../../store/langContext";

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
                <li><Button title="Login"/></li>
                <li><IconButton setFun={changeTheme}/></li> 
                <li><Button title={langString} trigger={langFn}/></li> 
            </ul>
        </nav>
    )
}

export default Nav;