// Import dependencies
import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

// Import local dependencies
import rootReducer from './reducers';

// Configure store
const store = configureStore({ reducer : rootReducer });

// Export dispatch type
export type AppDispatch = typeof store.dispatch;

// Export store's dispatch function
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Export store
export default store;
