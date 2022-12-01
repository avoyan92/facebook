import './App.css';
import Container from './Container';
import { Route, Routes } from "react-router-dom";
import AboutPostPage from './components/Pages/AboutPost/AboutPostPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={<Container />} />
        <Route path='/about/:id' element={<AboutPostPage/>} />
      </Routes>
        
       
    </div>
  );
}

export default App;
