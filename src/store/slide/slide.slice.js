import { createSlice } from '@reduxjs/toolkit'

const slideSlice = createSlice({
	name: 'slideData',
	initialState: {
		shortsData: [{ id: '3', desc: 'мой новый видос пиздец крутой', author: 'Автор', video: '../../../public/Like_7393666118245324689.mp4', likes: '214', dislikes: '192', comments: '23' },{ id: '2', desc: 'Залетайте на мои уроки', author: 'Автор23', video: '../../../public/Download (14).mp4', likes: '24', dislikes: '52', comments: '3' }],
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