import { useNavigate } from 'react-router-dom'
import '../modals.css'
import './newConference.css'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux'
import { setRooms } from '../../../store/rooms/rooms.slice'

const NewConference = () => {
	const dispatch = useDispatch()
	const nav = useNavigate()

	const startConf = (e) => {
		e.preventDefault()
		const uuid = uuidv4()
		const selectedRadio = e.target.querySelector('input[name="radio"]:checked')

		const formData = {
			name: e.target.name.value,
			desc: e.target.desc.value,
			pubOrPriv: selectedRadio ? selectedRadio.id : null
		}

		localStorage.setItem('ConfAdmin', uuid)
		nav(`/conference/${uuid}`)
		dispatch(setRooms({id: uuid, name: formData.name, desc: formData.desc, pubOrPriv: formData.pubOrPriv}))
	}

	return (
		<div className="modal">
			<div className="modal__wrapper">
				<h1 className="modal__title">Новая конференция</h1>
				<form action="" className="modal__items" onSubmit={(e) => startConf(e)}>
					<input type="text" placeholder='Название' name='name'/>
					<textarea name="desc" id="" placeholder='Описание'></textarea>
					<label htmlFor="public">
						<input type="radio" id='public' name='radio' />
						<p>Публичная</p>
					</label>
					<label htmlFor="private">
						<input type="radio" id='private' name='radio' />
						<p>Приватная</p>
					</label>
					<input type="submit" value='Запуск'/>
				</form>
			</div>
		</div>
	)
}

export default NewConference