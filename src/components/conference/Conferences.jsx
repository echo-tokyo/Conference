import Nav from '../nav/Nav'
import './conferences.css'
import ConferenceItems from './conferenceItems/ConferenceItems'

const Conferences = () => {
	return (
		<>
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
			<button>Создать звонок</button>
		</div>
		<Nav />
		</>
	)
}

export default Conferences