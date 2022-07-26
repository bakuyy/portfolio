import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import About from './pages/About'
import Projects from './pages/Projects'
import Clubs from './pages/Clubs'
import Contact from './pages/Contact'


function App() {
  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path = '/About' exact element = {<About></About>}></Route>
          <Route path = '/Projects' exact element = {<Projects></Projects>}></Route>
          <Route path = '/Clubs' exact element = {<Clubs></Clubs>}></Route>
          <Route path = '/Contact' exact element = {<Contact></Contact>}></Route>        </Routes>

    </Router>
  );
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
export default App;