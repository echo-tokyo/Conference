import Nav from '../nav/Nav'
import './article.css'
import ArticleItems from './articleItems/ArticleItems'

const Article = () => {
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