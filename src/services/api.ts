//https://next.json-generator.com/api/json/get/V1pMBbO3K
import axios, { AxiosRequestConfig } from "axios";

export const getAllData = () => {
  const options: AxiosRequestConfig = {
    url: `https://next.json-generator.com/api/json/get/V1pMBbO3K`,
    method: "GET",
  };
  return axios(options);
};
