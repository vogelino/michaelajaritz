import { FC } from 'react'
import { ThemeType } from 'src/theme'
import styled from 'styled-components'
import AnimatedInText from '../AnimatedInText'

interface ParagraphWrapperType {
	theme: ThemeType
	children?: string | JSX.Element
}

const ParagraphWrapper = styled.p<ParagraphWrapperType>`
	font-family: ${({ theme }) => theme.paragraphFontFamily};
	font-size: ${({ theme }) => theme.paragraphFontSize};
	font-weight: ${({ theme }) => theme.paragraphFontWeight};
	letter-spacing: ${({ theme }) => theme.paragraphLetterSpacing};
	line-height: ${({ theme }) => theme.paragraphLineHeight};
	color: ${({ theme }) => theme.darkGrey};
	padding: 0 4px 20px 4px;
	margin: 0;
	hyphens: auto;

	@media screen and (max-width: 540px) {
		font-size: ${({ theme }) => theme.paragraphFontSizeMobile};
	}

	& a {
		color: ${({ theme }) => theme.blue};
		transition: color 200ms ease-out;

		&:hover {
			color: ${({ theme }) => theme.orange};
		}
	}

	& ul,
	& li {
		padding: 0;
		margin: 0 0 0 0;
		list-style: none;
	}
`

const Paragraph: FC<{
	timeout?: number,
	children?: string | JSX.Element
 }> = ({ children, timeout = 0 }) => (
	<AnimatedInText timeout={timeout}>
		{typeof children === 'string' ? (
			<ParagraphWrapper dangerouslySetInnerHTML={{ __html: children }} />
		) : (
			<ParagraphWrapper>{children}</ParagraphWrapper>
		)}
	</AnimatedInText>
)

export default Paragraph
