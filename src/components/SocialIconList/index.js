import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnimatedInText from '../AnimatedInText';

const Icon = styled.span`
	width: 24px;
	height: 24px;
	margin-right: 16px;
	display: inline-block;
	cursor: pointer;
	background-image: url('${({ iconPath }) => iconPath}');
	background-size: 100% 100%;
	background-repeat: no-repeat;
	transform: scale(.8) rotate(0);
	transition: transform 100ms ease-out;

	&:hover {
		transform: scale(1) rotate(-2deg);
	}
`;

const SocialIconList = ({ startTimeout }) => (
	<div>
		<a href="https://www.facebook.com/michaela.jaritz.77" target="_blank" rel="noopener noreferrer">

			<AnimatedInText timeout={startTimeout}>
				<span>
					<Icon iconPath="/static/facebook.svg" />
				</span>
			</AnimatedInText>
		</a>
		<a href="https://www.xing.com/profile/Michaela_Jaritz/" target="_blank" rel="noopener noreferrer">
			<AnimatedInText timeout={startTimeout + 200}>
				<span>
					<Icon iconPath="/static/xing.svg" />
				</span>
			</AnimatedInText>
		</a>
		<a href="https://twitter.com/MichaelaJaritz" target="_blank" rel="noopener noreferrer">
			<AnimatedInText timeout={startTimeout + 300}>
				<span>
					<Icon iconPath="/static/twitter.svg" />
				</span>
			</AnimatedInText>
		</a>
		<a href="https://www.linkedin.com/in/michaela-jaritz-797b77145/" target="_blank" rel="noopener noreferrer">
			<AnimatedInText timeout={startTimeout + 400}>
				<span>
					<Icon iconPath="/static/linkedin.svg" />
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
