import React from 'react';
import { SETTINGS } from 'settings/settings';

import { Contact } from 'components/sections/Contact';
import { OfferSection } from 'components/sections/OfferSection';

export const ApartmentsPage = () => {
	return (
		<div>
			<OfferSection data={SETTINGS.offerSection} />
			<Contact data={SETTINGS.contactSection} />
		</div>
	)
}