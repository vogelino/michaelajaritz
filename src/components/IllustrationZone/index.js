import { connect } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import willkommen from './willkommen';
import ueberMich from './ueber-mich';
import kooperationen from './kooperationen';
import fokus from './fokus';
import idee from './idee';
import angebot from './angebot';
import kontakt from './kontakt';
import impressum from './impressum';

const components = {
	'ueber-mich': ueberMich,
	willkommen,
	kooperationen,
	fokus,
	idee,
	angebot,
	kontakt,
	impressum,
};

const IllustrationZoneWrapper = styled.section`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	padding-left: 240px;
	overflow: hidden;

	@media screen and (max-width: 960px) {
		display: none;
	}
`;

const IllustrationZoneContent = styled.div`
	position: relative;
	width: 100%;
	height: 200%;
	overflow: hidden;
	transform-origin: 0 50%;
	transform: translateY(-25%) scale(${({ scale }) => scale});
`;

const IllustrationZone = ({ pageName, scale }) => {
	const Component = components[pageName] || (() => null);
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

const mapStateToProps = ({ ui: { windowWidth } }) => ({
	scale: windowWidth < 960 ? 0.8 : windowWidth / 1600,
});

export default connect(mapStateToProps)(IllustrationZone);

