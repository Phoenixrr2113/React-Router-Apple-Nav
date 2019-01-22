import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	const links = ['Mac', 'iPad', 'iPhone', 'Watch', 'TV', 'Music', 'Support'];

	return (
		<div className="nav-bar">
			{links.map((link, i) => (
				<div key={i}>
					<NavLink to={`/${link}`}>{link}</NavLink>
				</div>
			))}
		</div>
	);
};

export default NavBar;
