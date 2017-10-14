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
`;

const IllustrationZoneContent = styled('div')`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

const IllustrationZone = ({ pageName }) => {
	const Component = components[pageName];
	return (
		<IllustrationZoneWrapper>
			<IllustrationZoneContent>
				<Component />
			</IllustrationZoneContent>
		</IllustrationZoneWrapper>
	);
};

IllustrationZone.propTypes = {
	pageName: PropTypes.string,
};

export default IllustrationZone;

