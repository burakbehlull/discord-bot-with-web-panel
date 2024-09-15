import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false
    },
    reducers: {
        setIsLogin: (state, action) =>{
            state.serverId = action.payload
        }
    }
})

export const { setIsLogin } = keepSlice.actions
export default authSlice.reducer