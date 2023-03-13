import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import ProductService from '../../API/ProductService';
import { IProductInfo, IProductInfoRowResult } from '../../types';

export interface IProductCard {
  data: IProductInfo | null;
  status: PRODUCT_CARD_LOAD_STATUS;
  error: string | null;
}

export enum PRODUCT_CARD_LOAD_STATUS {
  LOADING = 'LOADING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED',
}

const initialState: IProductCard = {
  data: null,
  status: PRODUCT_CARD_LOAD_STATUS.FULFILLED,
  error: null,
};

export const productCardSlice = createSlice({
  name: 'productCard',
  initialState,
  reducers: {
    setProduct(state, action: PayloadAction) {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(ProductService.getProductInfo.pending, (state) => {
      state.status = PRODUCT_CARD_LOAD_STATUS.LOADING;
      state.error = null;
    });
    builder.addCase(
      ProductService.getProductInfo.fulfilled,
      (state, action: PayloadAction<IProductInfoRowResult>) => {
        state.status = PRODUCT_CARD_LOAD_STATUS.FULFILLED;
        state.error = null;
        state.data = action.payload?.data;
      }
    );
    builder.addCase(ProductService.getProductInfo.rejected, (state, action) => {
      state.status = PRODUCT_CARD_LOAD_STATUS.REJECTED;
      state.error = action.payload as string;
      state.data = null;
    });
  },
});

export default productCardSlice.reducer;
