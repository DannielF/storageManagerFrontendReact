import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../domain/models/Product";
import { getProducts, createProduct } from "../../services/ProductAPI";
import { RootState } from "../../shared/store/Store";

export interface ProductState {
  products: Product[];
  product: Product;
  status: "idle" | "loading" | "failed";
}

const initialState: ProductState = {
  products: [],
  product: {
    id: "",
    name: "",
    inInventory: 0,
    enabled: false,
    min: 0,
    max: 0,
  },
  status: "idle",
};

export const productList = createAsyncThunk("product/getProducts", async () => {
  return await getProducts();
});

export const createNewProduct = createAsyncThunk(
  "product/createProduct",
  async (product: Product) => {
    return await createProduct(product);
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.products.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(productList.pending, (state) => {
        state.status = "loading";
      })
      .addCase(productList.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(createNewProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createNewProduct.fulfilled, (state, action) => {
        state.status = "idle";
        state.products.push(action.payload);
      });
  },
});

export const { addProduct } = productSlice.actions;

export const selectProducts = (state: RootState) => state.product.products;
export const selectProduct = (state: RootState) => state.product.product;

export default productSlice.reducer;
