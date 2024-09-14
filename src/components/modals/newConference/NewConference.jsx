import '../modals.css'
import './newConference.css'

const NewConference = () => {
	return (
		<div className="modal">
			<div className="modal__wrapper">
				<h1 className="modal__title">Новая конференция</h1>
				<form action="" className="modal__items">
					<input type="text" placeholder='Название'/>
					<textarea name="" id="" placeholder='Описание'></textarea>
					<input type="submit" value='Запуск'/>
				</form>
			</div>
		</div>
	)
}

export default NewConference