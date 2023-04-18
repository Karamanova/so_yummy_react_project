import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/authSlice';
import { searchReducer } from 'redux/search/searchSlice';
import { recipesReducer } from './recipes/recipesSlice';
import { shoppingListReducer } from './shoppingList/shoppingListSlice';
import { favouriteRecipesReducer } from './favourite/favouriteSlice';
import { myRecipesReducer } from './myRecipes/myRecipesSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
    recipes: recipesReducer,
    favouriteRecipes: favouriteRecipesReducer,
    shoppingList: shoppingListReducer,
    myRecipes: myRecipesReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
