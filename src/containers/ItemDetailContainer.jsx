import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ButtonAddToCart from "../components/ButtonAddToCart";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === parseInt(id)));
      }, 500);
    });

    fetchItem.then((res) => setItem(res));
  }, [id]);

  if (!item) return <p>Cargando producto...</p>;

  return (
    <div className="item-list">
      <div className="item-card">
        <h2 className="item-card-title">{item.title}</h2>
        <img className="item-card-img" src={item.img} alt={item.title} />
        <h3>Precio: $ {item.price}</h3>
        <ButtonAddToCart />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
