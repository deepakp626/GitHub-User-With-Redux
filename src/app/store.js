import { configureStore } from '@reduxjs/toolkit'
import gitUser  from '../features/gitUserSlice'

export default configureStore({
  reducer: {
      app:gitUser,
  }
})