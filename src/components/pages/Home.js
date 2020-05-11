import React from 'react';
import styled from 'styled-components/macro';

import banner from 'assets/header.jpg';

// import Article from './Article/Article.js';

import pic1 from 'assets/about_us/pic_1.jpg';
import pic2 from 'assets/about_us/pic_2.jpg';

import Icon from 'components/Icon';

export const Home = () => {
	return (
		<div>
			<HomeHeader>
				<div className="container">
					<HeaderTitle>Lorem ipsum dolor sit amet.</HeaderTitle>
				</div>
			</HomeHeader>
			<AboutUs>
				<div className="container">
					<SectionTitle>Dlaczego my?</SectionTitle>
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
			</AboutUs>

			<Benefits>
				<div className="container">
					<SectionTitle>Jakie korzyści płyną</SectionTitle>
					<IconsWrapper>
						<IconBox>
							<Icon name='report' />
						</IconBox>
						<IconBox>
							<Icon name='report' />
						</IconBox>
						<IconBox>
							<Icon name='report' />
						</IconBox>
						<IconBox>
							<Icon name='report' />
						</IconBox>
						<IconBox>
							<Icon name='report' />
						</IconBox>
					</IconsWrapper>
					<DescWrapper>
						<Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.</Description>
						<Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.</Description>
						<Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.</Description>
						<Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.</Description>
						<Description>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, perferendis reprehenderit nihil deserunt inventore cumque expedita. Cumque minima, autem fuga.</Description>
					</DescWrapper>
				</div>
			</Benefits>


			<Apartments>
				<div className="container">
					<SectionTitle>Nasze apartamenty</SectionTitle>
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
			</Apartments>
		</div>
	)
}

const Apartments = styled.section`
	width: 100%;
	margin: 50px 0;
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


//benefits
const Benefits = styled.section`
	width: 100%;
	margin: 50px 0;
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
`;

const IconsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
`;

const IconBox = styled.div`
	width: 100px;
	height: 100px;
	margin: 5px 20px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: springgreen;
	border-radius: 50%;
	transition: .2s ease-in-out;
	cursor: pointer;
	& svg {
		width: 45%;
	}
	@media screen and (min-width: 1024px) {
		width: 120px;
		height: 120px;
		margin: 0px 30px;
		&:hover {
			transform: scale(1.1);
		}
	}
`;

const DescWrapper = styled.div`
	width: 100%;
	min-height: 300px;
	box-shadow: 9px 4px 54px rgba(0, 0, 0, 0.25);
	text-align: center;
	margin: 40px 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const visibleDescription = `
	transition: .2s ease-in-out;
	position: relative;
	opacity: 1;
`;
const Description = styled.p`
	position: absolute;
	// width: 90%;
	// top: 50%;
	// left: 50%;
	// transform: translate(-50%,-50%);
	line-height: 2.5rem;
	font-size: 1.2rem;
	padding: 15px 10px;
	opacity: 0;
	&:first-child {
		${visibleDescription}
	}
	@media screen and (min-width: 768px) {
		font-size: 1.6rem;
		padding: 15px 30px;
	}
	@media screen and (min-width: 1280px) {
		line-height: 3.5rem;
    	font-size: 2rem;
	}
`;

// about us
const AboutUs = styled.section`
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


const SectionTitle = styled.h1`
	font-size: 2.4rem;
	margin: 30px 0;
	@media screen and (min-width: 768px) {
		font-size: 3.2rem;
		margin: 50px 0;
	}
`;

// header
const HomeHeader = styled.header`
	width: 100%;
	height: 400px;
	margin-top: 70px;
	background: url('${banner}') no-repeat center center;
	background-size: cover;
	transition: .4s linear;
	@media screen and (min-width: 768px) {
		height: 700px;
		background-attachment: fixed;
		background-size: unset;
		background-position: center 0;
	}
	.container {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`;
const HeaderTitle = styled.h1`
	font-size: 3rem;
	color: #fff;
	text-align: center;
	transition: .4s linear;
	@media screen and (min-width: 768px) {
		font-size: 5rem;
	}
`;