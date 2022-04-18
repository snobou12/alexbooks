import { Route, Routes } from 'react-router-dom';
import {Constructor} from '../pages';
import './App.scss';

function App() {
  return (
    <div className="app">
     {/* <Header /> */}
     <div className='app__content'>
       <Routes>
         <Route path='/constructor' element={<Constructor />} />
       </Routes>
     </div>
    </div>
  );
}

export default App;
