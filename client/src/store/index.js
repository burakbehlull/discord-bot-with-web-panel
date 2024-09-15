import { configureStore } from '@reduxjs/toolkit'

import keepSlice from './slices/keepSlice'
import authSlice from './slices/keepSlice'

export const store = configureStore({
    reducer: {
        keep: keepSlice,
        auth: authSlice
    }
})