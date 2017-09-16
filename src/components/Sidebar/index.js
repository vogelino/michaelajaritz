import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Menu from '../Menu';

const SidebarWrapper = styled('aside')`
	width: 280px;
	height: 100%;
	position: fixed;
	background: blue;
	display: flex;
	flex-direction: column;
	padding: 60px 10px 60px 70px;
`;

const LogoZone = styled('section')`
	width: 100%;
	background: green;
	flex-basis: 130px;
`;

const MenuZone = styled('nav')`
	width: 100%;
	background: yellow;
	flex-basis: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const FooterZone = styled('footer')`
	width: 100%;
	background: orange;
	flex-basis: 80px;
`;

const Sidebar = ({ pageName }) => (
	<SidebarWrapper>
		<LogoZone />
		<MenuZone>
			<Menu pageName={pageName} />
		</MenuZone>
		<FooterZone />
	</SidebarWrapper>
);

Sidebar.propTypes = {
	pageName: PropTypes.string.isRequired,
};

export default Sidebar;

