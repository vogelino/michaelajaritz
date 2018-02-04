import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import AnimatedInText, { AnimatedInTextContent } from '../AnimatedInText';

const LogoImage = styled('img')`
	width: 100%;
	margin-bottom: 10px;
	cursor: pointer;
`;

const LogoLink = styled('a')`
	width: 100%;
	opacity: 1;
	transition: opacity 200ms ease-out;

	&:hover {
		opacity: .6;
	}
`;

const LogoSloganLine = styled('span')`
	width: 100%;
	margin-bottom: 3px;
	height: 19px;

	${AnimatedInTextContent} {
		float: left;
	}
`;

const LogoSlogan = styled('span')`
	cursor: pointer;
	width: 100%;
	color: ${({ theme }) => theme.grey};
	font-family: ${({ theme }) => theme.sloganFontFamily};
	font-weight: ${({ theme }) => theme.sloganFontWeight};
	font-size: ${({ theme }) => theme.sloganFontSize};

	&,
	${LogoSloganLine} {
		display: inline-block;
	}
`;

const Logo = ({ theme }) => (
	<Link href="/">
		<LogoLink>
			<LogoImage src="/static/logo.svg" />
			<FormattedMessage id="site.slogan">
				{(msg) => (
					<LogoSlogan theme={theme}>
						{msg.split('\n').map((line, index) => (
							<LogoSloganLine key={line}>
								<AnimatedInText timeout={index * 100}>
									<span>{line}</span>
								</AnimatedInText>
							</LogoSloganLine>
						))}
					</LogoSlogan>
				)}
			</FormattedMessage>
		</LogoLink>
	</Link>
);

Logo.propTypes = {
	theme: PropTypes.shape({
		grey: PropTypes.string.isRequired,
	}).isRequired,
};

/* eslint-disable react/prefer-stateless-function */
export default withTheme(class extends Component {
	render() {
		return <Logo {...this.props} />;
	}
});
