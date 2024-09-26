import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import Nav from '../../nav/Nav'
import './userShorts.css'
import '../shorts.css'
import Comments from '../comments/Comments'

const UserShorts = () => {
	const {id} = useParams()
	const [pause, setPause] = useState(true)
	const [comments, setComments] = useState(false)
	const userShorts = useSelector(state => state.user.userData.shorts)

	const currentShorts = userShorts.filter(el => id === el.id)

	useEffect(() => {
		if(pause === false && document.querySelector('.bg-video') !== null) {
			document.querySelector('.bg-video').play()
		} else if(document.querySelector('.bg-video') !== null){
			document.querySelector('.bg-video').pause()
		}
	}, [pause])

	return (
		<>
		{pause && (
			<img className='pause' src='../../../public/pause-circle-svgrepo-com.svg'></img>
		)}
		{comments && (
			<Comments comments={comments} setComments={setComments}/>
		)}
		<div className="wrapper shorts-wrapper">
			<header className="shorts__header">
				<h1>UserShorts</h1>
			</header>
			<div className="swiper">
				<video className='bg-video' autoPlay loop onClick={() => setPause(!pause)}><source src={currentShorts[0].video} 	type='video/mp4'/></video>
			</div>
			<div className="shorts__main">
				<Link to='/profile' className='shorts__main-back'><p>Назад</p></Link>
				<div className="shorts__items">
					<div className="shorts__item">
						<img src="../../../public/image 1.svg" alt="" />
						<p>{currentShorts[0].likes}</p>
					</div>
					<div className="shorts__item">
						<img src="../../../public/image 2.svg" alt="" />
						<p>{currentShorts[0].dislikes}</p>
					</div>
					<div className="shorts__item" onClick={()=>setComments(true)}>
						<img src="../../../public/image.svg" alt="" />
						<p>{currentShorts[0].comments}</p>
					</div>
				</div>
			</div>
			<Nav />
		</div>
		</>
	)
}

export default UserShorts