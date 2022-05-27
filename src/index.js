import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,HashRouter } from 'react-router-dom';
import { HTML5Backend } from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'
import { store } from "./redux/store";
import App from './app/App';
import './index.scss';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter basename="" hashType="#"  >
    {/* basename="" hashType="#" */}
      <DndProvider  backend={HTML5Backend}> 
        <Provider store={store}>
          <App />
        </Provider>
      </DndProvider>
    </HashRouter>
);

