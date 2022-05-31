import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const PRODUCTS_URL = 'https://fakestoreapi.com/products'

export const STATUSES = Object.freeze({
  IDLE: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
  ERROR: 'error',
  LOADING: 'loading',
});

export const fetchProducts = createAsyncThunk('products/fetch', async () => {
  const res = await fetch(PRODUCTS_URL);
  const data = await res.json()
  return data;
})


const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUSES.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUSES.ERROR;
      });
  },
});


export const getProductStatus = (state) => state.product.status;

export default productSlice.reducer