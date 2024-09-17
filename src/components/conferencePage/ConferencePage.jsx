import { Link } from 'react-router-dom'
import './conferencePage.css'
import { useEffect, useRef, useState } from 'react'

const ConferencePage = () => {
	const [msgs, setMsgs] = useState([])
	const msgListRef = useRef(null)

	useEffect(() => {
		if (msgListRef.current) {
      msgListRef.current.scrollTop = msgListRef.current.scrollHeight;
    }
	}, [msgs])

	const newMessage = e => {
		e.preventDefault()
		setMsgs([...msgs, e.target.message.value])
	}
	return (
		<div className="wrapper">
			<div className="wrapper__header">
				<h1>Конференция</h1>
			</div>
			<div className="conferencePage__main">
				<Link to='/'>Назад</Link>
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