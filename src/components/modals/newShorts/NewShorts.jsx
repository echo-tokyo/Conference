import { useDispatch, useSelector } from 'react-redux'
import '../modals.css'
import { addShortData } from '../../../store/user/user.slice'

const NewShorts = () => {
	const dispatch = useDispatch()
	const user = useSelector(state => state.user.userData)

	const addShorts = (e) => {
		e.preventDefault()
		const nameInp = document.querySelector('#name')
		const shortsInp = document.querySelector('#file')
		const descInp = document.querySelector('#desc')
		const reader = new FileReader()

		const formData = {
			id: Date.now(),
			author: user.name,
			likes: '',
			dislikes: '',
			comments: '',
			name: nameInp.value,
			desc: descInp.value,
			video: '',
		}

		reader.onload = () => {
			formData.video = reader.result
			dispatch(addShortData(formData))
		}
		if (shortsInp.files && shortsInp.files[0]) {
			reader.readAsDataURL(shortsInp.files[0])
		}
	}

	return (
		<div className="modal">
		<div className="modal__wrapper">
			<h1 className="modal__title">Новый шортс</h1>
			<form action="" className="modal__items" onSubmit={(e) => addShorts(e)}>
				<input type="text" placeholder='Название' name='name' id='name'/>
				<textarea name="desc" id="desc" placeholder='Описание'></textarea>
				<input type="file" id='file' accept=".mp4, video/mp4"/>
				<input type="submit" value='Опубликовать'/>
			</form>
		</div>
	</div>
	)
}

export default NewShorts