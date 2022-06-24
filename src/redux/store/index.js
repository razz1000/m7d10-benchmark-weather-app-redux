import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //  This is used for when saving to LOCAL STORAGE
import storageSession from "redux-persist/es/storage/session";
import { encryptTransform } from "redux-persist-transform-encrypt";
import weatherReducer from "../reducers/weather";
import latitudeReducer from "../reducers/latitude";
import longitudeReducer from "../reducers/longitude";

const persistConfig = {
  key: "root",
  storage: storage, //--- This is used for when saving to LOCAL STORAGE  */
  /* storage: storageSession, */ // This is used for storing on session

  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
      onError: (error) => {
        console.log(error);
      },
    }),
  ],
};

const bigReducer = combineReducers({
  weather: weatherReducer,
  latitude: latitudeReducer,
  longitude: longitudeReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
