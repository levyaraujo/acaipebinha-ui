import * as S from "./styles";
import { Card, CardProps } from "../ProductCard/Card";
import { motion } from "framer-motion";
import { FunctionComponent, useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import { Hero } from "../Hero";
export const Products: FunctionComponent = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://acaipebinha.fly.dev/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <S.Products>
          <CircularProgress color="inherit" />
        </S.Products>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.5 },
          }}
          exit={{ opacity: 0 }}
        >
          <Hero />
          <S.Products>
            {products.map((product: CardProps) => (
              <Card
                _id={product._id}
                name={product.name}
                description={product.description}
                imagePath={product.imagePath}
                sizes={product.sizes}
                prices={product.prices}
                key={product._id}
              />
            ))}
          </S.Products>
        </motion.div>
      )}
    </>
  );
};
