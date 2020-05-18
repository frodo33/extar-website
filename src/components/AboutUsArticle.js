import React from 'react';
import styled from 'styled-components/macro';

export const AboutUsArticle = ({ data }) => {
	const { title, text, image, reverse } = data;
	return (
		<ArticleWrapper>
			<figure>
				<ArticlePicture reverse={reverse}>
					<img src={image} alt='' />
				</ArticlePicture>
				<ArticleText reverse={reverse}>
					<h2 className='title'>{title}</h2>
					<p className='txt'>{text}</p>
				</ArticleText>
			</figure>
		</ArticleWrapper>
	)
}

const ArticleWrapper = styled.article`
	width: 100%;
	margin: 30px 0;
	& figure {
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;
	}
`;


const reversePic = `
	order: 1;
`;
const ArticlePicture = styled.div`
	width: 100%;
	@media screen and (min-width: 768px) {
		width: 45%;
		${ ({ reverse }) => reverse && reversePic }
	}
	& img {
		width: 100%;
	}
`;


const reverseText = `
	text-align: right;
	align-items: flex-end;
	order: 0;
`;
const ArticleText = styled.figcaption`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin: 0 15px;
	@media screen and (min-width: 768px) {
		width: 50%;
		margin: 0;
		${ ({ reverse }) => reverse && reverseText }
	}
	.title {
		font-size: 2rem;
		margin: 15px 0;
		max-width: 500px;
		@media screen and (min-width: 768px) {
			font-size: 2.4rem;
		}
		@media screen and (min-width: 1024px) {
			font-size: 2.8rem;
		}
	}
	.txt {
		font-size: 1.6rem;
		line-height: 2rem;
		@media screen and (min-width: 768px) {
			font-size: 1.6rem;
			line-height: 2.4rem;
		}
		@media screen and (min-width: 1024px) {
			font-size: 2rem;
		}
	}
`;