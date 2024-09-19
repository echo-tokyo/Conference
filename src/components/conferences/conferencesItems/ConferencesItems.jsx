import { useNavigate } from 'react-router-dom'

/* eslint-disable react/prop-types */
const ConferencesItems = ({el}) => {
	const nav = useNavigate()
	return (
		<>
		<div className="conferences__item">
			<div className="conferences__info">
				<img src="../../../public/person 26.png" alt="" />
				<div className="conferences__desc">
					<h2>{el.name}</h2>
					<p>Описание: {el.desc}</p>
					<p>Категория: отношения</p>
				</div>
			</div>
			<div className="conferences__stats">
				<h3>Сейчас смотрят: 999к</h3>
				<button onClick={() => (
					nav(`/conference/${el.id}`)
				)}>Войти</button>
			</div>
		</div>
		</>
	)
}

export default ConferencesItems