import { FC } from 'react'
import styled from 'styled-components'
import AnimatedInText from '../AnimatedInText'
import { ThemeType } from 'src/theme'

interface AnimatedSubtitleType {
	marginTop: number
	marginBottom: number
	timeout: number
	children: string | undefined | JSX.Element | JSX.Element[] | null
}

interface SubtitleType extends Omit<AnimatedSubtitleType, 'timeout'> {
	theme: ThemeType
}

const Subtitle = styled.h2<SubtitleType>`
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
`

const AnimatedSubtitle: FC<Partial<AnimatedSubtitleType>> = ({
	children,
	marginTop = 40,
	marginBottom = 20,
	timeout = 10,
}) => (
	<Subtitle marginTop={marginTop} marginBottom={marginBottom}>
		<AnimatedInText timeout={timeout}>{children}</AnimatedInText>
	</Subtitle>
)

export default AnimatedSubtitle
