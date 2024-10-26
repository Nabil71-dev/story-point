import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CalculationTypeState {
  calculationType: 'info' | 'time' | null;
}

const initialState: CalculationTypeState = {
  calculationType: 'info',
};

const calculationTypeSlice = createSlice({
  name: 'calculationType',
  initialState,
  reducers: {
    setCalculationType: (state, action: PayloadAction<'info' | 'time' | null>) => {
      state.calculationType = action.payload;
    },
  },
});

// Export actions and reducer
export const { setCalculationType } = calculationTypeSlice.actions;
export default calculationTypeSlice.reducer;
