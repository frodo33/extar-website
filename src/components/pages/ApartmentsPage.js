import React from 'react';
import { SETTINGS } from 'settings/settings';

import { Contact } from 'components/sections/Contact';
import { Offer } from 'components/sections/Offer';

export const ApartmentsPage = () => {
	return (
		<div>
			<Offer />
			<Contact data={SETTINGS.contact} />
		</div>
	)
}