import { useCallback, useEffect, useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setShortsData } from '../../store/slide/slide.slice';
import './nav.css';

const Nav = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const shorts = useSelector(state => state.slide.shortsData)
  const [shouldNavigate, setShouldNavigate] = useState(false)

  const handleShortsUpdate = useCallback(() => {
    dispatch(setShortsData([{ id: '3', desc: 'мой новый видос пиздец крутой', author: 'Автор', video: '../../../public/Like_7393666118245324689.mp4', likes: '214', dislikes: '192', comments: '23' },{ id: '2', desc: 'Залетайте на мои уроки', author: 'Автор23', video: '../../../public/Download (14).mp4', likes: '24', dislikes: '52', comments: '3' }]))
    setShouldNavigate(true)
  }, [dispatch])

  useEffect(() => {
    if (shouldNavigate && shorts[0]) {
      nav(`/shorts/${shorts[0].id}`)
      setShouldNavigate(false)
    }
  }, [shorts, nav, shouldNavigate])

  return (
    <nav className='nav'>
      <div className="nav__items">
        <div className="nav__item">
          <Link to='/conferences'><img src="../../../public/free-icon-font-users-alt-5529124 1.png" alt="" /></Link>
        </div>
        <div className="nav__item">
          <Link to='/article'><img src="../../../public/free-icon-font-graduation-cap-3914115 1.png" alt="" /></Link>
        </div>
        <div className="nav__item">
          <div onClick={handleShortsUpdate}><img src="../../../public/free-icon-font-pencil-3917457 1.png" alt="" /></div>
        </div>
        <div className="nav__item">
          <Link to='/profile'><img src="../../../public/free-icon-font-user-3917711 1.png" alt="" /></Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;