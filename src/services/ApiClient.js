import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/",
});

class ApiClient {
  endpoint;

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  // const login = async (data) => {
  //   return await axios.post("http:localhost/login", data);
  // };
  get = async (route, queryString) => {
    let endpoint = `${this.endpoint}${route}`;
    return await axiosInstance
      .get(endpoint + queryString)
      .then((res) => res.data);
  };

  post = async (route, body) => {
    let endpoint = `${this.endpoint}${route}`;
    return await axiosInstance.post(endpoint, body).then((res) => res.data);
  };

  patch = async (route, id, body) => {
    let endpoint = `${this.endpoint}${route}`;
    return await axiosInstance
      .patch(`${endpoint}/${id}`, body)
      .then((res) => res.data);
  };

  delete = async (route, id) => {
    let endpoint = `${this.endpoint}${route}`;
    return await axiosInstance
      .delete(`${endpoint}/${id}`)
      .then((res) => res.data);
  };
}

export default ApiClient;
