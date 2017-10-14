import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { withTheme } from 'theming';
import AnimatedInText from '../AnimatedInText';

const Subtitle = withTheme(styled('h2')`
	font-family: ${({ theme }) => theme.subtitleFontFamily};
	font-size: ${({ theme }) => theme.subtitleFontSize};
	font-weight: ${({ theme }) => theme.subtitleFontWeight};
	letter-spacing: ${({ theme }) => theme.subtitleLetterSpacing};
	color: ${({ theme }) => theme.grey};
	display: block;
	margin: 0 0 ${({ nomargin }) => (nomargin ? 0 : 80)}px 0;
`);

const AnimatedSubtitle = ({ children, timeout, nomargin }) => (
	<Subtitle nomargin={nomargin}>
		<AnimatedInText timeout={timeout}>
			<span>
				{children}
			</span>
		</AnimatedInText>
	</Subtitle>
);

AnimatedSubtitle.defaultProps = {
	timeout: 10,
	nomargin: false,
};

AnimatedSubtitle.propTypes = {
	children: PropTypes.element.isRequired,
	timeout: PropTypes.number,
	nomargin: PropTypes.bool,
};

export default AnimatedSubtitle;

