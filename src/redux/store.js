import { configureStore } from "@reduxjs/toolkit";
import tableDataSliceReducer from "./tableDataSlice";

const store = configureStore({
    reducer: {
        tableData: tableDataSliceReducer
    }
})

export default store;