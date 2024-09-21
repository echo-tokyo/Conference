import { createSlice } from '@reduxjs/toolkit'

const slideSlice = createSlice({
	name: 'slideData',
	initialState: {
		shortsData: [{id: '1', desc: 'мой новый видос пиздец крутой', author: 'Автор', video: '../../../public/Like_7393666118245324689.mp4'}, {id: '2', desc: 'Залетайте на мои уроки', author: 'Автор23', video: '../../../public/Download (14).mp4'}],
		commentsData: [{user: 'Юзер', msg: 'Ахуенный шортс спасибо обязательно зайду к вам на урок'}]
	},
	reducers: {
		setShortsData: (state, action) => {
			state.shortsData.push(action.payload)
		},
		setCommentsData: (state, action) => {
			state.commentsData = action.payload
		}
	}
})

export const {setShortsData, setCommentsData} = slideSlice.actions
export default slideSlice.reducer