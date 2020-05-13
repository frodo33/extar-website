import React from 'react';

import { Contact } from 'components/sections/Contact';
import { ContactDescription } from 'components/sections/ContactDescription';

export const ContactPage = () => {
	return (
		<div>
			<ContactDescription />
			<Contact />
		</div>
	)
}