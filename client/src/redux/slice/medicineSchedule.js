import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createMedicine, getAllMedicineApi } from "../api/medicineSchedule";

const initialState = {
  medicine: null,
  medicines: [],
  isLoading: false,
  error: null,
  message: null,
};

// Generalized async thunk function
const AsyncFunctionThunk = (name, apiFunction) => {
  return createAsyncThunk(`medicineSchedule/${name}`, async (data, { rejectWithValue }) => {
    try {
      const response = await apiFunction(data);
      return response.data;
    } catch (error) {
      console.error(`Failed to ${name}:`, error);
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data);
      }
      return rejectWithValue({ error: error.message });
    }
  });
};

// Define async thunks for each operation
export const createMedicineSlice = AsyncFunctionThunk(
  "createMedicine",
  createMedicine
);
export const getAllMedicineSlice = AsyncFunctionThunk(
    "getAllMedicineApi",
   getAllMedicineApi
  );


export const MedicineScheduleSlice = createSlice({
  name: "medicineSchedule",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // createLoginSlicecreateMedicineSlice
      .addCase(createMedicineSlice.fulfilled, (state, action) => {
        state.medicines = action.payload.data;
        state.message = action.payload.message
        state.isLoading = false;
      })
      .addCase(createMedicineSlice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createMedicineSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
       .addCase(getAllMedicineSlice.fulfilled, (state, action) => {
        state.medicines = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllMedicineSlice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllMedicineSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

// Action creators are generated for each case reducer function
export const { setError } = MedicineScheduleSlice.actions;

export default MedicineScheduleSlice.reducer;
