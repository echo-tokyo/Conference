import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
	return (
		<nav className='nav'>
			<div className="nav__items">
				<div className="nav__item">
					<Link to='/conferences'><img src="../../../public/free-icon-font-users-alt-5529124 1.png" alt="" /></Link>
				</div>
				<div className="nav__item">
					<Link to='/article'><img src="../../../public/free-icon-font-graduation-cap-3914115 1.png" alt="" /></Link>
				</div>
				<div className="nav__item">
					<Link to='/shorts'><img src="../../../public/free-icon-font-pencil-3917457 1.png" alt="" /></Link>
				</div>
				<div className="nav__item">
					<Link to='/profile'><img src="../../../public/free-icon-font-user-3917711 1.png" alt="" /></Link>
				</div>
			</div>
		</nav>
	)
}

export default Nav