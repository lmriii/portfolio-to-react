import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Navbar';
import {BrowserRouter} from 'react-router-dom';
import Hero from './components/Hero';
import Gallery from './components/GalleryContainer';
import About from './components/About';
import Newborn1 from './components/NewbornGallery1';




function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Hero />
      <Header />
      <Newborn1 />
      <About />
      <Gallery />
    </div>
    </BrowserRouter>
  );
}

export default App;
