import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import { withTheme } from 'theming';
import AnimatedInText, { AnimatedInTextContent } from '../AnimatedInText';

const FooterWrapper = styled('div')`
	width: 100%;

	${AnimatedInTextContent} > * {
		position: inherit;
		text-decoration: underline;
	}
`;

const FooterIcon = styled('a')`
	width: 24px;
	height: 24px;
	margin-right: 16px;
	background: green;
	display: inline-block;
	cursor: pointer;
`;

const FooterLink = styled('a')`
	font-size: ${({ theme }) => theme.footerLinkFontSize};
	font-weight: ${({ theme }) => theme.footerLinkFontWeight};
	font-family: ${({ theme }) => theme.footerLinkFontFamily};
	color: ${({ theme }) => theme.grey};
	transition: color 150ms ease-out;
	display: inline-block;
	margin-right: 20px;
	margin-top: 10px;
	cursor: pointer;
	width: 70px;

	&:hover {
		color: ${({ theme }) => theme.darkGrey}
	}
`;


const Footer = ({ theme }) => (
	<FooterWrapper>
		<div>
			<Link href="https://facebook.com">
				<AnimatedInText timeout={1000}>
					<FooterIcon theme={theme} />
				</AnimatedInText>
			</Link>
			<Link href="https://facebook.com">
				<AnimatedInText timeout={1100}>
					<FooterIcon theme={theme} />
				</AnimatedInText>
			</Link>
			<Link href="https://facebook.com">
				<AnimatedInText timeout={1200}>
					<FooterIcon theme={theme} />
				</AnimatedInText>
			</Link>
		</div>
		<Link href="/imprint">
			<FooterLink theme={theme}>
				<AnimatedInText timeout={1300}>
					<FormattedMessage id="legal.imprint.title" />
				</AnimatedInText>
			</FooterLink>
		</Link>
		<Link href="/privacy">
			<FooterLink theme={theme}>
				<AnimatedInText timeout={1400}>
					<FormattedMessage id="legal.privacy.title" />
				</AnimatedInText>
			</FooterLink>
		</Link>
	</FooterWrapper>
);

Footer.propTypes = {
	theme: PropTypes.shape({
		footerLinkFontSize: PropTypes.string.isRequired,
		footerLinkFontWeight: PropTypes.number.isRequired,
		footerLinkFontFontFamily: PropTypes.string.isRequired,
	}).isRequired,
};

/* eslint-disable react/prefer-stateless-function */
export default withTheme(class extends Component {
	render() {
		return <Footer {...this.props} />;
	}
});

