// @ts-ignore
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosRequestConfig } from 'axios';

import { BaseApi } from '../../Constant/constant';


const config: AxiosRequestConfig = {
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',

  },
};

config.baseURL = BaseApi.BASE_URL





const instance = axios.create(config);

instance.interceptors.request.use(request => {
  console.log('Starting Request', JSON.stringify(request, null, 2))
  return request
})

// instance.interceptors.response.use(async (response) => {
//   console.log('Response:222', JSON.stringify(response.status, null, 2))
//   return response
// })

export default instance;
