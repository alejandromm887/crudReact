import logo from './logo.svg';
import './App.css';
import './css/components.css';

import { PrimerComponente } from './components/PrimerComponente';
import { SegundoComponente } from './components/SegundoComponente'
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola Mundo</p>
        <PrimerComponente/>
        <SegundoComponente/>
      </header>
      
    </div>
  );
}

export default App;
