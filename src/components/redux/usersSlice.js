import { createSlice } from "@reduxjs/toolkit";

export const usersSlice=createSlice({
    name:'users',
    initialState:{
        data:''
    },
    reducers:{
        update:(state,action)=>{
            state.data=action.payload
        }

    }
})

export const { update } = usersSlice.actions

export default usersSlice.reducer