// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, Route, Routes } from 'react-router-dom';
import Display from './components/Calculator';
import Apps from './components/Quote';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <nav>
        <div className="navbar">
          <span className="logo">Math Magicians</span>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="lnks"><Link to="/Quotes">Quotes</Link></li>
            <li className="lnks"><Link to="/Calculator">Calculator</Link></li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Quotes" element={<Apps />} />
        <Route path="/Calculator" element={<Display />} />
      </Routes>
    </div>

  );
}

export default App;
