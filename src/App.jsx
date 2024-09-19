import './App.css'
import { Navigate } from 'react-router-dom'

const App = () => {
	return (
		<>
			{localStorage.getItem('token') ? <Navigate to='/conferences'/> : <Navigate to='/registration'/>}
		</>
	)
}

export default App