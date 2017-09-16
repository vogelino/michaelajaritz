import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';

const pages = [
	'welcome',
	'idea',
	'offer',
	'focus',
	'aboutme',
	'contact',
	'cooperations',
];

const MenuListItem = styled('li')`
	background: ${({ active }) => (active ? 'hotpink' : 'red')};
	padding: 20px 0 0;
`;

const MenuList = styled('ul')`
	&,
	${MenuListItem} {
		margin-left: 0;
		padding-left: 0;
		list-style: none;
	}
`;

const Menu = ({ pageName }) => (
	<MenuList>
		{pages.map((page) => (
			<MenuListItem key={page} active={pageName === page}>
				<Link href={`/${page === 'welcome' ? '' : page}`}>
					<a>
						<FormattedMessage id={`pages.${page}.title`} />
					</a>
				</Link>
			</MenuListItem>
		))}
	</MenuList>
);

Menu.propTypes = {
	pageName: PropTypes.string.isRequired,
};

export default Menu;

