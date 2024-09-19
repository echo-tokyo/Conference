import { Link } from 'react-router-dom'
import Nav from '../nav/Nav'
import './profile.css'
import { useSelector } from 'react-redux'

const Profile = () => {
	const userData = useSelector(state => state.user.userData)

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
							<p>11 лет</p>
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