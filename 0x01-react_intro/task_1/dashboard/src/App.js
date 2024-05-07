import logo from './holberton-logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy} from './utils.js';

function App() {
  return (
    <>
      <div className="App-header">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
        </header>
        <hr />
      </div>

      <div className="App-body">
          <p>Login to access the full dashboard</p>
      </div>

      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>
    </>
  );
}

export default App;
