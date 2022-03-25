import { useContext } from 'react';
import ThemeContext from '../../../store/themeContext';
import Button, {IconButton} from "../../button/button";

function Nav() {

    const {theme, setThemeFunction} = useContext(ThemeContext);

    const changeTheme = ()=> {
        if(theme == 'light'){
            setThemeFunction('dark');
        }else{
            setThemeFunction('light');
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