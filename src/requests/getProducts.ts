import axios from "axios";


export async function getProducts() {
  const products = await axios.get("http://localhost:8000/products");
  const productsFormatted = [];
  for (const product of products.data) {
    productsFormatted.push({
      name: product.name,
      description: product.description,
      sizes: product.sizes,
      prices: product.prices,
      ingredients: product.ingredients
    });
  }

  return products.data;
}
