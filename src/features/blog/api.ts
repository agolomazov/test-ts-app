import { axiosInstance } from '../../axios';

export const fetchPosts = () => axiosInstance.get('/posts');

export const fetchCurrentPost = (id: number) => axiosInstance.get(`/posts/${id}`);