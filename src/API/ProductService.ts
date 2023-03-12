import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

const {
  REACT_APP_SOURCE_URL: SOURCE_URL,
  REACT_APP_SOURCE_URL_PARAMS: SOURCE_URL_PARAMS,
  REACT_APP_SOURCE_URL_METHOD: SOURCE_URL_METHOD,
  REACT_APP_SOURCE_URL_HEADER_ACCEPT: SOURCE_URL_HEADER_ACCEPT,
  REACT_APP_SOURCE_URL_HEADER_CONTENT_TYPE: SOURCE_URL_HEADER_CONTENT_TYPE,
} = process.env;

export interface IProductQueryAttributes {
  productId: string;
}

export default class ProductService {
  static getProductInfo = createAsyncThunk(
    'productCard/getProductInfo',
    async ({ productId }: IProductQueryAttributes, { rejectWithValue }) => {
      try {
        const response = await axios({
          method: SOURCE_URL_METHOD,
          url: `${SOURCE_URL}/api/v1/products/${productId}?${SOURCE_URL_PARAMS}`,
          headers: {
            Accept: SOURCE_URL_HEADER_ACCEPT,
            'Content-Type': SOURCE_URL_HEADER_CONTENT_TYPE,
            // 'Cache-Control': 'no-cache',
            // Pragma: 'no-cache',
            // Expires: '0',
          },
          data: {},
        });
        return response?.data;
      } catch (error) {
        return rejectWithValue((error as AxiosError).message);
      }
    }
  );
}
