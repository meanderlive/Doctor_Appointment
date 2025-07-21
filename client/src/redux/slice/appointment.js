import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createAppointmentApi, getAllAppointmentApi } from "../api/appointment";

const initialState = {
  appointment: null,
  appointments: [],
  isLoading: false,
  error: null,
  message: null,
};

// Generalized async thunk function
const AsyncFunctionThunk = (name, apiFunction) => {
  return createAsyncThunk(`appointment/${name}`, async (data, { rejectWithValue }) => {
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
export const createAppointmentSlice = AsyncFunctionThunk(
  "createAppointmentApi",
  createAppointmentApi
);
export const getAllAppointmentSlice = AsyncFunctionThunk(
  "getAllAppointmentApi",
 getAllAppointmentApi
);

export const AppointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // createLoginSlice
      .addCase(createAppointmentSlice.fulfilled, (state, action) => {
        state.appointment = action.payload.data;
        state.message = action.payload.message
        state.isLoading = false;
      })
      .addCase(createAppointmentSlice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createAppointmentSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
       // getAllLoginSlice
       .addCase(getAllAppointmentSlice.fulfilled, (state, action) => {
        state.appointments = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getAllAppointmentSlice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAppointmentSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

// Action creators are generated for each case reducer function
export const { setError } = AppointmentSlice.actions;

export default AppointmentSlice.reducer;
