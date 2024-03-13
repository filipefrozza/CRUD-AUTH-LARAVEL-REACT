import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducers'; // Supondo que você tenha um rootReducer combinando todos os seus reducers

const store = configureStore({
  reducer: rootReducer
});

export default store;