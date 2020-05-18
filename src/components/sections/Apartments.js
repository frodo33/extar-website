import React from 'react';
import styled from 'styled-components/macro';

import { SectionTitle } from 'components/SectionTitle';

import banner from 'assets/header.jpg';

export const Apartments = ({ data }) => {
	const { title } = data;
	return (
		<ApartmentsSection>
			<div className="container">
				<SectionTitle title={title} />
				<Gallery>
					<div className="pic pic1"><div className="bg"></div></div>
					<div className="pic pic2"><div className="bg"></div></div>
					<div className="pic pic3"><div className="bg"></div></div>
					<div className="pic pic4"><div className="bg"></div></div>
					<div className="pic pic5"><div className="bg"></div></div>
					<div className="pic pic6"><div className="bg"></div></div>
					<div className="pic pic7"><div className="bg"></div></div>
					<div className="pic pic8"><div className="bg"></div></div>
				</Gallery>
			</div>
		</ApartmentsSection>
	)
}

const ApartmentsSection = styled.section`
	width: 100%;
	@media screen and (min-width: 768px) {
		margin: 50px 0;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const Gallery = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(5, 1fr);
	grid-column-gap: 0px;
	grid-row-gap: 0px;
	width: 90%;
	min-height: 400px;
	margin: 20px 0 0 0;
	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(5, 1fr);
		grid-template-rows: repeat(3, 1fr);
	}
	.pic1 {
		grid-area: 1 / 1 / 2 / 3;
		@media screen and (min-width: 768px) {
			grid-area: 1 / 1 / 2 / 2;
		}
		.bg {
			background: url('${banner}');
		}
	}
	.pic2 {
		grid-area: 1 / 3 / 2 / 4;
		@media screen and (min-width: 768px) {
			grid-area: 1 / 2 / 2 / 4;
		}
		.bg {
			background: url('${banner}');
		}
	}
	.pic3 {
		grid-area: 2 / 1 / 3 / 2;
		@media screen and (min-width: 768px) {
			grid-area: 1 / 4 / 2 / 5;
		}
		.bg {
			background: url('${banner}');
		}
	}
	.pic4 {
		grid-area: 2 / 2 / 3 / 4;
		@media screen and (min-width: 768px) {
			grid-area: 1 / 5 / 4 / 6;
		}
		.bg {
			background: url('${banner}');
		}
	}
	.pic5 {
		grid-area: 3 / 3 / 3 / 4;
		@media screen and (min-width: 768px) {
			grid-area: 2 / 1 / 3 / 2;
		}
		.bg {
			background: url('${banner}');
		}
	}
	.pic6 {
		grid-area: 3 / 1 / 5 / 3;
		@media screen and (min-width: 768px) {
			grid-area: 2 / 2 / 3 / 3;
		}
		.bg {
			background: url('${banner}');
		}
	}
	.pic7 {
		grid-area: 5 / 1 / 6 / 3;
		@media screen and (min-width: 768px) {
			grid-area: 3 / 1 / 4 / 3;
		}
		.bg {
			background: url('${banner}');
		}
	}
	.pic8 {
		grid-area: 4 / 3 / 6 / 4;
		@media screen and (min-width: 768px) {
			grid-area: 2 / 3 / 4 / 5
		}
		.bg {
			background: url('${banner}');
		}
	}
	.pic {
		border: 1px solid white;
		overflow: hidden;
		cursor: pointer;
		&:hover .bg {
			transform: scale(1.1);
		}
		.bg {
			width: 100%;
			height: 100%;
			background-repeat: no-repeat;
			background-position: center center;
			background-size: cover;
			transition: .2s ease-in-out;
		}
	}
`;