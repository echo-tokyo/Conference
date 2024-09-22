import { useDispatch, useSelector } from 'react-redux'
import Nav from '../nav/Nav'
import './article.css'
import ArticleItems from './articleItems/ArticleItems'
import { useEffect } from 'react'
import { setShortsData } from '../../store/slide/slide.slice'

const Article = () => {
	// FIXME: в conferences и profile такие же куски кода, которые обновляют state (вынести в отдельный файл)
	const shorts = useSelector(state => state.slide.shortsData)
	const dispatch = useDispatch()

	useEffect(() => {
		if(shorts.length > 0){dispatch(setShortsData([]))}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<div className="wrapper">
			<header className="wrapper__header">
				<h1>Статьи</h1>
			</header>
			<div className="article">
				<form action="" className="article__search">
					<input type="text" placeholder='Поиск'/>
					<label className='search' htmlFor="search"><img src="../../../public/find 1.svg" alt="" /><input id='search' type="submit" className='search-inp'/></label>
				</form>
				<div className="article__items">
					<ArticleItems />
				</div>
			</div>
			<div className="article-btn">
				<button>Создать статью</button>
				<button>Мои статьи</button>
			</div>
			<Nav />
		</div>
	)
}

export default Article