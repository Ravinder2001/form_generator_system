import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface UserState {
  id: string;
  name: string;
  user: boolean;
}

const initialState: UserState = {
  id: "",
  name: "",
  user: false,
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    LoginSlice: (state, action: PayloadAction<{ id: string; name: string }>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.user = true;
    },
    LogoutSlice: (state) => {
      state.id = "";
      state.name = "";
      state.user = false;
    },
  },
});

export const { LoginSlice, LogoutSlice } = UserSlice.actions;
export default UserSlice.reducer;
