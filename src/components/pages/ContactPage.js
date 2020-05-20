import React from 'react';
import DATA from 'settings/data.json';

import { Contact } from 'components/sections/Contact';
import { ContactDescription } from 'components/sections/ContactDescription';

export const ContactPage = () => {
	return (
		<div>
			<ContactDescription data={DATA.contactDescription} />
			<Contact data={DATA.contactSection} />
		</div>
	)
}