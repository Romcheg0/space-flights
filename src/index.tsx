import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Favorites from './Components/Favorites/Favorites'
import {
	ApolloClient,
	ApolloProvider,
	gql,
	InMemoryCache,
} from '@apollo/client'
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const client = new ApolloClient({
	uri: 'https://spacex-production.up.railway.app/',
	cache: new InMemoryCache(),
})
root.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<HashRouter>
				<Routes>
					<Route path="/" element={<App />}>
						<Route index element={<Home />} />
						<Route path="favorites" element={<Favorites />} />
					</Route>
				</Routes>
			</HashRouter>
		</ApolloProvider>
	</React.StrictMode>
)
