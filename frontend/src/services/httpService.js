import axios from "axios";

export const postData = (url, data) => {
  return axios.post(url, data);
};

export const getData = (url, data) => {
  return axios.get(url, {
    params: data,
  });
};

export const deleteData = (url, data) => {
  return axios.delete(url, data);
};
