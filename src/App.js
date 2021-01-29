import Nav from './components/nav.js';
import Buscador from './components/buscador.js';
import Content from './components/content.js';
import Footer from './components/footer'

import './App.css';
import './bootstrap.min.css';

function App() {
  //<div className="App"> 
  return (
    <div className="App"> 
      <Nav/>
      <Buscador/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;