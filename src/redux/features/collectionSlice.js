// using collection slice for storage instead of using storage locally

import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast, Zoom } from "react-toastify"; // make sure to add in app

const initialState = {
  items: JSON.parse(localStorage.getItem("collection")) || [],
};

const collectionSlice = createSlice({
  name: "collection",
  initialState, //uses the function
  reducers: {
    addCOllection: (state, action) => {
      const alreadyExists = state.items.find(
        (item) => item.id === action.payload.id,
      );
      // add item only if exists

      if (!alreadyExists) {
        state.items.push(action.payload);
        localStorage.setItem("collection", JSON.stringify(state.items));
      }
    },
    removeCollection: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload); // add those to the items whose we do not get action from ( so the clicked ones give action and have id that we get so all other elemetns are those whose value we will not get)
      localStorage.setItem("collection", JSON.stringify(state.items));
    },
    clearCollection: (state) => {
      state.items = [];
      localStorage.removeItem("collection");
    },
    addedToast: () => {
      // toast("Added to collection") // the thing come from site is toast
      toast.success("Added to Collection", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: 0,
        theme: "dark",
        transition: Zoom,
      });
    },
    removeToast: () => {
      toast.error("removed from collection", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: 0,
        theme: "dark",
        transition: Zoom,
      });
    },
    clearToast: () => {
      toast.error("Collection Cleared", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: 0,
        theme: "dark",
        transition: Zoom,
      });
    },
  },
});

export const { addCOllection, removeCollection, clearCollection, addedToast, removeToast, clearToast } =
  collectionSlice.actions; // export from this

export default collectionSlice.reducer;

// toastify - npm install --save react-toastify
