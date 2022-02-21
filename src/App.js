
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Firstpage from './Components/FirstPage';
import Navigation from './Components/Navigation';
import SecondPage from './Components/SecondPage';
import ThirdPage from './Components/ThirdPage';


function App() {
  return (
    <div className="App">
   
        <Routes>
          <Route path='/' element={<Firstpage />}/>
          <Route path='/secondpage' element={<SecondPage />}/>
          <Route path='/thirdpage' element={<ThirdPage />}/>
          <Route path="*" element={"404 Error!"} />
        </Routes>
        <Navigation />
    </div>
  );
}

export default App;