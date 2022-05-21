import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import {Constructor,Basket,Checkout,ConstructorPrev, Blank} from '../pages';
import "react-toastify/dist/ReactToastify.css";

import './App.scss';
import { Header } from '../components';

function App() {
  return (
    <div className="app">
      {/* <Header /> */}
     <div className='app__content'>
       <Routes  >
         <Route path='/album/:albumId' element={<Constructor />} />
         <Route path="/" element={<ConstructorPrev />} />
         <Route path='/basket' element={<Basket />} />
         <Route path='/checkout' element={<Checkout />} />
         <Route path='/:blankId/:albumId' element={<Blank />} />
       </Routes>
     <ToastContainer />
     </div>
     
    </div>
  );
}
//Баг с блоб


export default App;
