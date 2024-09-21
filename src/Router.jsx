import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Registration from './components/authorization/registration/Registration'
import Profile from './components/profile/Profile'
import Shorts from './components/shorts/Shorts'
import Article from './components/article/Article'
import Conferences from './components/conferences/Conferences'
import App from './App'
import Login from './components/authorization/login/Login'
import ConferencePage from './components/conferencePage/ConferencePage'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App/>}/>
				<Route path='/registration' element={<Registration/>}/>
				<Route path='/login' element={<Login/>}/>
				<Route path='/conferences' element={<Conferences/>}/>
				<Route path='/article' element={<Article/>}/>
				<Route path='/shorts/:id' element={<Shorts/>}/>
				<Route path='/profile' element={<Profile/>}/>
				<Route path='/conference/:id' element={<ConferencePage/>}/>
				<Route path='/not-found' element={
					<>
					<p>Конференция не найдена</p>
					<Link to='/conferences'>Назад</Link>
					</>
				}/>
				<Route  path='*' element={
					<>
					<p>Страница не найдена</p>
					<Link to='/conferences'>Назад</Link>
					</>
				}/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router