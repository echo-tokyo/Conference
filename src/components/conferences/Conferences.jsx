import Nav from '../nav/Nav'
import './conferences.css'
import ConferenceItems from './conferencesItems/ConferencesItems'
import { useEffect, useState } from 'react'
import NewConference from '../modals/newConference/NewConference'
import BgStyles from '../../GlobalStyles'
import { useDispatch, useSelector } from 'react-redux'
import { setShortsData } from '../../store/slide/slide.slice'

const Conferences = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const rooms = useSelector(state => state.rooms.roomList)
	const shorts = useSelector(state => state.slide.shortsData)
	const dispatch = useDispatch()

	useEffect(() => {
		if(shorts.length > 0){dispatch(setShortsData([]))}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

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
					{rooms.map(el => el.pubOrPriv === 'public' ? <ConferenceItems el={el} key={el.id}/> : null )}
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