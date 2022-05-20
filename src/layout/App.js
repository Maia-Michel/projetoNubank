import logo from '../assets/images/logo.svg';
import './App.css';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav style={{borderBottom:'solid 1px #333', paddingBottom: '1rem' }}>
          <Link to="/register">Cadastro</Link>
          <Link to="/register">Login</Link>
          <Link to="/register">Extrato</Link>
        </nav>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
