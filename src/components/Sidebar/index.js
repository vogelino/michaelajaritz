import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Menu from '../Menu';
import Logo from '../Logo';
import Footer from '../Footer';

const SidebarWrapper = styled('aside')`
	width: 280px;
	height: 100%;
	position: fixed;
	display: flex;
	flex-direction: column;
	padding: 40px 10px 40px 50px;
`;

const LogoZone = styled('section')`
	width: 100%;
	flex-basis: 130px;
`;

const MenuZone = styled('nav')`
	width: 100%;
	flex-basis: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const FooterZone = styled('footer')`
	width: 100%;
	flex-basis: 80px;
`;

const Sidebar = ({ pageName }) => (
	<SidebarWrapper>
		<LogoZone>
			<Logo />
		</LogoZone>
		<MenuZone>
			<Menu pageName={pageName} />
		</MenuZone>
		<FooterZone>
			<Footer />
		</FooterZone>
	</SidebarWrapper>
);

Sidebar.propTypes = {
	pageName: PropTypes.string.isRequired,
};

export default Sidebar;

