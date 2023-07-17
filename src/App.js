import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import StartPage from './pages/StartPage';
import QuizPage from './pages/QuizPage';
import Header from './components/Header';


function App() {
  return (
    <div className='container'>
    <Header/>
    <Router>
      <Routes>
        <Route exact path='/' element={<StartPage/>} />
        <Route exact path='/quiz/:total' element={<QuizPage/>} />
      </Routes>
    
    </Router>
    </div>
  );
}

export default App;
