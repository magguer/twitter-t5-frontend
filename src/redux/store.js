import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import resetReducer from "./resetSlice";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

const store = configureStore({
  reducer: {
    user: persistedReducer,
    reset: resetReducer
  }
})

export default store