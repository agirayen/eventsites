import axios from "axios";

export const postData = (url, data) => {
  return axios.post(url, data);
};

export const getData = (url, data) => {
  let { username, password } = data;
  return axios.get(url, {
    params: {
      username,
      password,
    },
  });
};
