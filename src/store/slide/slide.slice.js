import { createSlice } from '@reduxjs/toolkit'

const slideSlice = createSlice({
	name: 'slideData',
	initialState: {
		shortsData: [],
		commentsData: [{user: 'Юзер', msg: 'Ахуенный шортс спасибо обязательно зайду к вам на урок'}]
	},
	reducers: {
		addShortsData: (state, action) => {
			state.shortsData.push(action.payload)
		},
		setShortsData: (state, action) => {
			state.shortsData = action.payload
		},
		setCommentsData: (state, action) => {
			state.commentsData = action.payload
		}
	}
})

export const {addShortsData, setShortsData, setCommentsData} = slideSlice.actions
export default slideSlice.reducer