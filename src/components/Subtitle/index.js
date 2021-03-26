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
	padding-top: ${({ marginTop }) => marginTop}px;
	padding-bottom: ${({ marginBottom }) => marginBottom}px;
	margin: 0;

	@media screen and (max-width: 540px) {
		font-size: ${({ theme }) => theme.subtitleFontSizeMobile};
		font-weight: ${({ theme }) => theme.subtitleFontWeightMobile};
		padding-top: ${({ marginTop }) => marginTop / 2}px;
		padding-bottom: ${({ marginBottom }) => marginBottom / 2}px;
	}
`;

const AnimatedSubtitle = ({
	children,
	marginTop,
	marginBottom,
	block,
	timeout,
}) => (
	<Subtitle marginTop={marginTop} marginBottom={marginBottom} >
		<AnimatedInText timeout={timeout} block={block}>
			{children}
		</AnimatedInText>
	</Subtitle>
);

AnimatedSubtitle.defaultProps = {
	timeout: 10,
	marginTop: 40,
	marginBottom: 20,
	block: false,
};

AnimatedSubtitle.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.element,
		PropTypes.arrayOf(PropTypes.element),
		PropTypes.string,
	]).isRequired,
	timeout: PropTypes.number,
	marginTop: PropTypes.number,
	marginBottom: PropTypes.number,
	block: PropTypes.bool,
};

export default AnimatedSubtitle;

