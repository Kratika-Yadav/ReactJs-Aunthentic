import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import Signup from './component/Signup';
import Login from './component/Login';
import Profile from './component/Profile';
import Home from './component/Home';
import Protect from './component/Protect';
import Addtask from './component/Addtask';
import Updatetask from './component/Updatetask';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     
  <Routes>
<Route path='/Signup' element={<Signup/>}/>
<Route path='/' element={<Login/>}/>
<Route path='/home' element={<Protect Child={Home}/>}/>
<Route path='/userprofile' element={<Protect Child={Profile}/>}/>
<Route path='/addtask' element={<Protect Child={Addtask}/>}/>
<Route path='/updatetask/:id' element={<Protect Child={Updatetask}/>}/>


  </Routes>
   
    </div>
    </BrowserRouter>

   
  );
}

export default App;
