import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import welcome from './welcome';
import aboutme from './aboutme';
import cooperations from './cooperations';
import focus from './focus';
import idea from './idea';
import offer from './offer';
import contact from './contact';

const components = {
	welcome,
	aboutme,
	cooperations,
	focus,
	idea,
	offer,
	contact,
};

const IllustrationZoneWrapper = styled('section')`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	padding-left: 280px;
	overflow: hidden;
`;

const IllustrationZoneContent = styled('div')`
	position: relative;
	width: 100%;
	height: 200%;
	overflow: hidden;
	transform-origin: 0 50%;
	transform: translateY(-25%) scale(${({ scale }) => scale});
`;

const IllustrationZone = ({ pageName, scale }) => {
	const Component = components[pageName];
	return (
		<IllustrationZoneWrapper>
			<IllustrationZoneContent scale={scale}>
				<Component />
			</IllustrationZoneContent>
		</IllustrationZoneWrapper>
	);
};

IllustrationZone.propTypes = {
	pageName: PropTypes.string,
	scale: PropTypes.number.isRequired,
};

const mapStateToProps = ({ ui }) => ({
	scale: ui.windowWidth < 1280 ? 0.8 : ui.windowWidth / 1600,
});

export default connect(mapStateToProps)(IllustrationZone);

