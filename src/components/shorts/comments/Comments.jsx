/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react'
import './comments.css'
import { useSelector } from 'react-redux'

const Comments = ({ setComments }) => {
	// Должен быть запрос с параметром id из url шортса на получение комментариев
	const [msgs, setMsgs] = useState([{msg: 'Сообщение', user: 'Кто-то', ava: '../../../../public/person 26.png'}])
	const userData = useSelector(state => state.user.userData)
	const msgListRef = useRef(null)
	const commentsRef = useRef(null)

	useEffect(() => {
		if (msgListRef.current) {
			msgListRef.current.scrollTop = msgListRef.current.scrollHeight;
    }
	}, [msgs])

	const newMessage = e => {
		e.preventDefault()
		setMsgs([...msgs, {msg: e.target.message.value, user: userData.name, time: Date.now(), ava: userData.ava}])
		e.target.querySelector('textarea').value = ''
	}

	return (	
		<div className='comments' ref={commentsRef}>
			<div className='comments-btn'><button onClick={() => {commentsRef.current.classList.toggle('closed'); setTimeout(() => {
				setComments(false)
			}, 200); }}>X</button></div>
			<div className="comments__item" ref={msgListRef}>
				{msgs.length > 0 ? (
					msgs.map((el, index) => (
						<div className="comment" key={index}>
							<img src={el.ava} alt="" />
							<div className='comment__msg'>
								<div className="comment__msg-user">
									<p>{el.user}</p>
									<p>{new Date(el.time).toLocaleString()}</p>
								</div>
								<div className="comment__msg-item">{el.msg}</div>
							</div>
						</div>
					))
				) : (
					<p>Сообщений нет</p>
				)}
			</div>
			<form className="msgSend" onSubmit={(e) => newMessage(e)}>
				<textarea name='message' type="text" />
				<input type="submit" />
			</form>
		</div>
	)
}

export default Comments