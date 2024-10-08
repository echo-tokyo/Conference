import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setUser } from '../../../store/user/user.slice'

const Login = () => {
	const nav = useNavigate()
	const dispatch = useDispatch()

	const login = e => {
		const formData = {
			email: e.target.email.value,
			password: e.target.password.value
		}

		dispatch(setUser({name: formData.name, email: formData.email}))

		localStorage.setItem('token', 'token')
		nav('/conferences')
	}
	
	return (
		<>
		<h1>Логин</h1>
		<form action="" className="registration" onSubmit={(e) => login(e)}>
			<div className="registration__item">
				<h2>Почта</h2>
				<input type="email" name='email'/>
			</div>
			<div className="registration__item">
				<h2>Пароль</h2>
				<input type="password" name='password'/>
			</div>
			<input type="submit" />
		</form>
		<Link to='/registration'><p>Нет аккаунта? Зарегистрируйтесь.</p></Link>
		</>
	)
}

export default Login