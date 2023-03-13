import { Product } from "../../domain/models/Product";

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
