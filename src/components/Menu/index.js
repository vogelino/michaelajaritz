import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import { withTheme } from 'theming';
import AnimatedInText from '../AnimatedInText';
import pages from '../../constants/pages';

const MenuListItem = styled('li')`
	padding: 10px 0 0;
	font-weight: ${({ active, theme }) => (active ? theme.menuFontWeightActive : theme.menuFontWeight)};
	font-size: ${({ theme }) => theme.menuFontSize};
	font-family: ${({ theme }) => theme.menuFontFamily};

	& a {
		text-decoration: none;
		color: ${({ theme, active }) => (!active ? theme.grey : theme.darkGrey)};
		transition: color 150ms ease-out;

		&:hover {
			color: ${({ theme }) => theme.darkGrey}
		}
	}
`;

const MenuList = styled('ul')`
	&,
	${MenuListItem} {
		margin-left: 0;
		padding-left: 0;
		list-style: none;
	}
`;

const Menu = ({ pageName, theme }) => (
	<MenuList>
		{pages.map((page, index) => (
			<MenuListItem key={page.name} active={pageName === page.name} theme={theme}>
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
	theme: PropTypes.shape({
		menuFontSize: PropTypes.string.isRequired,
	}).isRequired,
};

/* eslint-disable react/prefer-stateless-function */
export default withTheme(class extends Component {
	render() {
		return <Menu {...this.props} />;
	}
});

