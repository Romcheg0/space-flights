import { useRef } from 'react'
import Banner from '../Banner/Banner'
import Tours from '../Tours/Tours'

export default function Home() {
	const toursRef = useRef<HTMLDivElement | null>(null)
	return (
		<section>
			<Banner toursRef={toursRef} />
			<Tours toursRef={toursRef} />
		</section>
	)
}
