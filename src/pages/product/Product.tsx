import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../shared/store/hooks";
import "./Product.scss";
import {
  selectProduct,
  selectProducts,
  productList,
  createNewProduct,
} from "./ProductSlice";

function Product() {
  //const product = useAppSelector(selectProduct);
  const products = useAppSelector(selectProducts);
  const [_product, setProduct] = useState({
    name: "",
    inInventory: 0,
    enabled: "",
    min: 0,
    max: 0,
  });
  const dispatch = useAppDispatch();

  const saveProduct = () => {
    const productToSave = {
      ..._product,
      enabled: _product?.enabled === "yes" ? true : false,
    };
    dispatch(createNewProduct(productToSave));
  };

  React.useEffect(() => {
    dispatch(productList());
  }, [dispatch]);

  return (
    <>
      <div className="products">
        <h1>Products</h1>
        <div className="product__list">
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>In Inventory</th>
                <th>Enabled</th>
                <th>Min</th>
                <th>Max</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.inInventory}</td>
                  <td>{product.enabled ? "Yes" : "No"}</td>
                  <td>{product.min}</td>
                  <td>{product.max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="product__form">
        <h1>Product Form</h1>
        <form>
          <div className="form__group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) =>
                setProduct({ ..._product, name: e.target.value })
              }
            />
            <label htmlFor="inInventory">In Inventory</label>
            <input
              type="number"
              id="inInventory"
              name="inInventory"
              onChange={(e) =>
                setProduct({ ..._product, inInventory: Number(e.target.value) })
              }
            />
            <label htmlFor="enabled">Enabled</label>
            <input
              type="radio"
              id="true"
              name="enabled"
              value="yes"
              onChange={(e) =>
                setProduct({ ..._product, enabled: e.target.value })
              }
            />
            Yes
            <input
              type="radio"
              id="false"
              name="enabled"
              value="no"
              onChange={(e) =>
                setProduct({ ..._product, enabled: e.target.value })
              }
            />
            No
            <hr></hr>
            <label htmlFor="min">Min</label>
            <input
              type="number"
              id="min"
              name="min"
              onChange={(e) =>
                setProduct({ ..._product, min: Number(e.target.value) })
              }
            />
            <label htmlFor="max">Max</label>
            <input
              type="number"
              id="max"
              name="max"
              onChange={(e) =>
                setProduct({ ..._product, max: Number(e.target.value) })
              }
            />
            <button
              type="button"
              onClick={() => {
                saveProduct();
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Product;
