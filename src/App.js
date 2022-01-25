import './App.css';

import DataContext from './context/ImageContext';
import Data from './components/Data/Data';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/HomePage';
import store from './Store/Store';
import {Provider} from 'react-redux'
import CartPage from './components/CartPage/CartPage';

function App() {
  return (
    <BrowserRouter>
      <DataContext.Provider value={Data}>
        <Provider store={store}>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/cart' element={<CartPage/>}/>
          </Routes>
          </Provider>

      </DataContext.Provider>
    </BrowserRouter>
    
    
  );
}

export default App;
