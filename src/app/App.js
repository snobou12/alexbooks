import { Route, Routes } from 'react-router-dom';
import {Constructor,Basket,Checkout} from '../pages';
import './App.scss';

function App() {
  return (
    <div className="app">
     <div className='app__content'>
       <Routes>
         <Route path='/constructor' element={<Constructor />} />
         <Route path='/basket' element={<Basket />} />
         <Route path='/checkout' element={<Checkout />} />
       </Routes>
     </div>
    </div>
  );
}

export default App;
