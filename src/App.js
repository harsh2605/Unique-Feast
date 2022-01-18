import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { 
  BrowserRouter as Router, 
  Routes,
  Route 
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
