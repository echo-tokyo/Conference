import { Link } from 'react-router-dom'
import './conferencePage.css'

const ConferencePage = () => {
	return (
		<>
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
		<div className="msgList">
			<div className="msgList__msg">
				<p>Имя</p>
				<div className="msgList__msg-item"><h2>Сообщение</h2></div>
			</div>
			<div className="msgList__msg">
				<p>Имя</p>
				<div className="msgList__msg-item"><h2>Сообщение</h2></div>
			</div>
			<div className="msgList__msg">
				<p>Имя</p>
				<div className="msgList__msg-item"><h2>Сообщение</h2></div>
			</div>
			<div className="msgList__msg selfMsg">
				<p>Имя</p>
				<div className="msgList__msg-item"><h2>Сообщение</h2></div>
			</div>
		</div>
		<form className="msgSend">
			<input type="text" />
			<input type="submit" />
		</form>
		</>
	)
}

export default ConferencePage