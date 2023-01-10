import React,{Fragment,useState} from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartShow,setCartIsShow]=useState(false);

  const ShowCartHandler=()=>
  {
    setCartIsShow(true);
  }
  const HideCartHandler=()=>
  {
    setCartIsShow(false);
  }



  return (
    <Fragment>
      {cartShow && <Cart onHideCart={HideCartHandler}/>}
     <Header onShowCart={ShowCartHandler}/>
     < Meals/>
    </Fragment>
  );
}

export default App;
