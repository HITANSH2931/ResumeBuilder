import { createSlice } from "@reduxjs/toolkit"

const items = localStorage.getItem("auth");
const parseItems = items ? JSON.parse(items) : null;

const initialState = parseItems || {

    user:{},
    isAuthenticated:false,
    isVerified:false,
}

const authSlice = createSlice({
    
    name:"auth",
    initialState,
    reducers:{

        login:(state,action) =>{

            state.user = action.payload;
            state.isAuthenticated = true;
             localStorage.setItem("auth",JSON.stringify(state))

        },

        logout:(state) =>{

            state.user = {};
            state.isAuthenticated=false;
            state.isVerified=false;
            localStorage.removeItem("auth")
        },

        verified:(state) =>{

            state.isVerified = true;
            localStorage.setItem("auth",JSON.stringify(state))
        
            
        }

        
    }

})

export const { login, logout,verified} = authSlice.actions;
export default authSlice.reducer;