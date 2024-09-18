import { configureStore } from '@reduxjs/toolkit'
import roomsReducer from './rooms/rooms.slice'

export const store = configureStore ({
	reducer: {
		rooms: roomsReducer
	}
})