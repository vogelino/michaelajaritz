import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const ContentWrapper = styled('section')`
	width: 50%;
	min-height: 100%;
	max-width: 590px;
	position: absolute;
	top: 0;
	right: 0;
	padding: 40px 50px 160px 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: rgba(255,255,255,0.8);
`;

const ScrollTopGradientOverlay = styled('div')`
	width: calc(40% - 70px);
	height: 40px;
	background: linear-gradient(to top, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 95%);
	position: fixed;
	top: 0;
	right: 50px;
	pointer-events: none;
`;

const ScrollBottomGradientOverlay = styled('div')`
	width: calc(40% - 70px);
	height: 160px;
	background: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 90%);
	position: fixed;
	bottom: 0;
	right: 50px;
	pointer-events: none;
`;

const Content = ({ children }) => (
	<ContentWrapper>
		{children}
		<ScrollTopGradientOverlay />
		<ScrollBottomGradientOverlay />
	</ContentWrapper>
);

Content.propTypes = {
	children: PropTypes.any,
};

export default Content;

