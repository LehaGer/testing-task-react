import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {};

export const productCardSlice = createSlice({
  name: 'productCard',
  initialState,
  reducers: {
    setProduct(state, action: PayloadAction) {
      return action.payload;
    },
  },
});

export default productCardSlice.reducer;
