import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Favorites from './Components/Favorites/Favorites'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<HashRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
					<Route path="favorites" element={<Favorites />} />
				</Route>
			</Routes>
		</HashRouter>
	</React.StrictMode>
)
