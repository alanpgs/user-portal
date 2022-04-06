import { useContext } from "react";
import {  BrowserRouter,  Routes,  Route,} from "react-router-dom";
import LoaderContext from './store/loaderContext';
import {ThemeProvider} from './store/themeContext';
import { UserRegProvider } from "./store/userRegistration";
import { LanguageProvider } from "./store/langContext";
import Header from './components/header/header';
import HomeMain from './pages/home/home';
import UserPage from './pages/user/userpage';
import UserDetails from "./pages/userdetails/userdetails";
import ErrorPage from "./pages/404/error";
import CommonFooter from './components/footer/footer';
import DOMLoader from './components/loader/loader';
import { UserDetailsProvider } from "./store/userDetailsContext";
import './App.scss';
  
function App() {
  const {loaderStatus, loaderType} = useContext(LoaderContext);
  return (
    <BrowserRouter>
      <div className="App">
        <ThemeProvider>
          <LanguageProvider>
            <Header />

            <Routes>
              <Route path="/" element={
                <UserRegProvider>
                  <HomeMain />
                </UserRegProvider>
              } />
              <Route path="/user" element={<UserPage />} />
              <Route path="/user/:userid" element={
                <UserDetailsProvider>
                  <UserDetails />
                </UserDetailsProvider>
              }/>
              <Route path="*" element={<ErrorPage />} />
              </Routes>
            <CommonFooter />

            {
              loaderStatus && 
              <DOMLoader type={loaderType}></DOMLoader>
            }
          </LanguageProvider>
        </ThemeProvider>
      </div>
    </BrowserRouter>
  ) ;
}

export default App
