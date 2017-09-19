import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const ContentWrapper = styled('section')`
	width: 40%;
	min-height: 100%;
	max-width: 500px;
	position: absolute;
	top: 0;
	right: 0;
	padding: 40px 50px 40px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const Content = ({ children }) => (
	<ContentWrapper>
		{children}
	</ContentWrapper>
);

Content.propTypes = {
	children: PropTypes.any,
};

export default Content;

