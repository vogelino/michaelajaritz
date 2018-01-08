import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const ContentWrapper = styled('section')`
	width: 50%;
	height: 100%;
	max-width: 590px;
	position: absolute;
	top: 0;
	right: 0;
	background: rgba(255,255,255,0.8);
	padding-left: 20px;
`;

const ScrollTopGradientOverlay = styled('div')`
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

const ScrollContainer = styled('div')`
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
	}
`;

const Content = ({ children }) => (
	<ContentWrapper>
		<ScrollContainer>
			{children}
		</ScrollContainer>
		<ScrollTopGradientOverlay />
		<ScrollBottomGradientOverlay />
	</ContentWrapper>
);

Content.propTypes = {
	children: PropTypes.any,
};

export default Content;

