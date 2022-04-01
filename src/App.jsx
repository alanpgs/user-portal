import { useContext } from "react";
import LoaderContext from './store/loaderContext';
import {ThemeProvider} from './store/themeContext';
import { UserRegProvider } from "./store/userRegistration";
import { LanguageProvider } from "./store/langContext";
import Header from './components/header/header';
import HomeMain from './pages/home/home';
import UserPage from './pages/user/userpage';
import CommonFooter from './components/footer/footer';
import DOMLoader from './components/loader/loader';
import './App.scss';

function App() {

  const {loaderStatus, loaderType} = useContext(LoaderContext);

  return (
    <div className="App">
      <ThemeProvider>
        <LanguageProvider>
          <Header />
          <UserRegProvider>
            <HomeMain />
          </UserRegProvider>
          <CommonFooter />

          {
            loaderStatus && 
            <DOMLoader type={loaderType}></DOMLoader>
          }
        </LanguageProvider>
      </ThemeProvider>
    </div>
    
  ) ;
}

export default App
