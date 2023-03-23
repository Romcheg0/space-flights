import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const SHeader = styled.header`
	width: 100%;
	z-index: 3;
	height: 80px;
	background: rgba(30, 30, 30, 0.48);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-left: 80px;
	padding-right: 80px;
	box-sizing: border-box;
	position: absolute;
	top: 0;
`
const SHeaderBadge = styled.img`
	width: 240px;
	height: 40px;
	border-radius: 10px;
	transition: 0.7s;
	&:hover {
		box-shadow: #fff 0px 0px 20px;
	}
`
const SLink = styled(Link)`
	position: relative;
	font-family: 'Lato';
	font-size: 16px;
	font-weight: 500;
	text-align: center;
	text-transform: uppercase;
	color: #fff;
	text-decoration: none;
	&::after {
		transition: 0.7s;
		content: '';
		position: absolute;
		background: #fff;
		width: 0%;
		height: 2px;
		left: 0;
		bottom: 0;
	}
	&:hover::after {
		width: 100%;
	}
`
const SLinkActive = styled(SLink)`
	&::after {
		transition: 0.7s;
		content: '';
		position: absolute;
		background: #fff;
		width: 100%;
		height: 2px;
		left: 0;
		bottom: 0;
	}
`
const SNav = styled.nav`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	gap: 32px;
	width: auto;
	text-decoration: none;
`
const SLinkContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 12px;
`
const SLinkFav = styled(Link)`
	width: 48px;
	height: 48px;
	margin-right: 12px;
	transition: 0.7s;
	background: #ececec;
	&:hover {
		transform: scale(1.2);
	}
	& img {
		width: 24px;
		height: 24px;
		margin: 12px 12px;
	}
`
const SLinkFavActive = styled(SLinkFav)`
	background: #dd377d;
`
const SLinkSign = styled(Link)`
	font-family: 'Syne';
	color: black;
	font-size: 24px;
	font-weight: 600;
	text-transform: uppercase;
	text-align: center;
	text-decoration: none;
	vertical-align: middle;
	padding: 12px 32px;
	background: #d3eaff;
	transition: 0.7s;
	box-sizing: border-box;
	border-radius: 0;
	&:hover {
		transform: scale(1.1);
	}
	&:active {
		transform: none;
		border-radius: 100%;
	}
`

export default function Header() {
	const location = useLocation()
	return (
		<SHeader>
			<Link to={'/'}>
				<SHeaderBadge src="assets/space-x-badge.png" alt="Space X" />
			</Link>
			<SNav>
				{location.pathname === '/' ? (
					<SLinkActive to={'/'}>HOME</SLinkActive>
				) : (
					<SLink to={'/'}>Home</SLink>
				)}
				<SLink to={'#'}>TOURS</SLink>
				<SLink to={'#'}>ABOUT</SLink>
				<SLink to={'#'}>HELP</SLink>
			</SNav>
			<SLinkContainer>
				{location.pathname === '/favorites' ? (
					<SLinkFavActive to={'/favorites'}>
						<img src="assets/heart.png" alt="Favorites" />
					</SLinkFavActive>
				) : (
					<SLinkFav to={'/favorites'}>
						<img src="assets/heart.png" alt="Favorites" />
					</SLinkFav>
				)}
				<SLinkSign to={'#'}>
					<div>SIGN IN</div>
				</SLinkSign>
			</SLinkContainer>
		</SHeader>
	)
}
