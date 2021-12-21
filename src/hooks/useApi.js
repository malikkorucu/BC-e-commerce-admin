import { useState } from "react";

export const useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setError(!response.isSuccess);
    if (!response.isSuccess) {
      // console.info(response.data.data);
      console.log(response)
    }
     setData(response.data.data ? response.data.data : response.data);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    return response.data.data ? response.data.data : response.data;
  };

  return {
    data,
    error,
    loading,
    request,
  };
};
