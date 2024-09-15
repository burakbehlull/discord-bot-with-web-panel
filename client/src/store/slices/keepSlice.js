import { createSlice } from '@reduxjs/toolkit'
export const keepSlice = createSlice({
    name: 'keep',
    initialState: {
        serverId: null
    },
    reducers: {
        setServerId: (state, action) =>{
            state.serverId = action.payload
        }
    }
})

export const { setServerId } = keepSlice.actions
export default keepSlice.reducer