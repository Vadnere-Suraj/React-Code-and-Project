import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import authservice from './appwrite/auth'
import './App.css';
import {login,logout} from './store/authSlice'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';


function App() {
 
  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authservice.getCurrentUser().then((data)=>{
     if (data) {
      dispatch(login({data}));
     } else {
      dispatch(logout());
     }
    }).finally(()=>{
      setloading(false);
    })
    
  }, []);
  
  return !loading ? (<div className=' w-full h-screen bg-blue-700'><Header/><main>TODO: <Outlet/></main><Footer/>Test</div>) : null 
}

export default App
