import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ConferencePage from './components/conferencePage/conferencePage'
import Registration from './components/authorization/registration/Registration'
import Profile from './components/profile/Profile'
import Shorts from './components/shorts/Shorts'
import Article from './components/article/Article'
import Conferences from './components/conferences/Conferences'
import App from './App'
import Login from './components/authorization/login/Login'

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App/>}/>
				<Route path='/registration' element={<Registration/>}/>
				<Route path='/login' element={<Login/>}/>
				<Route path='/conferences' element={<Conferences/>}/>
				<Route path='/article' element={<Article/>}/>
				<Route path='/shorts' element={<Shorts/>}/>
				<Route path='/profile' element={<Profile/>}/>
				<Route path='/conference' element={<ConferencePage/>}/>
			</Routes>
		</BrowserRouter>
	)
}

export default Router