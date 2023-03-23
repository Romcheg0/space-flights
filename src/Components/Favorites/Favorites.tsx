import styled from 'styled-components'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { favoritesState } from '../../recoilstate'
import TourCard from '../TourCard/TourCard'

const FavBanner = styled.div`
	width: 100%;
	height: 60vh;
	background-image: url('/assets/banner-fav.png');
	margin: 0;
	background-repeat: no-repeat;
	background-position: 0% 100%;
	background-size: cover;
`
const SHeader = styled.h1`
	font-family: 'Syne';
	font-weight: 800;
	font-size: 48px;
	text-align: center;
	color: #fff;
	margin: 0;
	padding-top: 220px;
	text-transform: uppercase;
	line-height: 58px;
`
const SSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-end;
	padding: 64px 64px;
`
const SClear = styled.span`
	font-size: 24px;
	font-weight: 300;
	text-align: center;
	color: #556b84;
	font-family: 'Lato';
	cursor: pointer;
`
const SCardContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 8px;
	margin-top: 40px;
	width: 100%;
	flex-wrap: wrap;
`

export default function Favorites() {
	const favorites = useRecoilState(favoritesState)
	const setFavorites = useSetRecoilState(favoritesState)

	return (
		<section>
			<FavBanner>
				<SHeader>Favorites</SHeader>
			</FavBanner>
			{favorites[0].length ? (
				<SSection>
					<SClear
						onClick={() => {
							setFavorites(() => [])
						}}
					>
						Clear all
					</SClear>
					<SCardContainer>
						{favorites[0].map((item, index) => {
							return <TourCard key={item['id']} rocket={item} index={index} />
						})}
					</SCardContainer>
				</SSection>
			) : (
				<h2 style={{ textAlign: 'center' }}>No favorites chosen yet</h2>
			)}
		</section>
	)
}
