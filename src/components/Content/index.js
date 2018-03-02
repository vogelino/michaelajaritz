import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { HamburgerButton } from 'react-hamburger-button';
import { setSidebarState } from '../../redux/actions/sidebarActions';

const ContentWrapper = styled.section`
	width: 50%;
	height: 100%;
	max-width: 590px;
	position: absolute;
	top: 0;
	right: 0;
	background: rgba(255,255,255,0.8);
	padding-left: 20px;
`;

const ScrollTopGradientOverlay = styled.div`
	width: 100%;
	height: 40px;
	background: linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 95%);
	position: absolute;
	top: 0;
	right: 0;
	pointer-events: none;
`;

const ScrollBottomGradientOverlay = styled(ScrollTopGradientOverlay)`
	height: 160px;
	background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 90%);
	top: auto;
	bottom: 0;
`;

const ScrollContainer = styled.div`
	width: 100%;
	height: 100%;
	top: 0;
	right: 0;
	position: relative;
	overflow-x: hidden;
	overflow-y: auto;
	padding-right: 50px;

	& > div {
		padding: 40px 0 160px 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 100%;
	}
`;

const MobileWrapper = styled.div`
	width: 100%;
	box-sizing: border-box;
	padding: 80px 20px;
`;

const MobileHeader = styled.header`
	z-index: 20;
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background: white;
	padding: 20px;
	transition: box-shadow 400ms ease-out;

	@media screen and (max-width: 320px) {
		box-shadow: ${({ isOpen }) => (!isOpen ? '-4px 0 20px -4px rgba(0,0,0,.2)' : '0 0 0 0 rgba(0,0,0,0)')};
	}
	@media screen and (min-width: 321px) {
		box-shadow: -4px 0 20px -4px rgba(0,0,0,.2);
	}
`;

const LogoImage = styled.img`
	height: 18px;
	width: auto;
	float: left;
`;

const SidebarToggle = styled.span`
	float: right;
`;

const Content = ({ children, isMobile, setSidebar, isOpen }) => (isMobile ? (
	<MobileWrapper>
		<MobileHeader isOpen={isOpen}>
			<Link prefetch href="/">
				<LogoImage src="/static/logo-mobile.svg" />
			</Link>
			<SidebarToggle>
				<HamburgerButton
					onClick={() => setSidebar(!isOpen)}
					width={20}
					height={16}
					open={isOpen}
					color="#9AABB3"
				/>
			</SidebarToggle>
		</MobileHeader>
		{children}
	</MobileWrapper>
	) : (
		<ContentWrapper>
			<ScrollContainer>
				{children}
			</ScrollContainer>
			<ScrollTopGradientOverlay />
			<ScrollBottomGradientOverlay />
		</ContentWrapper>
	)
);

Content.propTypes = {
	children: PropTypes.any,
	isMobile: PropTypes.bool.isRequired,
	isOpen: PropTypes.bool.isRequired,
	setSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = ({ ui, isSidebarOpen }) => ({
	isMobile: ui.windowWidth < 1280,
	isOpen: isSidebarOpen,
});

const mapDispatchToProps = (dispatch) => ({
	setSidebar: (isOpen) => dispatch(setSidebarState(isOpen)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);

