import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createUserApi, loginUserApi } from "../api/user";

const initialState = {
  user: null,
  users: [],
  isLoading: false,
  error: "",
};

// Generalized async thunk function
const AsyncFunctionThunk = (name, apiFunction) => {
  return createAsyncThunk(`user/${name}`, async (data, { rejectWithValue }) => {
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
export const createUserSlice = AsyncFunctionThunk(
  "createUserApi",
  createUserApi
);
export const loginUserSlice = AsyncFunctionThunk(
  "loginUserApi",
  loginUserApi
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // createLoginSlice
      .addCase(createUserSlice.fulfilled, (state, action) => {
        state.user = action.payload;
        console.log("action", action)
        // localStorage.setItem(
        //   "t_A1b2C3d",
        //   JSON.stringify(action.payload)
        // );
        state.isLoading = false;
        state.user = true;
      })
      .addCase(createUserSlice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUserSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUserSlice.fulfilled, (state, action) => {
        state.user = action.payload;
        localStorage.setItem(
          "t_A1b2C3d",
          JSON.stringify(action.payload.data)
        );
        state.isLoading = false;
        state.user = true;
      })
      .addCase(loginUserSlice.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUserSlice.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment } = userSlice.actions;

export default userSlice.reducer;
