import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import withTheme from '../../hocs/withTheme';
import AnimatedInText, { AnimatedInTextContent } from '../AnimatedInText';
import SocialIconList from '../SocialIconList';

const FooterWrapper = styled('div')`
	width: 100%;

	${AnimatedInTextContent} > * {
		position: inherit;
		text-decoration: underline;
	}
`;

const FooterLink = withTheme(styled('a')`
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
`);


const Footer = () => (
	<FooterWrapper>
		<SocialIconList startTimeout={1000} />
		<Link href="/legal">
			<FooterLink>
				<AnimatedInText timeout={1300}>
					<FormattedMessage id="pages.legal.title" />
				</AnimatedInText>
			</FooterLink>
		</Link>
	</FooterWrapper>
);

export default Footer;

