import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (query) => {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=6972fd71157e40268f063922250809&q=${query}&aqi=no`
    );
    const data = await res.json();
    
    if (data.error) {
      throw new Error(data.error.message);
    }
    
    return data;
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    loading: false,
    error: null,
    location: "",
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    clearError: (state) => {
      state.error = null;
    },
    clearWeather: (state) => {
      state.data = null;
      state.loading = true;
      state.location = "";
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch weather data";
        state.data = null;
      });
  },
});

export const { setLocation, clearError, clearWeather } = weatherSlice.actions;
export default weatherSlice.reducer;