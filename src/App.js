import TopNav from './components/TopNav';
import './index.css';
import Home from './pages/Home/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Watch from './pages/Watch';

function App() {
  return (
    <Router>
      <div className="App">
        <TopNav/>
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route path='/watch' element={<Watch />} /> 

        </Routes>
      </div>
    </Router>
  );
}

export default App;
