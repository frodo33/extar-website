import React from 'react';
import DATA from 'settings/data.json';

import { Contact } from 'components/sections/Contact';
import { OfferSection } from 'components/sections/OfferSection';

export const ApartmentsPage = () => {
	return (
		<div>
			<OfferSection data={DATA.offerSection} />
			<Contact data={DATA.contactSection} />
		</div>
	)
}