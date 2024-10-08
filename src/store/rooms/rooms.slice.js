import { createSlice } from '@reduxjs/toolkit'

const roomsSlice = createSlice({
	name: 'uuid',
	initialState: {
		roomList: [{id: '1', name: 'Название', desc: 'Описание', pubOrPriv: 'public', organizer: 'Организатор'}],
	},
	reducers:{
		setRooms: (state, action) => {
				state.roomList.push(action.payload)
		},
		delRoom: (state, action) => {
			state.roomList = state.roomList.filter(el => el.id !== action.payload)
		},
	}
})

export const {setRooms, delRoom} = roomsSlice.actions
export default roomsSlice.reducer