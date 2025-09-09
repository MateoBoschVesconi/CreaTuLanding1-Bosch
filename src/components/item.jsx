// 1. Componentes -> Nombres en Mayuscula
import "./item.css";
import ButtonAddToCart from "./buttonaddtocart";

function Item(props) {
  console.log(props);

  //Destructuracion o Destructuring

  const { title, img, price } = props;
  // 2. Los componentes retornan JSX/HTML
  return (
    <div className="item-list">
      <div className="item-card">
        <h2 className="item-card-title">{title}</h2>
        <img className="item-card-img" src={img} alt={title} />
        <h3>Precio: $ {price} </h3>
        <ButtonAddToCart></ButtonAddToCart>
      </div>
    </div>
  );
}
// 3. Se exporta el componente
export default Item;
