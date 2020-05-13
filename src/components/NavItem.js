import React from 'react';
import { Link } from 'react-router-dom';

export const NavItem = ({ path, name }) => {
	return (
		<li>
			<Link to={path}>{name}</Link>
		</li>
	)
}