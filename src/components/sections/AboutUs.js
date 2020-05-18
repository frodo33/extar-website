import React from 'react';
import styled from 'styled-components/macro';

import { SectionTitle } from 'components/SectionTitle';
import { AboutUsArticle } from 'components/AboutUsArticle';

export const AboutUs = ({ data }) => {
	const { title, articles } = data;
	const articlesList = articles.map( (el, i) => <AboutUsArticle data={articles[i]} key={i} /> )
	return (
		<AboutUsSection>
			<div className="container">
				<SectionTitle title={title} />
				{articlesList}
			</div>
		</AboutUsSection>
	)
}
const AboutUsSection = styled.section`
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