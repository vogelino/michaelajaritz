import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

const MobilePictureElement = styled.img.attrs({
	style: ({ timeout, clientSideReady }) => ({
		transitionDelay: `${timeout}ms`,
		opacity: clientSideReady ? 1 : 0,
	}),
})`
	width: 100%;
	width: calc(100% + 40px);
	margin-left: calc(-20px);
	margin-top: 40px;
	margin-bottom: 20px;
	transition-property: opacity;
	transition-duration: 6000ms;
	transition-timing-function: cubic-bezier(0,1,.37,.98);

	&:first-of-type {
		margin-top: -22px;
	}
`;

const MobilePicture = (props) => (!props.isMobile ? null : (
	<MobilePictureElement {...props} />
));

MobilePicture.defaultProps = {
	isMobile: false,
	timeout: 100,
};

MobilePicture.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	timeout: PropTypes.number,
	isMobile: PropTypes.bool,
	clientSideReady: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ ui: { windowWidth, clientSideReady } }) => ({
	isMobile: windowWidth < 960,
	clientSideReady,
});

export default connect(mapStateToProps)(MobilePicture);
