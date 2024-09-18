import { Link, useNavigate } from 'react-router-dom'
import './conferencePage.css'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { delRoom } from '../../store/rooms/rooms.slice'

const ConferencePage = () => {
	const nav = useNavigate()
	const [msgs, setMsgs] = useState([])
	const msgListRef = useRef(null)
	const dispatch = useDispatch()
	const currentId = window.location.href.substring(window.location.href.indexOf('conference/')+'conference/'.length)

	useEffect(() => {
		if (msgListRef.current) {
      msgListRef.current.scrollTop = msgListRef.current.scrollHeight;
    }
	}, [msgs])

	const newMessage = e => {
		e.preventDefault()
		setMsgs([...msgs, e.target.message.value])
	}

	const closeConference = () => {
		localStorage.removeItem('ConfAdmin')
		dispatch(delRoom(currentId))
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
				{localStorage.getItem('ConfAdmin') === currentId ? <button onClick={() => closeConference()}>Завершить</button> : <Link to='/'>Назад</Link>}

				<div className="conferencePage__video"></div>
				<div className="conferencePage__desc">
					<div className="conferencePage__desc-item">
						<h2>Имя</h2>
						<p>Описание</p>
					</div>
					<div className="ava"></div>
				</div>
			</div>
			<div className="msgList" ref={msgListRef}>
				{msgs.map((el, index) => (
					<div className="msgList__msg selfMsg" key={index}>
						<p>Имя</p>
						<div className="msgList__msg-item" key={index}>{el}</div>
					</div>
				))}
			</div>
			<form className="msgSend" onSubmit={(e) => {newMessage(e)}}>
				<textarea name='message' type="text" />
				<input type="submit" />
			</form>
		</div>
	)
}

export default ConferencePage