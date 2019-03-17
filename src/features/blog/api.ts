import { AxiosPromise } from 'axios';
import { axiosInstance } from '../../axios';

export const fetchPosts = () => axiosInstance.get('/posts');

export const fetchCurrentPost = (id: number): AxiosPromise => axiosInstance.get(`/posts/${id}`);