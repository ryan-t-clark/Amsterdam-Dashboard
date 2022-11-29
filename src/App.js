import './App.css';

import Navbar from './components/Navbar';
import Home from './components/Home';
import History from './components/History';
import Initiatives from './components/Initiatives';
import Dashboard from './components/Dashboard';
import Sources from './components/Sources';
import NotFound from './components/NotFound'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>

      <Navbar />

      <br /><br /><br />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sources" element={<Sources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
