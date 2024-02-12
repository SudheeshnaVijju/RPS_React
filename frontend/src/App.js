import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Turns from './components/turns';
import Game from './components/game';
import About from './components/about';
import Contact from './components/contact';
function App() {
  return (
    <div className="App">

      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/turns' element={<Turns />} />
        <Route path='/turns/:id' element={<Turns />} />
        <Route path='/game/:id/:count' element={<Game />}/>
        <Route path='/game/:count' element={<Game />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
