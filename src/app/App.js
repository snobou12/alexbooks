import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import {Constructor,Basket,Checkout,ConstructorPrev} from '../pages';
import "react-toastify/dist/ReactToastify.css";

import './App.scss';

function App() {
  return (
    <div className="app">
     <div className='app__content'>
       <Routes>
         <Route path='/constructor/album/:albumId' element={<Constructor />} />
         <Route path="/constructor" element={<ConstructorPrev />} />
         <Route path='/basket' element={<Basket />} />
         <Route path='/checkout' element={<Checkout />} />
       </Routes>
     <ToastContainer />
     </div>
     
    </div>
  );
}

export default App;
