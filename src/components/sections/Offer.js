import React from 'react';
import styled from 'styled-components/macro';

import banner from 'assets/header.jpg';

export const Offer = () => {
	return (
		<OfferSection>
			<Banner></Banner>
			<div className="container">
				<OfferOptions>
					<Option>
						<div className="content">
							<h2 className='title'>Opcja nr 1</h2>
							<p className='descr'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque repudiandae sequi beatae modi totam quos nihil qui, perferendis nemo expedita, alias corporis corrupti, ut consectetur ipsum quam, porro libero dolore?</p>
							<ul className='list'>
								<li>Lorem ipsum dolor.</li>
								<li>Lorem ipsum dolor.</li>
								<li>Lorem ipsum dolor.</li>
							</ul>
							<button className='cta'>Sprawdź</button>
						</div>
					</Option>
					<Option>
						<div className="content">
							<h2 className='title'>Opcja nr 1</h2>
							<p className='descr'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque repudiandae sequi beatae modi totam quos nihil qui, perferendis nemo expedita, alias corporis corrupti, ut consectetur ipsum quam, porro libero dolore?</p>
							<ul className='list'>
								<li>Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.Lorem ipsum dolor.</li>
								<li>Lorem ipsum dolor.</li>
								<li>Lorem ipsum dolor.</li>
							</ul>
							<button className='cta'>Sprawdź</button>
						</div>
					</Option>
				</OfferOptions>
				<OfferDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio praesentium nobis, in corporis, laboriosam hic quo ex possimus maiores officiis quos velit sapiente consequatur necessitatibus nemo? In, vero, molestiae. Repudiandae illum odit asperiores labore, quisquam iure vitae adipisci aliquid necessitatibus consequatur facere. Fugit quos vero quam, labore id quia ipsa maiores pariatur velit, ut reprehenderit voluptas. Cupiditate possimus sunt voluptates, repellendus molestiae, earum vel, sit id voluptatibus repudiandae culpa! Fuga ducimus eum, cupiditate quae provident fugiat facere libero et placeat accusamus labore, porro maxime officia assumenda! Veniam quos deserunt laudantium vitae facilis repellat omnis, iure unde. Minus, perferendis a molestiae itaque recusandae quidem error saepe minima consequuntur voluptate excepturi voluptatibus, illum sunt totam esse voluptates autem quas officiis vel aperiam quibusdam possimus cum maxime. Explicabo possimus, mollitia, debitis accusantium facilis, assumenda dolores porro perferendis deleniti natus iure odio. Veniam, soluta id eum et accusantium consequatur ducimus, amet, voluptas consequuntur tempora, nulla quae esse quasi! Facere sunt tempora, laborum dignissimos deleniti expedita quisquam, officiis esse quo distinctio, corporis quae voluptate. Asperiores voluptatum officiis corrupti maiores sunt adipisci animi provident cupiditate. Eius aut ab nobis, voluptatem ipsum fugit pariatur aperiam ex a vitae quisquam hic quo molestias rerum, libero officiis, quia doloremque.</OfferDescription>
			</div>
		</OfferSection>
	)
}

const OfferSection = styled.section`
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

const Option = styled.div`
	width: 85%;
	max-width: 250px;
	min-height: 200px;
	margin: 20px 0;
	padding: 25px 15px;
	background: #fff;
	box-shadow: 42px 44px 74px rgba(0, 0, 0, 0.15);
	@media screen and (min-width: 768px) {
		padding: 30px;
	}
	@media screen and (min-width: 1024px) {
		 max-width: 400px;
		 padding: 50px 30px;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		.title {
			align-self: center;
			font-size: 2.2rem;
			@media screen and (min-width: 1024px) {
				font-size: 3.2rem;
			}
		}
		.descr {
			font-size: 1.2rem;
			line-height: 1.6rem;
			margin: 20px 0;
			@media screen and (min-width: 1024px) {
				font-size: 1.6rem;
				line-height: 3rem;
				margin: 30px 0;
			}
		}
		.list {
			& li {
				position: relative;
				font-size: 1.2rem;
				line-height: 1.6rem;
				list-style: none;
				margin-left: 10px;
				@media screen and (min-width: 1024px) {
					font-size: 1.6rem;
					line-height: 2.4rem;
				}
				&:before {
					content: '-';
					padding: 0 5px 0 0;
					margin: 0 0 0 -10px;
				}
			}
		}
		.cta {
			margin: 20px 0 0 0;
			padding: 12px 35px;
			align-self: center;
			background: #000;
			color: #fff;
			font-size: 1.2rem;
			font-weight: 600;
			border: none;
			outline: none;
			transition: .2s ease-in-out;
			cursor: pointer;
			@media screen and (min-width: 1024px) {
				font-size: 1.6rem;
				padding: 18px 55px;
				margin: 30px 0 0 0;
			}
			&:hover {
				transform: scale(1.05);
			}
		}
	}
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