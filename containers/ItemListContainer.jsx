import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../components/Item";
import { products } from "../../data/products";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Simulación asincrónica
    const fetchData = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(products.filter((prod) => prod.category === categoryId));
        } else {
          resolve(products);
        }
      }, 500);
    });

    fetchData.then((res) => setItems(res));
  }, [categoryId]);

  return (
    <div>
      <h2>{categoryId ? `Categoría: ${categoryId}` : "Catálogo completo"}</h2>
      <div className="item-list">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
