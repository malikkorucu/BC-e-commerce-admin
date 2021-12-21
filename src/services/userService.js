import axios from "./main/index";

export const getUsersList = async () => {
  const res = await axios.get("https://reqres.in/api/users?page=1");
};

export const getProducts = (...args) => axios.get("Product/products", ...args);
export const addNewProduct = (...args) => axios.post("Product/product", ...args);
