import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/cartProvider";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const onToggleModal = () =>{
    setIsModalOpen(prev => !prev)
  }
  const cartContent = isModalOpen ? <Cart onToggleModal = {onToggleModal}/> : null
  return (
    <CartProvider>
      {cartContent}
      <Header onToggleModal = {onToggleModal}/>
      <h2>Let's get started!</h2>
      <main>
      <Meals></Meals>
      
      </main>
    </CartProvider>
  );
}

export default App;
