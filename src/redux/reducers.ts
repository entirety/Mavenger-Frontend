// Import dependencies
import { combineReducers } from '@reduxjs/toolkit';

// Combine reducers
const rootReducer = combineReducers({});

// Export root state type
export type RootState = ReturnType<typeof rootReducer>;

// Export combined reducers
export default rootReducer;
