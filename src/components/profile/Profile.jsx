import { Link } from 'react-router-dom'
import Nav from '../nav/Nav'
import './profile.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setShortsData } from '../../store/slide/slide.slice'

const Profile = () => {
	const userData = useSelector(state => state.user.userData)
	const shorts = useSelector(state => state.slide.shortsData)
	const dispatch = useDispatch()

	useEffect(() => {
		if(shorts.length > 0){dispatch(setShortsData([]))}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
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
			<Nav />
		</div>
	)
}

export default Profile