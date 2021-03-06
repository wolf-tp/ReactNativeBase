import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import themeReducer from 'app/styles/reducer';
import langReducer from 'app/locate/reducer';
import modalReducer from 'app/components/modal/reducer';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    modal: modalReducer,
    language: langReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
