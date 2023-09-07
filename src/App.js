import './App.css';
import React, { useState } from 'react'
import Header from './Reuseable/Header'
import Cart from './Reuseable/Cart';
import OrderFile from './Reuseable/OrderFile';
import MenuPage from './MenuPage';



function App() {
  const [counter,setCounter]=useState(0);
  const [Order,setOrder]=useState({});
  const [CartItems,setCartItems]=useState([]);
  const [totalAmount,setTotalAmount]=useState(0);
  
  const AddtoCart=(item)=>{
    setOrder(item);
  }
  return (
    <div className="App">
      <Cart CartItems={CartItems}
      setCartItems={setCartItems}
      counter={counter}
      setCounter={setCounter}
      totalAmount={totalAmount}
      setTotalAmount={setTotalAmount}
      />
      <OrderFile Order={Order} 
       setCounter={setCounter}
       counter={counter}
       setCartItems={setCartItems}
       CartItems={CartItems}
       setOrder={setOrder}
       totalAmount={totalAmount}
      setTotalAmount={setTotalAmount}
       />
      <Header counter={counter}
      />
      <MenuPage AddtoCart={AddtoCart}/>
    </div>
  );
}

export default App;
