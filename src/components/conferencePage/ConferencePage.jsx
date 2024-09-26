import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import './conferencePage.css'
import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delRoom } from '../../store/rooms/rooms.slice'

const ConferencePage = () => {
	const nav = useNavigate()
	const {id} = useParams()
	const [msgs, setMsgs] = useState([{msg: 'Сообщение', user: 'Кто-то'}])
	const msgListRef = useRef(null)
	const dispatch = useDispatch()
	const rooms = useSelector(state => state.rooms.roomList)
	const userData = useSelector(state => state.user.userData)
	
	// FIXME: такой же useEffect в comments.jsx
	useEffect(() => {
		if (msgListRef.current) {
			msgListRef.current.scrollTop = msgListRef.current.scrollHeight;
    }
	}, [msgs])
	
	const conference = rooms.find(conf => conf.id === id)
	if (!conference) {
			return <Navigate to="/not-found" />
	}

	// FIXME: такая же функция в comments.jsx
	const newMessage = e => {
		e.preventDefault()
		setMsgs([...msgs, {msg: e.target.message.value, user: userData.name}])
		e.target.querySelector('textarea').value = ''
	}

	const closeConference = () => {
		localStorage.removeItem('ConfAdmin')
		dispatch(delRoom(id))
		nav('/conferences')
	}

	return (
		<div className="wrapper">
			<div className="wrapper__header">
				<h1>Конференция</h1>
			</div>
			<div className="conferencePage__main">

				{/* Оставил этот лайн временно, для удобства разработки и проверок */}
				<Link to='/'>Назад</Link>

				{/* Проверка на админа. Если админ, то показывать кнопку завершения конфы, иначе кнопку выхода из конфы */}
				{localStorage.getItem('ConfAdmin') === id ? <button onClick={() => closeConference()}>Завершить</button> : <Link to='/'>Назад</Link>}

				<div className="conferencePage__video"></div>
				<div className="conferencePage__desc">
					<div className="conferencePage__desc-item">
						<h2>{conference.organizer}</h2>
						<p>{conference.desc}</p>
					</div>
					<div className="ava"></div>
				</div>
			</div>
			<div className="msgList" ref={msgListRef}>
				{msgs.length > 0 ? (
					msgs.map((el, index) => (
						<div className={`msgList__msg ${el.user === userData.name ? 'selfMsg' : ''}`} key={index}>
							<p>{el.user}</p>
							<div className="msgList__msg-item">{el.msg}</div>
						</div>
					))
				) : (
					<p>Сообщений нет</p>
				)}
			</div>
			<form className="msgSend" onSubmit={(e) => {newMessage(e)}}>
				<textarea name='message' type="text" />
				<input type="submit" />
			</form>
		</div>
	)
}

export default ConferencePage