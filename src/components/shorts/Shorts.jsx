import { useEffect } from 'react'
import Nav from '../nav/Nav'
import './shorts.css'
import { Link } from 'react-router-dom'

const Shorts = () => {
	// воспроизведение видео при клике .bg-video (у тэга </video> есть атрибут muted, который проигрывает видео без звука. но если его убрать, автопроигрывания после рендеринга страницы не будет, поэтому я временно написал этот код)
	useEffect(() => {
		const video = document.querySelector('.bg-video');
		document.querySelector('.shorts__main').addEventListener('click', function() {
			video.play();
		});
	}, [])

	return (
		<>
		<header className="shorts__header">
			<h1>Shorts</h1>
		</header>
		<div className="shorts__main">
			<Link to='/' className='shorts__main-back'><p>Назад</p></Link>
			<div className="shorts__items">
				<div className="shorts__item">
					<img src="../../../public/image 1.svg" alt="" />
					<p>228k</p>
				</div>
				<div className="shorts__item">
					<img src="../../../public/image 2.svg" alt="" />
					<p>10k</p>
				</div>
				<div className="shorts__item">
					<img src="../../../public/image.svg" alt="" />
					<p>1k</p>
				</div>
			</div>
		</div>
		<Nav/>
		<video className='bg-video' autoPlay loop><source src='../../../public/Download (14).mp4' type='video/mp4'/></video>
		</>
	)
}

export default Shorts