import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { advertsReducer } from './advert/advert.reducer';

const advertsFavoritesConfig = {
  key: 'favofites',
  storage,
  whitelist: ['favorites'],
};


export const store = configureStore({
  reducer: {
    advertsStore: persistReducer(advertsFavoritesConfig, advertsReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});



export const persistor = persistStore(store);


// import { configureStore } from '@reduxjs/toolkit';
// import { advertsReducer } from './advert/advert.reducer';



// export const store = configureStore({
//   reducer: {
//     advertsStore: advertsReducer,
//   },
 
// });