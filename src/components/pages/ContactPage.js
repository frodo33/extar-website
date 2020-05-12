import React from 'react';
import styled from 'styled-components/macro';
import { Contact } from 'components/sections/Contact';
import { ContactDescription } from 'components/sections/ContactDescription';

const SectionTitle = styled.h1`
	font-size: 2.4rem;
	margin: 30px 0;
	@media screen and (min-width: 768px) {
		font-size: 3.2rem;
		margin: 50px 0;
	}
`;

export const ContactPage = () => {
	return (
		<div>
			<ContactDescription />
			<Contact />
		</div>
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