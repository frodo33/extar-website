import React from 'react';
import styled from 'styled-components/macro';

import { Offer } from 'components/Offer';
import banner from 'assets/header.jpg';

export const OfferSection = ({ data }) => {
	const {offers, text} = data;
	const options = offers.map( (el, i) => <Offer data={el} key={i} />)
	return (
		<OfferSectionWrapper>
			<Banner></Banner>
			<div className="container">
				<OfferOptions>
					{options}
				</OfferOptions>
				<OfferDescription>{text}</OfferDescription>
			</div>
		</OfferSectionWrapper>
	)
}

const OfferSectionWrapper = styled.section`
	width: 100%;
	margin-top: 70px;
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const Banner = styled.div`
	height: 400px;
	background: url('${banner}') no-repeat center center;
	background-size: cover;
	transition: .4s linear;
	@media screen and (min-width: 768px) {
		height: 500px;
		background-attachment: fixed;
		background-size: unset;
		background-position: center 0;
		margin-bottom: -100px;
	}
	@media screen and (min-width: 1024px) {
		margin-bottom: -150px;
	}
`;

const OfferOptions = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: space-around;
`;

const OfferDescription = styled.p`
	width: 90%;
	margin: 30px 0 0 0;
	line-height: 2.4rem;
	font-size: 1.2rem;
	@media screen and (min-width: 1024px) {
		font-size: 1.6rem;
		margin: 70px 0 0 0;
	}
`;