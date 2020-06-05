import React from 'react';
import DATA from 'settings/data.json';

import { HomeHeader } from 'components/sections/HomeHeader';
import { AboutUs } from 'components/sections/AboutUs';
import { Benefits } from 'components/sections/Benefits';
import { Apartments } from 'components/sections/Apartments';
import { Contact } from 'components/sections/Contact';

export const HomePage = () => {
	return (
		<>
			<HomeHeader data={DATA.homeHeader} />
			<AboutUs data={DATA.aboutUsSection} />
			<Benefits data={DATA.benefitsSection} />
			<Apartments data={DATA.apartmentsSection} />
			<Contact data={DATA.contactSection} contact={DATA.contact} />
		</>
	)
}