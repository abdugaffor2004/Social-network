import axios from "axios";


export let getUsers = (pageSize=7, currentPage=1) => {
  return axios.get(
    `https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`, { withCredentials: true }
  ).then( (response) => response.data );
};

