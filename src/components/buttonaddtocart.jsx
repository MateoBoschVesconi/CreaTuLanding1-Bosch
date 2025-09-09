//Estado de componentes

import { useState } from "react";

function ButtonAddToCart() {
  //let statusInCart = "No agregaste este producto al carrito";

  const [statusInCart, setterStatusInCart] = useState(
    "No agregaste este producto al carrito"
  );

  function clickUser() {
    alert("Gracias");
    setterStatusInCart("Item agregado al carrito👍");
  }
  return (
    <div>
      <button onClick={clickUser}>Agregar al carrito</button>
      <br></br>
      <small>{statusInCart}</small>
    </div>
  );
}

export default ButtonAddToCart;
