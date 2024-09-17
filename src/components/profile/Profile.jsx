import { Link } from 'react-router-dom'
import Nav from '../nav/Nav'
import './profile.css'

const Profile = () => {
	return (
		<div className="wrapper">
			<header className="wrapper__header">
				<h1>Профиль</h1>
			</header>
			<div className="profile">
				<div className="profile__search">
					<div className="profile__search-item">Тема: светлая/темная</div>
					<Link to='/'><div className="profile__search-item">Вперед</div></Link>
				</div>
				<div className="profile__items">
					<div className="profile__item">
						<img src="../../../public/person 26.png" alt="" />
						<div className="profile__desc">
							<h1>Иванов Максим</h1>
							<p>11 лет</p>
							<p>example@mail.ru</p>
						</div>
					</div>
				</div>
			</div>
			<Nav />
		</div>
	)
}

export default Profile