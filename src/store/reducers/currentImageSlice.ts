import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ProductService from '../../API/ProductService';
import { IProductInfoRowResult } from '../../types';

export interface ICurrentImage {
  url: string | null;
  status: CURRENT_IMAGE_LOAD_STATUS;
  error: string | null;
}

export enum CURRENT_IMAGE_LOAD_STATUS {
  LOADING = 'LOADING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED',
}

const initialState: ICurrentImage = {
  url: null,
  status: CURRENT_IMAGE_LOAD_STATUS.FULFILLED,
  error: null,
};

export const currentImageSlice = createSlice({
  name: 'currentImage',
  initialState,
  reducers: {
    setCurrentImage(state, action: PayloadAction<ICurrentImage>) {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ProductService.getProductInfo.pending, (state) => {
      state.status = CURRENT_IMAGE_LOAD_STATUS.LOADING;
      state.error = null;
    });
    builder.addCase(
      ProductService.getProductInfo.fulfilled,
      (state, action: PayloadAction<IProductInfoRowResult>) => {
        state.status = CURRENT_IMAGE_LOAD_STATUS.FULFILLED;
        state.error = null;
        state.url = action.payload?.data.photos[0].original ?? null;
      }
    );
    builder.addCase(ProductService.getProductInfo.rejected, (state, action) => {
      state.status = CURRENT_IMAGE_LOAD_STATUS.REJECTED;
      state.error = action.payload as string;
      state.url = null;
    });
  },
});

export default currentImageSlice.reducer;
