import React from 'react';
import styled from 'styled-components/macro';

import { SectionTitle } from 'components/SectionTitle';

import pic1 from 'assets/about_us/pic_1.jpg';
import pic2 from 'assets/about_us/pic_2.jpg';

export const AboutUs = () => {
	return (
		<AboutUsSection>
			<div className="container">
				<SectionTitle title={'Dlaczego my?'} />
				<ArticleWrapper>
					<figure>
						<ArticlePicture>
							<img src={pic1} alt='' />
						</ArticlePicture>
						<ArticleText>
							<h2 className='title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
							<p className='txt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur minus impedit id ipsam quod magni blanditiis labore, maiores unde architecto accusamus, aut esse ex libero aliquam ullam ab nemo amet enim. Qui quasi, adipisci eligendi, fugit iusto tempora eius tenetur laudantium, modi, repudiandae officia eos iure sapiente consequuntur ea labore ullam quaerat autem repellendus voluptates delectus possimus beatae tempore amet? Perferendis deleniti hic error debitis beatae mollitia fuga quam quae!</p>
						</ArticleText>
					</figure>
				</ArticleWrapper>
				<ArticleWrapper>
					<figure>
						<ArticlePicture>
							<img src={pic2} alt='' />
						</ArticlePicture>
						<ArticleText>
							<h2 className='title'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
							<p className='txt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae necessitatibus officia veritatis nesciunt quasi nostrum quibusdam nisi suscipit nihil minima consequatur dolores et perspiciatis blanditiis voluptatum architecto, beatae obcaecati, itaque vitae quisquam porro! Placeat vitae ad at debitis quidem natus possimus facilis laborum iste id nemo expedita quis quasi fugiat laudantium voluptatibus voluptatem, nesciunt delectus tempora sed quae commodi animi nam, quam libero. Quia velit nihil eveniet, sit assumenda. Provident!</p>
						</ArticleText>
					</figure>
				</ArticleWrapper>
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
		// ${reversePic};
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
		// ${reverseText}
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