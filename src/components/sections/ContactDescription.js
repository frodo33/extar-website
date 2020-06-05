import React from 'react';
import styled from 'styled-components/macro';

import { SectionTitle } from 'components/SectionTitle';

export const ContactDescription = ({ data, title }) => {
	const { name, address, address2, number, fax, email } = data;
	return (
		<ContactDescriptionWrapper>
			<div className="container">
				<SectionTitle title={title} />
				<SectionContent>
					<span><strong>{name}</strong></span>
					<span>{address}</span>
					<span>{address2}</span>
					<span><a href={`tel:${number}`}>{number}</a></span>
					<span><a href={`fax:${fax}`}>{fax}</a></span>
					<span><a href={`mailto:${email}`}>{email}</a></span>
				</SectionContent>
			</div>
		</ContactDescriptionWrapper>
	)
}

const ContactDescriptionWrapper = styled.div`
	width: 100%;
	margin-top: 100px;
	@media screen and (min-width: 768px) {
		margin: 100px 0;
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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	& span a {
		text-decoration: none;
		color: #000;
		cursor: pointer;
	}

	@media screen and (min-width: 768px) {
		font-size: 1.8rem;
    	line-height: 3.4rem;
	}
`;