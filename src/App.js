import logo from './logo.svg';
import './App.css';

import {Routes,Route} from "react-router-dom"
import Products from './routes/products'
import Cart from './routes/cart';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
