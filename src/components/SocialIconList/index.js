import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import AnimatedInText from '../AnimatedInText';

const Icon = styled('span')`
	width: 24px;
	height: 24px;
	margin-right: 16px;
	display: inline-block;
	cursor: pointer;
	background-image: url('${({ iconPath }) => iconPath}');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	transform: scale(.8);
	transition: transform 100ms ease-out;

	&:hover {
		transform: scale(1);
	}
`;

const SocialIconList = ({ startTimeout }) => (
	<div>
		<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">

			<AnimatedInText timeout={startTimeout}>
				<span>
					<Icon iconPath="/static/facebook.svg" />
				</span>
			</AnimatedInText>
		</a>
		<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
			<AnimatedInText timeout={startTimeout + 100}>
				<span>
					<Icon iconPath="/static/twitter.svg" />
				</span>
			</AnimatedInText>
		</a>
		<a href="https://xing.com" target="_blank" rel="noopener noreferrer">
			<AnimatedInText timeout={startTimeout + 200}>
				<span>
					<Icon iconPath="/static/xing.svg" />
				</span>
			</AnimatedInText>
		</a>
	</div>
);

SocialIconList.defaultProps = {
	startTimeout: 10,
};

SocialIconList.propTypes = {
	startTimeout: PropTypes.number,
};

export default SocialIconList;
