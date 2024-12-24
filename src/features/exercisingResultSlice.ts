import { createSlice } from "@reduxjs/toolkit";

export const exercisingRateSlice = createSlice({
  name: "exercisingResult",
  initialState: {
    exercisingRateResult: "",
    exercisingIntensity: "",
    exercisingRateForTable: [],
  },
  reducers: {
    showExercisingRateResult: (state, action) => {
      state.exercisingRateResult = action.payload;
    },
    showExercisingIntensityResult: (state, action) => {
      state.exercisingIntensity = action.payload;
    },
    showExercisingRateForTableResult: (state, action) => {
      state.exercisingRateForTable = action.payload;
    },
  },
});

export const {
  showExercisingRateResult,
  showExercisingIntensityResult,
  showExercisingRateForTableResult,
} = exercisingRateSlice.actions;

export default exercisingRateSlice.reducer;
