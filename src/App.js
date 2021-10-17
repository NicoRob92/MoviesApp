import './App.css';
import Nav from './components/nav';
import Home from './components/home';
import Fav from './components/Fav';
import { BrowserRouter ,Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Route path="/">
    <Nav/>
    </Route>
    <Home/>

    <Fav/>
    </div>
    </BrowserRouter>
  );
}

export default  App;
