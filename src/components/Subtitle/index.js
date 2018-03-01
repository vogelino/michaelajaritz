import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AnimatedInText from '../AnimatedInText';

const Subtitle = styled.h2`
	font-family: ${({ theme }) => theme.subtitleFontFamily};
	font-size: ${({ theme }) => theme.subtitleFontSize};
	font-weight: ${({ theme }) => theme.subtitleFontWeight};
	letter-spacing: ${({ theme }) => theme.subtitleLetterSpacing};
	color: ${({ theme }) => theme.grey};
	display: block;
	margin-top: ${({ marginTop }) => marginTop}px;
	margin-bottom: ${({ marginBottom }) => marginBottom}px;

	@media screen and (max-width: 540px) {
		font-size: ${({ theme }) => theme.subtitleFontSizeMobile};
		font-weight: ${({ theme }) => theme.subtitleFontWeightMobile};
		margin-top: ${({ marginTop }) => marginTop / 2}px;
		margin-bottom: ${({ marginBottom }) => marginBottom / 2}px;
	}
`;

const AnimatedSubtitle = (props) => (
	<Subtitle {...props} >
		<AnimatedInText timeout={props.timeout} block={props.block}>
			<span>
				{props.children}
			</span>
		</AnimatedInText>
	</Subtitle>
);

AnimatedSubtitle.defaultProps = {
	timeout: 10,
	marginTop: 0,
	marginBottom: 40,
	block: false,
};

AnimatedSubtitle.propTypes = {
	children: PropTypes.element.isRequired,
	timeout: PropTypes.number,
	marginTop: PropTypes.number,
	marginBottom: PropTypes.number,
	block: PropTypes.bool,
};

export default AnimatedSubtitle;

