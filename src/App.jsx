import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Conferences from './components/conferences/Conferences'
import Article from './components/article/Article'
import Shorts from './components/shorts/Shorts'
import Profile from './components/profile/Profile'
import ConferencePage from './components/conferencePage/conferencePage'
import './App.css'

const App = () => {
	return (
		<div className="wrapper">
			<BrowserRouter>
				<Routes>
						<Route path='/' element={<Conferences/>}/>
						<Route path='/article' element={<Article/>}/>
						<Route path='/shorts' element={<Shorts/>}/>
						<Route path='/profile' element={<Profile/>}/>
						<Route path='/conference' element={<ConferencePage/>}/>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App