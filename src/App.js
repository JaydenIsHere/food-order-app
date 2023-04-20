import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const onToggleModal = () =>{
    setIsModalOpen(prev => !prev)
  }
  const cartContent = isModalOpen ? <Cart onToggleModal = {onToggleModal}/> : null
  return (
    <div>
      {cartContent}
      <Header onToggleModal = {onToggleModal}/>
      <h2>Let's get started!</h2>
      <main>
      <Meals></Meals>
      
      </main>
    </div>
  );
}

export default App;
