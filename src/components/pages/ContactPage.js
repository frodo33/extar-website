import React from 'react';
import { SETTINGS } from 'settings/settings';

import { Contact } from 'components/sections/Contact';
import { ContactDescription } from 'components/sections/ContactDescription';

export const ContactPage = () => {
	return (
		<div>
			<ContactDescription data={SETTINGS.contactDescription} />
			<Contact data={SETTINGS.contactSection} />
		</div>
	)
}