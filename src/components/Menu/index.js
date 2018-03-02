import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import AnimatedInText from '../AnimatedInText';
import pages from '../../constants/pages';

const MenuListItem = styled.li`
	margin: 0;
	list-style: none;
	padding: 10px 0 0;
	font-weight: ${({ active, theme }) =>
		(active ? theme.menuFontWeightActive : theme.menuFontWeight)};
	font-size: ${({ theme }) => theme.menuFontSize};
	font-family: ${({ theme }) => theme.menuFontFamily};

	@media screen and (max-width: 540px) {
		font-weight: ${({ active, theme }) =>
			(active ? theme.menuFontWeightActive : theme.menuFontWeightMobile)};
	}

	& a {
		text-decoration: none;
		color: ${({ theme, active }) =>
			(!active ? theme.grey : theme.darkGrey)};
		transition: color 150ms ease-out;

		&:hover {
			color: ${({ theme }) => theme.darkGrey}
		}

		> span {
			width: 100%;
			height: 27px;

			> span {
				pointer-events: none;
			}
		}
	}
`;

const MenuList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;

const Menu = ({ pageName }) => (
	<MenuList>
		{pages.map((page, index) => (
			<MenuListItem key={page.name} active={pageName === page.name}>
				<Link prefetch href={page.path}>
					<a>
						<AnimatedInText timeout={(index * 100) + 400}>
							<FormattedMessage id={`pages.${page.name}.title`} />
						</AnimatedInText>
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
