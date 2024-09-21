import Nav from '../nav/Nav'
import './shorts.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addShortsData, setShortsData } from '../../store/slide/slide.slice'
import { v4 as uuidv4 } from 'uuid';

// TODO: нужно сделать очищение store при выходе из шортсов
// TODO: при обновлении страницы диспатчить store двумя рандомными шортсами

const Shorts = () => {
	const {id} = useParams()
	const nav = useNavigate()
	const [pause, setPause] = useState(true)
	const shortsList = useSelector(state => state.slide.shortsData)
	const dispatch = useDispatch()

	// получение шортса по id из url + еще одного рандомного. проверка на переход по ссылке: если store пустой, значит переход был не по навбару, а по ссылке
	if(shortsList.length == 0){
		const shortsFromId = shortsList.filter(el => id === el.id)
		dispatch(setShortsData([shortsFromId[0], {id: uuidv4(), video: '../../../public/Like_7330266907663915152.mp4'}]))
	}

	window.addEventListener('unload', () => {
		console.log('first')
		dispatch(setShortsData([{id: '1', desc: 'мой новый видос пиздец крутой', author: 'Автор', video: '../../../public/Like_7393666118245324689.mp4'}, {id: '2', desc: 'Залетайте на мои уроки', author: 'Автор23', video: '../../../public/Download (14).mp4'}]))
	})

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
			}} onClick={() => setPause(!pause)} onSlideChange={() => setPause(false)} onSlideNextTransitionStart={() => {
				
				// добавление нового слайда после запроса
				dispatch(addShortsData({id: uuidv4(), video: '../../../public/Like_7330266907663915152.mp4'}))
				
			}} onSlideChangeTransitionStart={() => {
				nav(`/shorts/${document.querySelector('.swiper-slide-active').id}`)
				}}>
				{shortsList.map((el) => <SwiperSlide id={el.id} key={el.id}><video className='bg-video' loop><source  src={el.video} type='video/mp4'/></video></SwiperSlide>)}
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