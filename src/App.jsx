import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './components/pages/about/About';
import Navbar from './components/navbar/Navbar';
import Contact from './components/pages/contact/Contact';
import Gallery from './components/pages/gallery/Gallery';
import Home from './components/pages/home/Home';
import Footer from './components/footer/Footer';

function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <div className="App">
        <Switch>

          <Route path='/about'>
            <About />
          </Route>

          <Route path='/contact'>
            <Contact />
          </Route>

          <Route path='/gallery'>
            <Gallery />
          </Route>

          <Route path="/home">
            <Home />
          </Route>








        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );

}

export default App;
