import { API_URL, API_KEY } from '@/config';
import Axios, { AxiosError, AxiosResponse } from 'axios';

export const axios = Axios.create({
  baseURL: API_URL,
  headers: {
    'X-API-KEY': API_KEY,
  },
});

type resProp = {
  data: [];
  statusCode: string;
  message: string;
};

axios.interceptors.response.use(
  (response: AxiosResponse) => {
    // if (response.data.statusCode) {
    //   return Promise.reject(response.data.message);
    // }

    return response.data;
  },
  (error: AxiosError) => {
    // FIXME: エラー時、共通処理記述など
    // const message: string = error.response?.data?.message || error.message;

    return Promise.reject(error);
  },
);
