import axios from 'axios';

const API = axios.create({ baseURL: 'https://memories-project-dan.herokuapp.com'})

/* const url = 'https://memories-project-dan.herokuapp.com/posts'; */

API.interceptors.request.use((req)=>{
  if(localStorage.getItem('profile')){
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }
  return req;
})

const postsURL = '/posts';
const usersURL = '/user';

export const fetchPosts = () => API.get(postsURL);
export const createPost = (newPost) => API.post(postsURL, newPost);
export const likePost = (id) => API.patch(`${postsURL}/${id}/likePost`)
export const updatePost = (id, updatedPost) => API.patch(`${postsURL}/${id}`,updatedPost);
export const deletePost = (id) => API.delete(`${postsURL}/${id}`);

export const signIn = (formData) => API.post(`${usersURL}/signin`, formData);
export const signUp = (formData) => API.post(`${usersURL}/signup`, formData);