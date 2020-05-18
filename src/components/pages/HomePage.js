import React from 'react';
import { SETTINGS } from 'settings/settings';

import { HomeHeader } from 'components/sections/HomeHeader';
import { AboutUs } from 'components/sections/AboutUs';
import { Benefits } from 'components/sections/Benefits';
import { Apartments } from 'components/sections/Apartments';
import { Contact } from 'components/sections/Contact';

export const HomePage = () => {
	return (
		<>
			<HomeHeader data={SETTINGS.homeHeader} />
			<AboutUs data={SETTINGS.aboutUs} />
			<Benefits data={SETTINGS.benefits} />
			<Apartments data={SETTINGS.apartments} />
			<Contact data={SETTINGS.contact} />
		</>
	)
}