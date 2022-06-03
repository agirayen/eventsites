import axios from "axios";

export const postData = (url, data) => {
  return axios.post(url, data);
};

export const getData = (url, data) => {
  return axios.get(url, {
    params: data,
  });
};
