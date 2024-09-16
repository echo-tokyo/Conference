import { useNavigate } from 'react-router-dom'
import '../modals.css'
import './newConference.css'

const NewConference = () => {
	const nav = useNavigate()
	const startConf = (e) => {
		e.preventDefault()
		nav('/conference')
	}
	return (
		<div className="modal">
			<div className="modal__wrapper">
				<h1 className="modal__title">Новая конференция</h1>
				<form action="" className="modal__items" onSubmit={(e) => startConf(e)}>
					<input type="text" placeholder='Название'/>
					<textarea name="" id="" placeholder='Описание'></textarea>
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