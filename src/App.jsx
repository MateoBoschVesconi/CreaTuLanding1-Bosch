import "./App.css";
import Item from "./components/item";
import NavBar from "./components/NavBar";

function App() {
  function getUsername() {
    return "Futbolero";
  }
  function getUserFavColour() {
    return "yellow";
  }

  const welcomeStyles = {
    color: "getUserFavColour",
    fontSize: "20px",
  };

  return (
    <>
      <div>
        <NavBar></NavBar>
      </div>
      <h1>Bienvenido {getUsername()} a Football Universe👌</h1>
      <div style={welcomeStyles} className="card">
        <p>Tu Sitio de camisetas de confianza😉</p>
      </div>
      <div>
        <h2>Item List</h2>
        <Item
          title="Camiseta de Roma"
          price="500"
          img="https://www.marketingregistrado.com/fotos/externas/roma-presento-adidas-camiseta-temporada-202526-1751982114-0.webp"
        ></Item>
        <Item
          title="Camiseta Ajax"
          price="350"
          img="https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwe20762c8/products/ADJP1448/ADJP1448-1.JPG"
        ></Item>
        <Item
          title="Camiseta Barcelona"
          price="600"
          img="https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw699ae707/products/NIDX2687-456/NIDX2687-456-1.JPG"
        ></Item>
        <Item
          title="Camiseta River Plate"
          price="600"
          img="https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2b5074dc/products/ADJI7071SP/ADJI7071SP-1.JPG"
        ></Item>
      </div>
      <p className="read-the-docs">E-commerce</p>
    </>
  );
}

export default App;
