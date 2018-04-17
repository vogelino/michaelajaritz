import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Parallelepiped from '../Parallelepiped';

const MobilePictureWrapper = styled.section`
	position: relative;
	width: 100%;
	width: calc(100% + 40px);
	margin-left: calc(-20px);
	margin-top: 40px;
	margin-bottom: 20px;
	overflow: hidden;

	&:after {
		content: "";
		display: table;
		clear: both;
	}

	&:first-of-type {
		margin-top: -22px;
	}

	& .parallelepiped {
		top: auto;
		bottom: 0;
	}

	& .big-right-parallelepiped {
		left: 100%;
		transform: translate(-8%, 2px) !important;
		transition: none;
	}
`;

const MobilePictureElement = styled.img.attrs({
	style: ({ timeout, clientSideReady }) => ({
		transitionDelay: `${timeout}ms`,
		opacity: clientSideReady ? 1 : 0,
	}),
})`
	width: 100%;
	transition-property: opacity;
	transition-duration: 6000ms;
	transition-timing-function: cubic-bezier(0,1,.37,.98);
	float: left;
`;

const MobilePicture = (props) => (!props.isMobile ? null : (
	<MobilePictureWrapper>
		<MobilePictureElement {...props} />
		<Parallelepiped
			size={13}
			position={[-15, 12]}
			timeout={200}
			color="blue"
		/>
		<Parallelepiped
			size={2}
			position={[0, 2]}
			timeout={300}
		/>
		<Parallelepiped
			size={1}
			position={[3, -1]}
			timeout={400}
			color="blue"
		/>
		<Parallelepiped
			size={6}
			position={[-6, 6]}
			timeout={500}
			color="orange"
		/>
		<Parallelepiped
			size={30}
			position={[13, 30]}
			color="white"
			className="big-right-parallelepiped"
		/>
	</MobilePictureWrapper>
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
