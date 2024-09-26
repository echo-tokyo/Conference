import { createSlice } from '@reduxjs/toolkit'

const userSLice = createSlice({
	name: 'userData',
	initialState: {
		userData: {id: 1, name: 'Никита', email: '2two2two8eight@mail.ru', ava: '../../../public/person 26.png', shorts: [{id: '4', video: '../../../public/Like_7330266907663915152.mp4'},{id: '5', video: '../../../public/Like_7330266907663915152.mp4'}]}
	},
	reducers: {
		setUser: (state, action) => {
			state.userData = action.payload
		},
		addShortData: (state, action) => {
			state.userData.shorts.push(action.payload)
		}
	}
})

export const {setUser, addShortData} = userSLice.actions
export default userSLice.reducer