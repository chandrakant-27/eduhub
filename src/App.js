
import './App.css';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
   
    <Navbar/>
    <Routes>
        <Route path='/*' element={<App/>}/>
        <Route path='/' element={<App/>}/>
        <Route path='signin' element={<SignIn/>}/>
        <Route path='register' element={<SignUp/>}/>
    </Routes>
 
  
 
       
       {/* <SignIn/> */}
       {/* <SignUp/> */}
       <Footer/>
    </div>
  );
}

export default App;
