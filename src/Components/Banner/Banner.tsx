import { RefObject, useState } from 'react'
import styled from 'styled-components'

const BannerDiv = styled.div`
	display: flex;
	position: relative;
	z-index: 2;
	flex-direction: column;
	width: 100%;
	height: 100vh;
	box-sizing: border-box;
	background-size: cover;
	background-repeat: no-repeat;
	background-position: 0 100%;
	transition: 0.7s;
`
const SHeading = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: fit-content;
	margin: 232px auto 0 auto;
`
const SSubHeader = styled.h2`
	font-family: 'Syne';
	font-weight: 800;
	font-size: 48px;
	text-align: center;
	color: #fff;
	margin: 0;
	text-transform: uppercase;
	line-height: 58px;
`
const SHeader = styled.h1`
	font-family: 'Syne', sans-serif;
	font-weight: 800;
	font-style: normal;
	font-size: 310px;
	text-align: center;
	text-transform: uppercase;
	color: #fff;
	margin: 0;
	padding: 0;
	line-height: 240px;
	height: 240px;
`
const SForm = styled.form`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	position: absolute;
	bottom: 120px;
	margin-right: 5%;
	width: fit-content;
	height: fit-content;
`
const SInputRadio = styled.input`
	outline: none;
	appearance: none;
	font: inherit;
	color: white;
	width: 1.2em;
	height: 1.2em;
	border: 0.1em solid currentColor;
	border-radius: 50%;
	background: transparent;
	display: grid;
	place-content: center;
	&::before {
		content: '';
		width: 0.5em;
		height: 0.5em;
		border-radius: 50%;
		transform: scale(0);
		transition: 0.3s;
		box-shadow: inset 0.9em 0.9em #fff;
	}
	&:checked::before {
		transform: scale(1);
	}
`
const SLinkTours = styled.span`
	position: absolute;
	text-decoration: none;
	font-family: 'Lato';
	font-weight: 300;
	font-size: 32px;
	color: #fff;
	text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
	padding-bottom: 12px;
	padding-top: 12px;
	bottom: 0;
	width: 100%;
	text-align: center;
	cursor: pointer;
`

export default function Banner({
	toursRef,
}: {
	toursRef: RefObject<HTMLDivElement> | null
}) {
	const [bannerImage, setBannerImage] = useState('/assets/banner-1.png')
	return (
		<BannerDiv
			style={{
				backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)), url(${bannerImage})`,
			}}
		>
			<SHeading>
				<SSubHeader>The space is waiting for</SSubHeader>
				<SHeader>YOU</SHeader>
				<SForm>
					<SInputRadio
						type="radio"
						name="banner-radio"
						defaultChecked
						onChange={() => {
							setBannerImage('/assets/banner-1.png')
						}}
					/>
					<SInputRadio
						type="radio"
						name="banner-radio"
						onChange={() => {
							setBannerImage('/assets/banner-2.png')
						}}
					/>
					<SInputRadio
						type="radio"
						name="banner-radio"
						onChange={() => {
							setBannerImage('/assets/banner-3.png')
						}}
					/>
				</SForm>
			</SHeading>
			<SLinkTours
				onClick={() => {
					toursRef?.current?.lastElementChild?.scrollIntoView({
						behavior: 'smooth',
					})
				}}
			>
				Explore Tours <img src="/assets/arrow-down.png" alt="explore tours" />
			</SLinkTours>
		</BannerDiv>
	)
}
