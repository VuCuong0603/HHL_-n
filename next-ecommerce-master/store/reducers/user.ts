import { remove } from "lodash";

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginAPI } from "utils/data/auth/LoginApi";
import { toast } from "react-toastify";
import { routerKey } from "vue-router";
import { useRouter } from "next/router";
type ProductType = {
  id: string;
  name: string;
  thumb: string;
  price: string;
  count: number;
  color: string;
  size: string;
};

type ToggleFavType = {
  id: string;
};

interface UserSliceTypes {
  user: any;
  favProducts: any;
}

const initialState = {
  user: null,
  favProducts: [],
} as UserSliceTypes;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavProduct(state, action: PayloadAction<ToggleFavType>) {
      const index = state.favProducts.includes(action.payload.id);

      if (!index) {
        state.favProducts.push(action.payload.id);

        return;
      }

      remove(state.favProducts, (id) => id === action.payload.id);
    },
    setUserLogged(state, action: PayloadAction<ProductType>) {
      const index = state.favProducts.includes(action.payload.id);

      if (!index) {
        state.favProducts.push(action.payload.id);

        return {
          ...state,
          favProducts: state.favProducts,
        };
      }

      remove(state.favProducts, (id) => id === action.payload.id);

      return {
        ...state,
        favProducts: state.favProducts,
      };
    },
    SetUser(state, action) {
      state.user = action.payload;
    },
    removeUser(state) {
      state.user = null;
      localStorage.removeItem("accessToken");
    },
  },
});

export const { toggleFavProduct, setUserLogged, removeUser, SetUser } =
  userSlice.actions;
export default userSlice.reducer;
