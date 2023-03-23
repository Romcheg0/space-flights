import { gql, useQuery } from '@apollo/client'
import styled from 'styled-components'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import IRocket from '../../utils/IRocket'
import TourCard from '../TourCard/TourCard'
import { RefObject } from 'react'

const SSection = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 96px 60px;
	overflow: hidden;
`
const SHeading = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`
const SSubHeader = styled.h2`
	font-family: 'Syne';
	font-weight: 800;
	font-size: 32px;
	text-transform: uppercase;
`
const SButtonsContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 16px;
`
const SButton = styled.button`
	width: 40px;
	height: 40px;
	background: #ececec;
	color: black;
	cursor: pointer;
	outline: none;
	border: none;
`
const SwiperContainer = styled.div`
	width: 100%;
	overflow: hidden;
`

const GET_ROCKETS = gql`
	query getRockets {
		rockets {
			id
			description
			name
		}
	}
`
export default function Tours({
	toursRef,
}: {
	toursRef: RefObject<HTMLDivElement> | null
}) {
	const { loading, error, data } = useQuery(GET_ROCKETS)
	if (loading) {
		return <h2>'Loading...'</h2>
	}
	if (error) {
		return <h2>`Error:, ${error.message}`</h2>
	}
	return (
		<SSection>
			<SHeading ref={toursRef}>
				<SSubHeader>popular tours</SSubHeader>
				<SButtonsContainer>
					<SButton className="swiperSlidePrev">
						<img
							src="assets/chevron-left.png"
							alt="Swipe left"
							onClick={() => {}}
						/>
					</SButton>
					<SButton className="swiperSlideNext">
						<img src="assets/chevron-right.png" alt="Swipe right" />
					</SButton>
				</SButtonsContainer>
			</SHeading>
			<SwiperContainer>
				{data && (
					<Swiper
						slidesPerView={3}
						direction="horizontal"
						spaceBetween={30}
						modules={[Navigation, Pagination]}
						navigation={{
							prevEl: '.swiperSlidePrev',
							nextEl: '.swiperSlideNext',
						}}
						pagination={{ clickable: true }}
					>
						{data.rockets.map((rocket: IRocket, index: number) => {
							return (
								<SwiperSlide key={rocket.id}>
									<TourCard rocket={rocket} index={index} />
								</SwiperSlide>
							)
						})}
					</Swiper>
				)}
			</SwiperContainer>
		</SSection>
	)
}
