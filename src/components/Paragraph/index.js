import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { withTheme } from 'theming';
import AnimatedInText from '../AnimatedInText';

const ParagraphWrapper = withTheme(styled('p')`
	font-family: ${({ theme }) => theme.paragraphFontFamily};
	font-size: ${({ theme }) => theme.paragraphFontSize};
	font-weight: ${({ theme }) => theme.paragraphFontWeight};
	letter-spacing: ${({ theme }) => theme.paragraphLetterSpacing};
	line-height: ${({ theme }) => theme.paragraphLineHeight};
	color: ${({ theme }) => theme.darkGrey};
	margin: 20px 0 20px 0;
	padding: 0 4px;

	& a {
		color: ${({ theme }) => [theme.blue, theme.orange, theme.purple][Math.round(Math.random() * 2)]}
	}
`);

const Paragraph = ({ children, timeout }) => (
	<AnimatedInText block timeout={timeout}>
		<ParagraphWrapper>
			{children}
		</ParagraphWrapper>
	</AnimatedInText>
);

Paragraph.defaultProps = {
	timeout: 0,
};

Paragraph.propTypes = {
	children: PropTypes.any.isRequired,
	timeout: PropTypes.number,
};

export default Paragraph;

