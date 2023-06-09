import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { subscribeUser } from './authOperations';
import {
  signIn,
  logout,
  register,
  fetchCurrentUser,
  refreshToken,
  updateUser,
} from './authOperations';

const initialState = {
  user: { name: null, email: null, avatarURL: null },
  token: null,
  refreshToken: null,
  isLoggedIn: false,
  isRefreshing: true,
  isSubscribed: false,
  isSubscribeError: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isLoggedIn = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null, avatarURL: null };
        state.token = null;
        state.refreshToken = null;
        state.isLoggedIn = false;
      })
      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(refreshToken.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;
        state.refreshToken = action.payload.refreshToken;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshToken.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(subscribeUser.fulfilled, state => {
        state.isError = null;
        state.isLoading = false;
        state.isSubscribed = true;
      })
      .addCase(subscribeUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(subscribeUser.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isError = null;
        state.isLoading = false;
        state.isSubscribed = true;
        state.user = action.payload;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      });
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refreshToken'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
