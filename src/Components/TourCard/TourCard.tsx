import { useRecoilState, useSetRecoilState } from 'recoil'
import styled from 'styled-components'
import { favoritesState } from '../../recoilstate'
import IRocket from '../../utils/IRocket'

const SCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 450px;
	height: 700px;
	margin: 0;
	padding: 0;
`
const SCardImg = styled.img`
	width: 450px;
	height: 300px;
`
const SCardHeader = styled.h3`
	font-family: 'Syne';
	font-weight: 600;
	font-size: 24px;
	text-align: center;
	margin: 0;
`
const SCardPara = styled.p`
	font-family: 'Lato';
	width: 90%;
	font-weight: 300;
	font-size: 24px;
	text-align: center;
	color: #556b84;
	margin: 0;
`
const ButtonsContainer = styled.div`
	margin: auto auto 36px auto;
	height: 40px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 16px;
`
const BuyButton = styled.button`
	border: none;
	width: 280px;
	height: 40px;
	background: #d3eaff;
	text-transform: uppercase;
	font-family: 'Syne';
	font-weight: 600;
	font-size: 24px;
	cursor: pointer;
`
const FavButton = styled.button`
	border: none;
	width: 40px;
	height: 40px;
	background: transparent;
	padding: 0;
	cursor: pointer;
	& img {
		width: 40px;
		height: 40px;
	}
`
export default function TourCard({
	rocket,
	index,
}: {
	rocket: IRocket
	index: number
}) {
	const favorites = useRecoilState(favoritesState)
	const setFavorites = useSetRecoilState(favoritesState)

	return (
		<SCard>
			<SCardImg
				src={`assets/banner-${(index % 3) + 1}.png`}
				alt={rocket.name}
			/>
			<SCardHeader>{rocket.name}</SCardHeader>
			<SCardPara>{rocket.description}</SCardPara>
			<ButtonsContainer>
				<BuyButton>BUY</BuyButton>
				<FavButton
					onClick={() => {
						setFavorites((old) =>
							favorites[0].find((item) => item['id'] === rocket.id)
								? [...old.filter((item) => item['id'] !== rocket.id)]
								: [
										...old.filter((item) => item['id'] !== rocket.id),
										{
											id: rocket.id,
											name: rocket.name,
											description: rocket.description,
										} as never,
								  ]
						)
					}}
				>
					<img
						src={
							favorites[0].find((item) => item['id'] === rocket.id)
								? 'assets/bin.png'
								: 'assets/heart.png'
						}
						alt="add to favorites"
					/>
				</FavButton>
			</ButtonsContainer>
		</SCard>
	)
}
