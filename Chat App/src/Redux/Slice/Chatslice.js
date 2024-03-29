import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  selectedRow: null,
  chatData: null,
  isLoading: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    // write action logic here`
    toggleChat: (state) => {
      state.toggle = !state.toggle;
      state.selectedRow = state.toggle ? state.selectedRow : null;
    },
    setSelectedRow: (state, action) => {
      state.selectedRow = action.payload;
      state.chatData = action.payload ? state.chatData : null;
    },
    setChatData: (state, action) => {
      state.chatData = action.payload;
    },
    setIsLoading: (state) => {
      state.isLoading = !state.isLoading;
      console.log("loading",state.isLoading);
    },
  },
});

// exporting action from reducer to use this in component
export const {
  toggleChat,
  setSelectedRow,
  setChatData,
  setIsLoading,
} = chatSlice.actions;

// exporting reducer to save this in store components
export const chatReducers = chatSlice.reducer;
