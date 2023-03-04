import { FunctionComponent, useEffect, useState } from "react";
import { CardContainer } from "./Card";
import { Cards } from "./styles/styles";
import axios from "axios";
import Product from "../types/Product";

export const CardsContainer: FunctionComponent = function () {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://pebinhaserver.up.railway.app/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Cards>
      {products.map((product: Product) => (
        <CardContainer name={product.name} description={product.description} prices={product.prices} sizes={product.sizes} ingredients={product.ingredients} key={product._id} image={product.imagePath} />
      ))}
    </Cards>
  );

};

