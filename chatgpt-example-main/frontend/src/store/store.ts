import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
// import { setupListeners } from '@reduxjs/toolkit/query'

import { chatApi } from '../services/chatApi';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    [chatApi.reducerPath]: chatApi.reducer,
  },
// setup middlewere 
  middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(chatApi.middleware),
});

// setupListeners(store.dispatch)


// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
