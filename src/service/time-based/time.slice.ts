import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TimeBasedState {
  time: string | null;
  effort: string | null;
  complexity: string | null;
  uncertainty: string | null;
}

const initialState: TimeBasedState = {
  time: null,
  effort: null,
  complexity: null,
  uncertainty: null,
};

const timeSlice = createSlice({
  name: 'timeBased',
  initialState,
  reducers: {
    setTime(state, action: PayloadAction<string>) {
      state.time = action.payload;
    },
    setEffort(state, action: PayloadAction<string>) {
      state.effort = action.payload;
    },
    setComplexity(state, action: PayloadAction<string>) {
      state.complexity = action.payload;
    },
    setUncertainty(state, action: PayloadAction<string>) {
      state.uncertainty = action.payload;
    },
    resetTimeBased(state) {
      return initialState; 
    }
  },
});

export const { setTime, setEffort, setComplexity, setUncertainty, resetTimeBased } = timeSlice.actions;
export default timeSlice.reducer;
