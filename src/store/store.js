import { configureStore } from '@reduxjs/toolkit'
import roomsReducer from './rooms/rooms.slice.js'
import userReducer from './user/user.slice.js'

export const store = configureStore ({
	reducer: {
		rooms: roomsReducer,
		user: userReducer,
	}
})