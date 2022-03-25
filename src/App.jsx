import { useContext } from 'react';
import {ThemeProvider} from './store/themeContext';
import Header from './components/header/header';
import HomeMain from './pages/home/home';
import UserPage from './pages/user/userpage';
import CommonFooter from './components/footer/footer';
import './App.scss';

function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <Header />
        <UserPage />
        <CommonFooter />
      </ThemeProvider>
    </div>
    
  ) ;
}

export default App
