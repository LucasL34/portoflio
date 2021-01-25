import Nav from './components/nav.js';
import Buscador from './components/buscador.js';
import Content from './components/content.js';

import './App.css';
import './bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Buscador/>
      <Content/>
    </div>
  );
}

export default App;