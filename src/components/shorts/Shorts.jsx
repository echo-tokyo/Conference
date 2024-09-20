import { useEffect } from 'react'
import Nav from '../nav/Nav'
import './shorts.css'
import { Link } from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

const Shorts = () => {
	useEffect(() => {
		window.addEventListener('click', function() {
			document.querySelector('.swiper-slide-active').children[0].play()
			console.log('first')
		});
	}, [])
	return (
		<div className="wrapper">
			<header className="shorts__header">
				<h1>Shorts</h1>
			</header>
			<Swiper className='mySwiper' direction='vertical'>
				<SwiperSlide><video className='bg-video' autoPlay loop><source src='../../../public/Download (14).mp4' type='video/mp4'/></video></SwiperSlide>
				<SwiperSlide><video className='bg-video' autoPlay loop><source src='../../../public/Like_7330266907663915152.mp4' type='video/mp4'/></video></SwiperSlide>
			</Swiper>
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
		</div>
	)
}

export default Shorts