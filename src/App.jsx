import { useSelector } from 'react-redux'
import './App.css'
import { Navigate } from 'react-router-dom'

const App = () => {
	console.log(useSelector(state => state.rooms.roomList))

	return (
		<>
			{localStorage.getItem('token') ? <Navigate to='/conferences'/> : <Navigate to='/registration'/>}
		</>
	)
}

export default App