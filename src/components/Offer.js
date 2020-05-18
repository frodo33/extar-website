import React from 'react';
import styled from 'styled-components/macro';

export const Offer = ({ data }) => {
	const { title, descr, points } = data;
	const list = points.map( (el, i) => <li key={i}>{el}</li>);
	return (
		<Option>
			<div className="content">
				<h2 className='title'>{title}</h2>
				<p className='descr'>{descr}</p>
				<ul className='list'>
					{list}
				</ul>
				<button className='cta'>Sprawdź</button>
			</div>
		</Option>
	)
}
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