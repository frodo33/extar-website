import React from 'react';

import DATA from 'settings/data.json'

import { Services } from 'components/sections/Services.js';




export const PricesPage = () => {
	return (
		<>
			<Services data={DATA.services} />
		</>
	)
}