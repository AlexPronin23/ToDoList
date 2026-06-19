import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

export default configureStore({
    reducer: {
        posts: todoReducer,
        devTools: process.env.NODE_ENV !== 'production',
    }
})