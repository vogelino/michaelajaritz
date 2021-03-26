import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useClientIsReady } from '../../utils/hooks/useClientIsReady'

const AnimatedInSpan = styled.span`
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

const AnimatedInText = ({ children, ...props }) => {
	const clientIsReady = useClientIsReady()

	return (
		<AnimatedInSpan {...props} clientIsReady={clientIsReady}>
			{typeof children === 'string' ? (
				<span dangerouslySetInnerHTML={{ __html: children }} />
			) : (
				children
			)}
		</AnimatedInSpan>
	)
}

AnimatedInText.propTypes = {
	children: PropTypes.element.isRequired,
}

export default AnimatedInText
