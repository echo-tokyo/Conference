import React from 'react'
import { createRoot } from 'react-dom/client'
import './assets/global.css'
import './assets/reset.css'
import Router from './Router'
import {Provider} from 'react-redux'
import { store } from './store/store'

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<Router />
		</Provider>
	</React.StrictMode>
)
