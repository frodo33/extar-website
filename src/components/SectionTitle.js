import React from 'react';
import styled from 'styled-components/macro';

export const SectionTitle = ({ title, withTip }) => {
	return (
		<SectionTitleWrapper withTip={withTip} >{title}</SectionTitleWrapper>
	)
}
const SectionTitleWrapper = styled.h1`
	font-size: 2.4rem;
	margin: 30px 0;
	${ ({ withTip }) => withTip && 'margin: 50px 0 0 0' };
	@media screen and (min-width: 768px) {
		font-size: 3.2rem;
		margin: 50px 0;
		${ ({ withTip }) => withTip && 'margin: 50px 0 15px 0' };
	}
`;