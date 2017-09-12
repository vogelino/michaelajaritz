import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import styled from 'react-emotion';

const getScaleYByPlacement = ({ placement }) =>
	`scaleY(${placement === 'toTop' ? 1 : -1})`;

const getRotateByPlacement = ({ ready, placement }) => (
	!ready ?
		`rotate(${placement === 'toTop' ? '20deg' : '-20deg'})` :
		'rotate(0)'
);

const Container = styled('div')`
	display: inline-block;
	width: 223px;
	height: 129px;
	transform-origin: 0 100%;
	transform: ${getRotateByPlacement} ${getScaleYByPlacement};
	opacity: ${({ ready }) => (ready ? 1 : 0)};
	transition: transform 400ms cubic-bezier(0,1,.37,.98),
		opacity 400ms cubic-bezier(0,1,.37,.98);
`;

const parallelepipedPathClass = css`
	fill: red;
	transition: fill 400ms cubic-bezier(0,1,.37,.98);
`;

class Parallelepiped extends Component {
	constructor(props) {
		super(props);

		this.state = { ready: false };
	}
	componentDidMount() {
		const after = Math.random() * 1000;
		setTimeout(() => {
			this.setState({ ready: true });
		}, after);
	}
	render() {
		const { placement } = this.props;
		const { ready } = this.state;
		return (
			<Container
				placement={placement}
				ready={ready}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 223 129"
				>
					<path
						d="M149 129.03L223.49 0H74.5L0 129.03h149z"
						className={parallelepipedPathClass}
					/>
				</svg>
			</Container>
		);
	}
}

Parallelepiped.defaultProps = {
	placement: 'toTop',
};

Parallelepiped.propTypes = {
	placement: PropTypes.oneOf(['toTop', 'toBottom']),
};

export default Parallelepiped;

