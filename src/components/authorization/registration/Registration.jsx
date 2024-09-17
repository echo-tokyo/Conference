import { Link, useNavigate } from 'react-router-dom'

const Registration = () => {
	const nav = useNavigate()

	const registration = e => {
		e.preventDefault()

		const formData = {
			name: e.target.name.value,
			email: e.target.email.value,
			password: e.target.password.value
		}

		console.log(formData)
		localStorage.setItem('token', 'token')
		nav('/conferences')
	}

	return (
		<>
		<h1>Регистрация</h1>
		<form action="" className="registration" onSubmit={(e) => registration(e)}>
			<div className="registration__item">
				<h2>Имя</h2>
				<input type="text" name='name'/>
			</div>
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
		<Link to='/login'><p>Уже зарегистрированы? Войдите в систему.</p></Link>
		<Link to='/conferences'><p>Войти как гость</p></Link>
		</>
	)
}

export default Registration