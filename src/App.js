import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom';
import Hero from './components/Hero';
import Gallery from './components/GalleryContainer';
import About from './components/About';
import Newborn1 from './components/NewbornGallery1';
import Navigation from './components/Navbar'
import Main from './components/Main';


function App() {
  return (
    <BrowserRouter className='overflow-hidden'>
    <div className="App">
      <Main />
    </div>
    </BrowserRouter>
  );
}

export default App;
