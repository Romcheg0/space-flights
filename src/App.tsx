import { Outlet } from 'react-router'
import Header from './Components/Header/Header'

function App() {
	return (
		<div className="App">
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	)
}

export default App
