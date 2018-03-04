import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

const MobilePictureElement = styled.img`
	width: 100%;
	width: calc(100% + 40px);
	margin-left: calc(-20px);
	margin-top: 40px;
	margin-bottom: 20px;

	&:first-of-type {
		margin-top: -22px;
	}
`;

const MobilePicture = ({ src, alt, isMobile }) => (!isMobile ? null : (
	<MobilePictureElement src={src} alt={alt} />
));

MobilePicture.defaultProps = {
	isMobile: false,
};

MobilePicture.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	isMobile: PropTypes.bool,
};

const mapStateToProps = ({ ui: { windowWidth } }) => ({
	isMobile: windowWidth < 960,
});

export default connect(mapStateToProps)(MobilePicture);
