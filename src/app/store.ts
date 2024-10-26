import { configureStore } from '@reduxjs/toolkit';
import infoBasedReducer from '../service/info-based/info.slice';
import timeBasedReducer from '../service/time-based/time.slice';
import calculationTypeReducer from '../service/calculation-type/calculation.slice';
import resultReducer from '../service/result-type/result.slice';

const store = configureStore({
  reducer: {
    infoBased: infoBasedReducer,
    timeBased: timeBasedReducer,
    calculationType: calculationTypeReducer,
    result: resultReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
