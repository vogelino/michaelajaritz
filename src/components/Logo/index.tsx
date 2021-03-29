import { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import AnimatedInText from '../AnimatedInText'
import { getText } from '../../texts/getText'
import { ThemeType } from 'src/theme'

const LogoImage = styled.img`
	width: 100%;
	margin-bottom: 10px;
	cursor: pointer;
`

const LogoLink = styled.a`
	width: 100%;
	opacity: 1;
	transition: opacity 200ms ease-out;

	&:hover {
		opacity: 0.6;
	}
`

const LogoSloganLine = styled.span`
	width: 100%;
	margin-bottom: 3px;
	height: 19px;
	display: inline-block;
`

const LogoSlogan = styled.span<{ theme: ThemeType }>`
	cursor: pointer;
	width: 100%;
	color: ${({ theme }) => theme.grey};
	font-family: ${({ theme }) => theme.sloganFontFamily};
	font-weight: ${({ theme }) => theme.sloganFontWeight};
	font-size: ${({ theme }) => theme.sloganFontSize};
	display: inline-block;
`

const Logo: FC = () => (
	<Link href="/">
		<LogoLink title="Hauptseite | Michaela Jaritz">
			<AnimatedInText timeout={0}>
				<LogoImage src="/logo.svg" alt="Site Logo | Michaela Jaritz" />
			</AnimatedInText>
			<LogoSlogan>
				<LogoSloganLine>
					<AnimatedInText timeout={100}>{getText('site.slogan.line1')}</AnimatedInText>
				</LogoSloganLine>
				<LogoSloganLine>
					<AnimatedInText timeout={200}>{getText('site.slogan.line2')}</AnimatedInText>
				</LogoSloganLine>
				<LogoSloganLine>
					<AnimatedInText timeout={300}>{getText('site.slogan.line3')}</AnimatedInText>
				</LogoSloganLine>
			</LogoSlogan>
		</LogoLink>
	</Link>
)

export default Logo
