import axios from "axios";

export const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: { "API-KEY": "fbaed546-b83e-41ea-bf18-c251dff1971b" },
  withCredentials: true,
});




export let getUsers = (pageSize = 7, currentPage = 1) => {
  return instance.get(`users?count=${pageSize}&page=${currentPage}`)
    .then((response) => response.data);
};

export let followUser = (userId) => {
  return instance.post(`follow/${userId}`)
    .then((response) => response.data);
};

export let unfollowUser = (userId) => {
  return instance.delete(`follow/${userId}`)
    .then((response) => response.data);
};
