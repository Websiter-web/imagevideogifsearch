// import { configureStore } from "react-redux";
import {configureStore} from '@reduxjs/toolkit'
import searchReducer from "./features/searchSlice";
import collectionReducer from "./features/collectionSlice";

export const store =  configureStore({
    reducer:{
        search:searchReducer,
        collection:collectionReducer, // do not forget to add in store never forget
    }
})
