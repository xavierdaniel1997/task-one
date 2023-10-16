import { createSlice } from "@reduxjs/toolkit";

const tableDataSlice = createSlice({
    name : 'tableData',
    initialState: {
        datas: [],
    },
    reducers : {
        insertInputs : (state, action) => {
            state.datas.push(action.payload)
        }
    }
})

export const {insertInputs} = tableDataSlice.actions;
export default tableDataSlice.reducer;