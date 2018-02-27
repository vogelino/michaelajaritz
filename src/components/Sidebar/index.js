import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Menu from '../Menu';
import Logo from '../Logo';
import Footer from '../Footer';

const SidebarWrapper = styled('aside')`
	top: 0;
	left: 0;
	width: ${({ isMobile }) => (isMobile ? '100%' : '280px')};
	height: 100%;
	height: 100vh;
	position: fixed;
	display: flex;
	flex-direction: column;
	padding: ${({ isMobile }) => (!isMobile ? '40px 40px 40px 50px' : '50px 20px 40px 20px')};
	${({ isMobile }) => isMobile && 'background: white;'}
	${({ isMobile }) => isMobile && 'box-shadow: 0 -4px 20px -4px rgba(0,0,0,.2);'}
	z-index: 10;
	transition: transform 600ms cubic-bezier(0,1,.37,.98), opacity 400ms cubic-bezier(0,1,.37,.98);
	transform: translateX(${({ isOpen, isMobile }) => (!isMobile || isOpen ? '0' : '-100%')});
	opacity: ${({ isOpen, isMobile }) => (!isMobile || isOpen ? 1 : 0)};
	box-sizing: border-box;

	@media screen and (min-width: 321px) {
		max-width: 220px;
	}
`;

const LogoZone = styled('section')`
	width: 100%;
	flex-basis: 130px;
`;

const MenuZone = styled('nav')`
	width: 100%;
	${({ isMobile }) => isMobile && 'margin-bottom: 20px;'}
	${({ isMobile }) => !isMobile && `
		flex-basis: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	`}
`;

const FooterZone = styled('footer')`
	width: 100%;
	flex-basis: 56px;
`;

const Sidebar = ({ isOpen, isMobile, pageName }) => (
	<SidebarWrapper isOpen={isOpen} isMobile={isMobile}>
		{!isMobile && (
			<LogoZone>
				<Logo />
			</LogoZone>
		)}
		<MenuZone {...{ isMobile }}>
			<Menu pageName={pageName} />
		</MenuZone>
		<FooterZone>
			<Footer />
		</FooterZone>
	</SidebarWrapper>
);

Sidebar.propTypes = {
	pageName: PropTypes.string.isRequired,
	isMobile: PropTypes.bool.isRequired,
	isOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ ui, isSidebarOpen }) => ({
	isMobile: ui.windowWidth < 1280,
	isOpen: isSidebarOpen,
});

export default connect(mapStateToProps)(Sidebar);

