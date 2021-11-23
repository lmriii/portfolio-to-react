import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';
import Maternity from './components/Gallery';
import Hero from './components/Hero';
import Family from './components/FamilyGallery';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Hero />
      <Header />
      <Family />
      <Maternity />
    </div>
    </BrowserRouter>
  );
}

export default App;
