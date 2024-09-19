import { createSlice } from '@reduxjs/toolkit'

const userSLice = createSlice({
	name: 'userData',
	initialState: {
		userData: {id: 1, name: 'Никита', email: '2two2two8eight@mail.ru'}
	},
	reducers: {
		setUser: (state, action) => {
			state.userData = action.payload
		}
	}
})

export const {setUser} = userSLice.actions
export default userSLice.reducer