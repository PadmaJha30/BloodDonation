import { BrowserRouter,Routes,Route } from 'react-router-dom';
import  './registration.css'; 
import './ALogin.css';
import './Aheader.css';
import Register from './Components/Pages/Register';
import Header from './Components/Layout/Header';
import Home from './Components/Pages/Home';
import AddDoner from './Components/Pages/AddDoner';
import ShowDoner from './Components/Pages/ShowDoner';
import DonnerRecords from './Components/Pages/DonerRecords';
import RegDonerAndRequester from './Components/Pages/RegDonerAndRequester';
import AdminLogin from './Components/Pages/AdminLogin';
function App() {
  return (
   
 <BrowserRouter>
 <Routes>
  <Route path='/' element ={<Home/>}/>
  <Route path='/register' element ={<Register/>}/>
  <Route path ='/addDoner' element ={<AddDoner/>}/>
  <Route path ='/regDonerAndReqester' element ={<RegDonerAndRequester/>}/>
  <Route path='/showDoner' element={<ShowDoner/>}/>
  <Route path='/doner' element={<DonnerRecords/>}/>
  <Route path='/adminLogin' element={<AdminLogin/>}/>

 </Routes>
 </BrowserRouter>
  );
}

export default App;
