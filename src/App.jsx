import { useState, useEffect } from 'react';
import Header from './components/header/header';
import HomeMain from './pages/home/home';
import UserPage from './pages/user/userpage';
import CommonFooter from './components/footer/footer';
import './App.scss'

function App() {

  const [userTheme, setUserTheme] = useState(null)

  useEffect(()=> {
    let LOCAL = localStorage;
    let GETTHEME = LOCAL.getItem('theme');

    if(GETTHEME){
      setUserTheme(GETTHEME)
      document.querySelector('html').setAttribute('theme', userTheme)
    }else{
      LOCAL.setItem('theme', 'light')
      setUserTheme(GETTHEME)
      document.querySelector('html').setAttribute('theme', userTheme)
    }

  }, [])

  return (
    <div className="App">
      <Header />
      <UserPage />
      <CommonFooter />
    </div>
  ) ;
}

export default App
