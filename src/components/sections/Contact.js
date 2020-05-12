import React from 'react';
import styled from 'styled-components/macro';

const SectionTitle = styled.h1`
	font-size: 2.4rem;
	margin: 30px 0;
	@media screen and (min-width: 768px) {
		font-size: 3.2rem;
		margin: 50px 0;
	}
`;


export const Contact = () => {
	return (
		<ContactSection>
			<div className="container">
				<SectionTitleWithTip>Masz pytania?</SectionTitleWithTip>
				<ContactTip>Skontaktuj się z nami lub zostaw kontakt</ContactTip>
				<ContactWrapper>
					<Form>
						<div className="form-wrapper">
							<div className='field'>
								<input type="email" name="email" id="email" />
							</div>
							<div className='legal'>
								<input type="checkbox" name="checkbox" id="checkbox" />
								<label htmlFor="checkbox">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, id!</label>
							</div>
						</div>
						<button type='submit' className='submit-btn'>Zapisz</button>
					</Form>
					<Or>lub</Or>
					<Details>
						<a href='tel:12332112'>555 333 555</a>
						<a href='mailto:test@test.pl'>test@test.pl</a>
					</Details>
				</ContactWrapper>
			</div>
		</ContactSection>
	)
}
const ContactSection = styled.section`
	width: 100%;
	@media screen and (min-width: 768px) {
		margin: 50px 0;
	}
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
`;

const SectionTitleWithTip = styled(SectionTitle)`
	margin: 50px 0 0 0;
	@media screen and (min-width: 768px) {
		margin: 50px 0 15px 0;
	}
`;
const ContactTip = styled.p`
	font-size: 1.2rem;
	max-width: 150px;
	text-align: center;
`;

const ContactWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 50px 0;
	@media screen and (min-width: 768px) {
		flex-direction: row;
	}
`;

const Form = styled.form`
	position: relative;
	display: flex;
	width: 100%;
	max-width: 500px;
	margin: 0 0 30px 0;
	@media screen and (min-width: 768px) {
		margin: 0px;
	}

	.form-wrapper {
		width: 70%;
		@media screen and (min-width: 768px) {
			position: relative;
		}
		.field {
			border: 1px solid #000;
			& input {
				width: 100%;
				min-height: 35px;
			}
		}
		.legal {
			position: absolute;
			top: 120%;
			left: 0;
			width: 100%;
			display: flex;
			align-items: center;
			& input {}
			& label {
				font-size: 1.2rem;
				padding-left: 5px;
			}
		}
	}
	.submit-btn {
		width: 30%;
		margin-left: 10px;
		border: none;
		outline: none;
		background: #000;
		color: #fff;
	}
`;

const Or = styled.span`
	font-size: 3rem;
	margin: 30px 30px;
`;

const Details = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 1.6rem;
	white-space: nowrap;
	& a {
		text-decoration: none;
		color: #000;
	}
	& a:first-child {
		padding-bottom: 5px;
	}
`;