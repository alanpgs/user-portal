import Header from './components/header/header';
import HomeMain from './pages/home/home';
import CommonFooter from './components/footer/footer';
import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <HomeMain />
      <CommonFooter />
    </div>
  ) ;
}

export default App
