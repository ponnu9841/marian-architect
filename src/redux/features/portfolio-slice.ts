import axiosClient from "@/axios/axios-client";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState: {
  loading: boolean;
  portfolio: PortfolioResponse | null;
  pageNo: number;
  error: any; //eslint-disable-line
  selectedPortfolio: Portfolio | null;
} = {
  loading: true,
  portfolio: null,
  pageNo: 1,
  error: "",
  selectedPortfolio: null,
};

export const fetchPortfolio = createAsyncThunk(
  "fetchPortfolio",
  async ({
    pageNo = 1,
    pageSize = 8,
    controller,
  }: {
    pageNo?: number;
    pageSize?: number;
    controller?: AbortController;
  }) => {
    const response = await axiosClient.get(
      `/portfolio?page=${pageNo}&page_size=${pageSize}`,
      {
        signal: controller?.signal,
      }
    );
    return response.data.data;
  }
);

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    setPageNo: (state, action) => {
      state.pageNo = action.payload;
    },

    resetPageNo: (state) => {
      state.pageNo = initialState.pageNo;
    },
	setSelectedPortfolio: (state, action) => {
		state.selectedPortfolio = action.payload
	}
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPortfolio.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPortfolio.fulfilled, (state, action) => {
      state.loading = false;
      state.portfolio = action.payload;
    });
    builder.addCase(fetchPortfolio.rejected, (state, action) => {
      state.loading = false;
      if (action.error.name === "TypeError") return;
      state.error = action.error.message as string;
    });
  },
});

export const { setPageNo, resetPageNo, setSelectedPortfolio } = portfolioSlice.actions;

export default portfolioSlice.reducer;
