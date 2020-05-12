import React from 'react';

import { HomeHeader } from 'components/sections/HomeHeader';
import { AboutUs } from 'components/sections/AboutUs';
import { Benefits } from 'components/sections/Benefits';
import { Apartments } from 'components/sections/Apartments';
import { Contact } from 'components/sections/Contact';

export const Home = () => {
	return (
		<div>
			<HomeHeader />
			<AboutUs />
			<Benefits />
			<Apartments />
			<Contact />
		</div>
	)
}