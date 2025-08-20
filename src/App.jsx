import './css/App.css';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import {Routes, Route} from "react-router-dom";
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';
import ClickSpark from './features/ClickSpark';

function App() {
  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
    <MovieProvider>
      <NavBar />
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favorites" element={<Favorites />}/>
      </Routes>
    </main>
    </MovieProvider>
    </ClickSpark>
  );
}

export default App;
