import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Conferences from './components/conference/Conferences'
import Article from './components/article/Article'
import Shorts from './components/shorts/Shorts'
import Profile from './components/profile/Profile'
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
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default App