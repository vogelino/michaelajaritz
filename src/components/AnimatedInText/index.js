import { connect } from 'react-redux';
import styled from 'styled-components';

const AnimatedInTextDelayClass = styled.span`
	& > * {
		transition-delay: ${({ timeout }) => timeout}ms, ${({ timeout }) => timeout}ms;
	}
`;

const AnimatedInText = styled(AnimatedInTextDelayClass)`
	& > * {
		display: block;
		transform: translateY(${({ clientSideReady }) => (clientSideReady ? 0 : '30px')});
		opacity: ${({ clientSideReady }) => (clientSideReady ? 1 : 0)};
		transition-property: opacity, transform;
		transition-duration: 6000ms, 400ms;
		transition-timing-function: cubic-bezier(0,1,.37,.98), cubic-bezier(0,1,.37,.98);
	}
`;

const mapStateToProps = ({ ui: { clientSideReady } }) => ({ clientSideReady });

export default connect(mapStateToProps)(AnimatedInText);

