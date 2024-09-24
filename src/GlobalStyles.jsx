import {createGlobalStyle} from 'styled-components'

// эти стили активируются при открытом модальном окне для затемнения фона
const BgStyles = createGlobalStyle`
	.wrapper{
		opacity: 0.2;
		transition: opacity 0.3s ease-out; 
		cursor: pointer;
	}	
`


export default BgStyles