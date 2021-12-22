import axios from "axios";
import React, { useEffect,useState } from "react";
import { Alert } from "../../components/Common/Alert";
import { DataTable } from "../../components/DevExtreme/DataTable/DataTable";
import { Dropzone } from "../../components/DevExtreme/DropZone";
import { useApi } from "../../hooks/useApi";
import { addNewProduct, getProducts } from "../../services/userService";
import {alert} from '../../helpers/alert'

export const ProductList = () => {
  const { request: getProductsApi, data, loading } = useApi(getProducts);
  const { request: addNewProductApi } = useApi(addNewProduct);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    getProductsApi({});
  }, []);

  const onRowInserted = (data) => {
    addNewProductApi({ ...data, product_image: "asşkdfjasşlj" });
  };

  return (
    <div className="p-5">
      {/* {loading ? (
        "Loading..."
      ) : (
        <DataTable onRowInserted={onRowInserted} data={data} />
      )} */}
      <button onClick={()=> alert()}>alert</button>
      {status && <Alert />}
    </div>
  );
};
