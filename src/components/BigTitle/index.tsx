import { FC } from 'react'
import styled from 'styled-components'
import { useClientIsReady } from '../../utils/hooks/useClientIsReady'
import { ColorsType } from 'src/theme/colors'
import { ThemeType } from 'src/theme'

interface BigTitleType {
	color?: keyof ColorsType
	timeout?: number
	marginTop?: number
	marginBottom?: number
	children: undefined | string | null | JSX.Element | JSX.Element[]
}

interface BigTitleLineContentType {
	theme: ThemeType
	color: keyof ColorsType
	timeout: number
}

const BigTitleLineContent = styled.span<BigTitleLineContentType>`
	display: inline-block;
	position: relative;
	color: ${({ color, theme }) => theme[color]};

	&:after {
		content: '';
		height: 25px;
		width: 100%;
		width: calc(100% - 35px);
		background: ${({ color, theme }) => theme[`${color}Light`]};
		position: absolute;
		z-index: -1;
		bottom: -5px;
		left: 4px;
		display: block;
		transform: scaleX(0);
		transform-origin: 0 50%;
		transition-delay: ${({ timeout }) => timeout + 400}ms;

		@media screen and (max-width: 540px) {
			width: 80%;
			width: calc(100% - 24px);
			height: 16px;
			bottom: -2px;
		}
	}
`

const BigTitleLine = styled.span`
	font-family: ${({ theme }) => theme.titleFontFamily};
	font-size: ${({ theme }) => theme.titleFontSize};
	font-weight: ${({ theme }) => theme.titleFontWeight};
	letter-spacing: ${({ theme }) => theme.titleLetterSpacing};

	display: block;
	opacity: 0;
	transform: translateY(20px);

	@media screen and (max-width: 540px) {
		font-size: ${({ theme }) => theme.titleFontSizeMobile};
	}
`

interface BigTitleWrapperType {
	marginTop: number
	marginBottom: number
	timeout: number
}

const BigTitleWrapper = styled.h1<BigTitleWrapperType>`
	padding-top: ${({ marginTop }) => marginTop}px;
	padding-bottom: ${({ marginBottom }) => marginBottom}px;
	margin: 0;

	@media screen and (max-width: 540px) {
		padding-top: ${({ marginTop }) => marginTop / 2}px;
		padding-bottom: ${({ marginBottom }) => marginBottom / 2}px;
	}

	&.ready span {
		opacity: 1;
		transform: translateY(0);
		transition:
			opacity 2000ms cubic-bezier(0, 1, 0.37, 0.98),
			transform 400ms cubic-bezier(0, 1, 0.37, 0.98);
		transition-delay: ${({ timeout }) => timeout + 100}ms, ${({ timeout }) => timeout + 100}ms;
	}

	&.ready span > span:after {
		transform: scaleX(1);
		transition: transform 600ms cubic-bezier(0.12, 1.45, 0.28, 0.97) 300ms;
		transition-delay: ${({ timeout }) => timeout + 300}ms;
	}
`

const BigTitle: FC<BigTitleType> = ({
	color = 'blue' as const,
	timeout = 15,
	marginTop = 40,
	marginBottom = 30,
	children,
}) => {
	const clientIsReady = useClientIsReady()
	return (
		<BigTitleWrapper
			className={(clientIsReady && 'ready') || ''}
			timeout={timeout}
			marginTop={marginTop}
			marginBottom={marginBottom}
		>
			<BigTitleLine>
				<BigTitleLineContent
					timeout={timeout}
					color={color}
					dangerouslySetInnerHTML={
						typeof children === 'string' ? { __html: children || '' } : undefined
					}
				>
					{typeof children === 'string' ? null : children}
				</BigTitleLineContent>
			</BigTitleLine>
		</BigTitleWrapper>
	)
}

export default BigTitle
