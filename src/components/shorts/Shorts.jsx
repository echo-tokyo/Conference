import Nav from '../nav/Nav'
import './shorts.css'
import { Link } from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { useEffect, useState } from 'react'

const Shorts = () => {
	const [pause, setPause] = useState(true)

	useEffect(() => {
		if(pause === false) {
			document.querySelector('.swiper-slide-active').children[0].play()
		} else{
			document.querySelector('.swiper-slide-active').children[0].pause()
		}
	}, [pause])
	
	return (
		<>
		{pause && (
			<img className='pause' src='../../../public/pause-circle-svgrepo-com.svg'></img>
		)}
		<div className="wrapper shorts-wrapper">
			<header className="shorts__header">
				<h1>Shorts</h1>
			</header>
			<Swiper className='mySwiper' direction='vertical' onSlidePrevTransitionEnd={() => {
				document.querySelector('.swiper-slide-active').children[0].play()
				document.querySelector('.swiper-slide-next').children[0].load()
				
				document.querySelectorAll('.swiper-slide').forEach((el) => {
					if(el.classList.length == 1){
						el.children[0].load()
					}
				})
			}} onSlideNextTransitionEnd={() => {
				document.querySelector('.swiper-slide-active').children[0].play()
				document.querySelector('.swiper-slide-prev').children[0].load()
				
				document.querySelectorAll('.swiper-slide').forEach((el) => {
					if(el.classList.length == 1){
						el.children[0].load()
					}
				})
			}} onClick={() => setPause(!pause)} onSlideChange={() => setPause(false)}>
				<SwiperSlide><video className='bg-video' loop><source src='../../../public/Download (14).mp4' type='video/mp4'/></video></SwiperSlide>
				<SwiperSlide><video className='bg-video' loop><source src='../../../public/Like_7330266907663915152.mp4' type='video/mp4'/></video></SwiperSlide>
				<SwiperSlide><video className='bg-video' loop><source src='../../../public/Like_7393666118245324689.mp4' type='video/mp4'/></video></SwiperSlide>
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
		</>
	)
}

export default Shorts