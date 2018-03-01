import React from 'react';
import styled from 'styled-components';
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

const Logo = () => (
	<Link href="/">
		<LogoLink>
			<LogoImage src="/static/logo.svg" />
			<FormattedMessage id="site.slogan">
				{(msg) => (
					<LogoSlogan>
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

export default Logo;
