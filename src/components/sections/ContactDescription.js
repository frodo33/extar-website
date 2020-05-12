import React from 'react';
import styled from 'styled-components/macro';

const SectionTitle = styled.h1`
	font-size: 2.4rem;
	margin: 30px 0;
	@media screen and (min-width: 768px) {
		font-size: 3.2rem;
		margin: 50px 0;
	}
`;

export const ContactDescription = () => {
	return (
		<ContactDescriptionWrapper>
			<div className="container">
				<SectionTitle>Kontakt</SectionTitle>
				<SectionContent>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae minima vero, earum, deserunt quod perspiciatis tempora! Ullam dolorum facere suscipit esse temporibus iure, illo beatae qui? Nisi, officia? Ducimus ex iusto, veniam, accusamus error quos adipisci eum aperiam sapiente voluptatibus totam nostrum facere suscipit minima rerum laudantium tempore? Veritatis nesciunt perspiciatis quasi, porro! Voluptas officia corrupti illo accusantium quo libero, quae cum quibusdam neque fugit, ducimus incidunt ullam perspiciatis a beatae? Soluta quasi, cupiditate! Quae suscipit nobis totam voluptate esse, enim et amet excepturi, ratione optio vero aliquam dolor debitis! Officiis illum mollitia perspiciatis necessitatibus ut laboriosam suscipit cumque quo.</SectionContent>
			</div>
		</ContactDescriptionWrapper>
	)
}

const ContactDescriptionWrapper = styled.div`
	width: 100%;
	margin-top: 70px;
	@media screen and (min-width: 768px) {
		margin: 50px 0;
	}
	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;
const SectionContent = styled.p`
	text-align: left;
	line-height: 2rem;
	font-size; 1.6rem;
	width: 90%;

	@media screen and (min-width: 768px) {
		font-size: 1.8rem;
    	line-height: 3.4rem;
	}
`;