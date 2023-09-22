import { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import AnimatedInText from '../AnimatedInText'
import SocialIconList from '../SocialIconList'
import { getText } from '../../texts/getText'

const FooterWrapper = styled.div``

const FooterLink = styled(Link)`
	font-size: ${({ theme }) => theme.footerLinkFontSize};
	font-weight: ${({ theme }) => theme.footerLinkFontWeight};
	font-family: ${({ theme }) => theme.footerLinkFontFamily};
	color: ${({ theme }) => theme.grey};
	transition: color 150ms ease-out;
	display: block;
	margin: 10px 0 0 0;
	cursor: pointer;
	width: 100%;

	&:hover {
		color: ${({ theme }) => theme.darkGrey};
	}
`

const Footer: FC = () => (
	<FooterWrapper>
		<SocialIconList startTimeout={1000} />
			<FooterLink href="/impressum" title={`Michaela Jaritz | ${getText('getTextpages.impressum.title')}`}>
				<AnimatedInText timeout={1300}>{getText('pages.impressum.title')}</AnimatedInText>
			</FooterLink>
	</FooterWrapper>
)

export default Footer
