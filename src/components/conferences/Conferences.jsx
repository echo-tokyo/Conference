import Nav from '../nav/Nav'
import './conferences.css'
import ConferenceItems from './conferencesItems/ConferencesItems'
import { useState } from 'react'
import NewConference from '../modals/newConference/NewConference'
import BgStyles from '../../GlobalStyles'

const Conferences = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	// закрытие модалки кликом за ее пределами
	document.addEventListener('click', e => {
		if (e.target && !e.target.closest('.modal, .modalOpener')) {
			setIsModalOpen(false)
		}
	})

	return (
		<>
		{isModalOpen && (
			<>
			<NewConference />
			<BgStyles />
			</>
		)}
		<div className="wrapper">
			<header className="wrapper__header">
				<h1>Конференции</h1>
			</header>
			<div className="conferences">
				<form action="" className="conferences__search">
					<input type="text" placeholder='Поиск'/>
					<label className='search' htmlFor="search"><img src="../../../public/find 1.svg" alt="" /><input id='search' type="submit" className='search-inp'/></label>
				</form>
				<div className="conferences__items">
					<ConferenceItems />
				</div>
			</div>
			<div className="conferences-btn">
				<button onClick={() => setIsModalOpen(true)} className='modalOpener'>Создать конференцию</button>
			</div>
			<Nav />
		</div>
		</>
	)
}

export default Conferences