import { Product } from "../domain/models/Product";

export const getProducts = () => {
  return fetch("http://localhost:8080/product", {
    method: "GET",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((products: Product[]) => products);
};

export const createProduct = (product: Product) => {
  return fetch("http://localhost:8080/product", {
    method: "POST",
    mode: "cors",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  })
    .then((response) => response.json())
    .then((product: Product) => product);
};
