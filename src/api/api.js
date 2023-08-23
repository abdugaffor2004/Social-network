import axios from "axios";

export const instance = axios.create({
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: { "API-KEY": "fbaed546-b83e-41ea-bf18-c251dff1971b" },
  withCredentials: true,
});

export let userApi = {

  getUsers: async (pageSize = 7, currentPage = 1) => {
    return (await instance.get(`users?count=${pageSize}&page=${currentPage}`)).data
      // можно и так, без then
  },

  followUser: (userId) => {
    return instance.post(`follow/${userId}`)
      .then((response) => response.data);
  },

  unfollowUser: (userId) => {
    return instance.delete(`follow/${userId}`)
      .then((response) => response.data);
  }
  

}

export let authApi = {

  authMe : () =>{
    return instance.get('auth/me').then( (response) => {return response.data} )
  },

  authLogin: (email, password, rememberMe=false, captcha=null) => instance.post(`/auth/login`, {email, password, rememberMe, captcha}).then( (response) => response.data ),
  authLogout: () => instance.delete('/auth/login').then( response => response.data ),

}

export let securityApi = {

  getCaptcha: () => instance.get('/security/get-captcha-url').then( response => response.data)

}

export let profileApi = {
    getProfile: (userId) => {
      return instance.get('profile/'+userId).then( (response) => response.data )
    },

    getStatus: (userId) =>{
      return instance.get('profile/status/'+userId).then( (response) => response.data )
    },

    updateStatus: (status) =>{
      return instance.put('profile/status', {status: status}).then( response => response.data )
    }
}







