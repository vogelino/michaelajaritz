import { connect } from 'react-redux';
import styled from 'styled-components';

const AnimatedInText = styled.span`
	position: relative;
	display: inline-block;
	width: ${({ block }) => (block ? '100%' : 'auto')};

	& > * {
		white-space: ${({ block }) => !block && 'nowrap'};
		position: ${({ block }) => !block && 'absolute'};
		transform: translateY(${({ clientSideReady }) => (clientSideReady ? 0 : '30px')});
		opacity: ${({ clientSideReady }) => (clientSideReady ? 1 : 0)};
		transition: opacity 6000ms cubic-bezier(0,1,.37,.98), transform 400ms cubic-bezier(0,1,.37,.98);
		transition-delay: ${({ timeout }) => timeout}ms, ${({ timeout }) => timeout}ms;
	}
`;

const mapStateToProps = ({ ui: { clientSideReady } }) => ({ clientSideReady });

export default connect(mapStateToProps)(AnimatedInText);

