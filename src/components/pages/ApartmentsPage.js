import React from 'react';
import styled from 'styled-components/macro';

import banner from 'assets/header.jpg';

import { Contact } from 'components/sections/Contact';

export const ApartmentsPage = () => {
	return (
		<div>
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
					</OfferOptions>
					<OfferDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio praesentium nobis, in corporis, laboriosam hic quo ex possimus maiores officiis quos velit sapiente consequatur necessitatibus nemo? In, vero, molestiae. Repudiandae illum odit asperiores labore, quisquam iure vitae adipisci aliquid necessitatibus consequatur facere. Fugit quos vero quam, labore id quia ipsa maiores pariatur velit, ut reprehenderit voluptas. Cupiditate possimus sunt voluptates, repellendus molestiae, earum vel, sit id voluptatibus repudiandae culpa! Fuga ducimus eum, cupiditate quae provident fugiat facere libero et placeat accusamus labore, porro maxime officia assumenda! Veniam quos deserunt laudantium vitae facilis repellat omnis, iure unde. Minus, perferendis a molestiae itaque recusandae quidem error saepe minima consequuntur voluptate excepturi voluptatibus, illum sunt totam esse voluptates autem quas officiis vel aperiam quibusdam possimus cum maxime. Explicabo possimus, mollitia, debitis accusantium facilis, assumenda dolores porro perferendis deleniti natus iure odio. Veniam, soluta id eum et accusantium consequatur ducimus, amet, voluptas consequuntur tempora, nulla quae esse quasi! Facere sunt tempora, laborum dignissimos deleniti expedita quisquam, officiis esse quo distinctio, corporis quae voluptate. Asperiores voluptatum officiis corrupti maiores sunt adipisci animi provident cupiditate. Eius aut ab nobis, voluptatem ipsum fugit pariatur aperiam ex a vitae quisquam hic quo molestias rerum, libero officiis, quia doloremque.</OfferDescription>
				</div>
			</OfferSection>
			<Contact />
		</div>
	)
}

const OfferSection = styled.section`
	width: 100%;
	margin-top: 70px;
`;

const Banner = styled.div`
	height: 400px;
	background: url('${banner}') no-repeat center center;
	background-size: cover;
	transition: .4s linear;
	@media screen and (min-width: 768px) {
		height: 700px;
		background-attachment: fixed;
		background-size: unset;
		background-position: center 0;
	}
`;

const OfferOptions = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Option = styled.div`
	width: 90%;
	min-height: 200px;
	background: coral;
	margin: 20px 0;
	padding: 25px 30px;
	.content {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		.title {
			align-self: center;
		}
		.descr {
			margin: 20px 0;
		}
		.list {
			& li {
				position: relative;
				list-style: none;
				margin-left: 10px;
				&:before {
					content: '';
					position: absolute;
					width: 5px;
					height: 1px;
					top: 50%;
					left: -10px;
					transform: translate(0%,-50%);
					background: #000;
				}
			}
		}
		.cta {
			margin: 20px 0;
			padding: 10px 20px;
			align-self: center;
			background: springgreen;
		}
	}
`;

const OfferDescription = styled.p``;