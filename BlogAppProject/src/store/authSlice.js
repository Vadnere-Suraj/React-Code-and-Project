import { createSlice } from "@reduxjs/toolkit"



const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
        state.status = true;
        state.userData = action.payload.data;
        
        },

        logout: (state)=> {
            return initialState;
        }
    },

    // extraReducers: (builder) => {
    //     builder.addCase(logout.type, (state) => state); // No change needed
    //   },
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
