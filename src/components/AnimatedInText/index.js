import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const AnimatedInTextContent = styled('span')`
	position: relative;
	display: inline-block;
	width: ${({ block }) => (block ? '100%' : 'auto')};

	& > * {
		white-space: ${({ block }) => !block && 'nowrap'};
		position: ${({ block }) => !block && 'absolute'};
		transform: translateY(30px);
		opacity: 0;
		transition: opacity 6000ms cubic-bezier(0,1,.37,.98), transform 400ms cubic-bezier(0,1,.37,.98);
	}

	&.ready > * {
		transform: translateY(0);
		opacity: 1;
	}
`;

class AnimatedInText extends Component {
	constructor(props) {
		super(props);

		this.state = { animateReady: false };
	}
	componentDidMount() {
		const { timeout } = this.props;
		setTimeout(() => this.setState({ animateReady: true }), timeout);
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

