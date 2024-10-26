import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InfoBasedState {
  task: string | null;
  dependency: string | null;
  effort: string | null;
}

const initialState: InfoBasedState = {
  task: null,
  dependency: null,
  effort: null,
};

const infoSlice = createSlice({
  name: 'infoBased',
  initialState,
  reducers: {
    setTask(state, action: PayloadAction<string>) {
      state.task = action.payload;
    },
    setDependency(state, action: PayloadAction<string>) {
      state.dependency = action.payload;
    },
    setEffort(state, action: PayloadAction<string>) {
      state.effort = action.payload;
    },
    resetInfoBased(state) {
      return initialState;
    }
  },
});

export const { setTask, setDependency, setEffort, resetInfoBased } = infoSlice.actions;
export default infoSlice.reducer;
