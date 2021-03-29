import { FC } from 'react'
import styled from 'styled-components'
import { useClientIsReady } from '../../utils/hooks/useClientIsReady'

interface AnimatedInTextType {
	timeout: number
}

interface AnimatedInSpanType extends AnimatedInTextType {
	clientIsReady: boolean
}

const AnimatedInSpan = styled.span<AnimatedInSpanType>`
	& > * {
		display: block;
		transform: translateY(${({ clientIsReady }) => (clientIsReady ? 0 : '30px')});
		opacity: ${({ clientIsReady }) => (clientIsReady ? 1 : 0)};
		transition-delay: ${({ timeout }) => timeout}ms, ${({ timeout }) => timeout}ms;
		transition-property: opacity, transform;
		transition-duration: 6000ms, 400ms;
		transition-timing-function: cubic-bezier(0, 1, 0.37, 0.98), cubic-bezier(0, 1, 0.37, 0.98);
	}
`

const AnimatedInText: FC<AnimatedInTextType> = ({ children, timeout }) => {
	const clientIsReady = useClientIsReady()

	return (
		<AnimatedInSpan timeout={timeout} clientIsReady={clientIsReady}>
			{typeof children === 'string' ? (
				<span dangerouslySetInnerHTML={{ __html: children }} />
			) : (
				children
			)}
		</AnimatedInSpan>
	)
}

export default AnimatedInText
