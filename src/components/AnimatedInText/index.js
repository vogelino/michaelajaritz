import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

export const AnimatedInTextContent = styled('span')`
	position: relative;
	display: inline-block;
	width: ${({ block }) => (block ? '100%' : 'auto')};

	& > * {
		white-space: ${({ block }) => !block && 'nowrap'};
		position: ${({ block }) => !block && 'absolute'};
		transform: translateY(30px);
		opacity: 0;
		transition: ${({ ready }) => ready && 'opacity 6000ms cubic-bezier(0,1,.37,.98), transform 400ms cubic-bezier(0,1,.37,.98)'};
	}

	&.ready > * {
		transform: translateY(0);
		opacity: 1;
	}
`;

class AnimatedInText extends Component {
	constructor(props) {
		super(props);

		this.state = { animateReady: true };
	}
	componentDidMount() {
		const { timeout } = this.props;
		this.animateReadyResetTimeout = setTimeout(() => {
			clearTimeout(this.animateReadyResetTimeout);
			this.setState({ animateReady: false });
		}, 10);
		this.animateReadyTiemout = setTimeout(() => {
			clearTimeout(this.animateReadyTimeout);
			this.setState({ animateReady: true });
		}, timeout);
	}
	componentWillUnmount() {
		clearTimeout(this.animateReadyResetTimeout);
		clearTimeout(this.animateReadyTimeout);
	}
	render() {
		const { children, block } = this.props;
		const { animateReady } = this.state;
		return (
			<AnimatedInTextContent
				className={animateReady && 'ready'}
				ready={animateReady}
				block={block}
			>
				{children}
			</AnimatedInTextContent>
		);
	}
}

AnimatedInText.defaultProps = {
	timeout: 15,
	block: false,
};

AnimatedInText.propTypes = {
	children: PropTypes.element.isRequired,
	timeout: PropTypes.number.isRequired,
	block: PropTypes.bool,
};

export default AnimatedInText;

