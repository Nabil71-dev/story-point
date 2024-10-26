import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { findLargest } from '../../utils/numOfMax';

interface ResultState {
  result: number | null;
}

const initialState: ResultState = {
  result: null,
};

const resultSlice = createSlice({
  name: 'result',
  initialState,
  reducers: {
    calculateResultInfoBased: (state, action: PayloadAction<{ task: string; dependency: string; effort: string }>) => {
      const { task, dependency, effort } = action.payload;
      const numericValues = [
          parseInt(task),
          parseInt(effort),
          parseInt(dependency),
      ];

      state.result = findLargest(...numericValues);
    },
    calculateResultTimeBased: (state, action: PayloadAction<{ time: string; effort:string; complexity:string; uncertainty:string;}>) => {
      const { time, effort, complexity, uncertainty } = action.payload;
      const numericValues = [
        parseInt(time),
        parseInt(effort),
        parseInt(complexity),
        parseInt(uncertainty),
      ];

      state.result = findLargest( ...numericValues); 
    },
    resetResult: (state) => {
      state.result = null;
    },
  },
});

// Export actions and reducer
export const { calculateResultInfoBased, calculateResultTimeBased, resetResult } = resultSlice.actions;
export default resultSlice.reducer;