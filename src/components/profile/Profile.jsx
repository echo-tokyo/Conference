import { Link, useNavigate } from 'react-router-dom'
import Nav from '../nav/Nav'
import './profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { setShortsData } from '../../store/slide/slide.slice'
import NewShorts from '../modals/newShorts/NewShorts'
import BgStyles from '../../GlobalStyles'

const Profile = () => {
	const nav = useNavigate()
	const userData = useSelector(state => state.user.userData)
	const shorts = useSelector(state => state.slide.shortsData)
	const [isModalOpen, setModalOpen] = useState(false)
	const dispatch = useDispatch()

	document.addEventListener('click', e => {
		if (e.target && !e.target.closest('.modal, .modalOpener')) {
			setModalOpen(false)
		}
	})

	useEffect(() => {
		if(shorts.length > 0){dispatch(setShortsData([]))}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
		{isModalOpen && (
			<>
			<NewShorts />
			<BgStyles />
			</>
		)}
		<div className="wrapper">
			<header className="wrapper__header">
				<h1>Профиль</h1>
			</header>
			<div className="profile">
				<div className="profile__search">
					<div className="profile__search-item">Тема: светлая/темная</div>
					<Link to='/' onClick={() => {localStorage.removeItem('token')
					}}><div className="profile__search-item">Выйти</div></Link>
				</div>
				<div className="profile__items">
					<div className="profile__item">
						<img src="../../../public/person 26.png" alt="" />
						<div className="profile__desc">
							<h1>{userData.name}</h1>
							<p>{userData.email}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="profile__shorts">
				{userData.shorts.map(el =><video className='profile__shorts-item' autoPlay muted loop key={el.id} onClick={() => nav(`/user-shorts/${el.id}`)}><source src={el.video} type='video/mp4'/></video>)}
			</div>
			<div className="profile__btn">
				<button className='modalOpener profile__btn-item' onClick={() => setModalOpen(true)}>Добавить шортс</button>
			</div>
			<Nav />
		</div>
		</>
	)
}

export default Profile