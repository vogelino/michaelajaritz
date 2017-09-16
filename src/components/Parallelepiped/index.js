import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';
import styled from 'react-emotion';
import { withTheme } from 'theming';

const getScaleYByPlacement = ({ placement }) =>
	`scaleY(${placement === 'toTop' ? 1 : -1})`;

const getRotateByPlacement = ({ ready, placement }) => (
	!ready ?
		`rotate(${placement === 'toTop' ? '20deg' : '-20deg'})` :
		'rotate(0)'
);

const Container = styled('div')`
	display: inline-block;
	width: 240px;
	height: 120px;
	transform-origin: 0 100%;
	transform: ${getRotateByPlacement} ${getScaleYByPlacement};
	opacity: ${({ ready }) => (ready ? 1 : 0)};
	transition: transform 400ms cubic-bezier(0,1,.37,.98),
		opacity 400ms cubic-bezier(0,1,.37,.98);
`;

const parallelepipedPathClass = css`
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
		const { theme, placement } = this.props;
		const { ready } = this.state;
		return (
			<Container
				placement={placement}
				ready={ready}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 85.04 42.52"
				>
					<polygon
						points="28.35 0 0 42.52 56.69 42.52 85.04 0 28.35 0"
						className={parallelepipedPathClass}
						css={`fill: ${theme.primary};`}
					/>
				</svg>
			</Container>
		);
	}
}

Parallelepiped.defaultProps = {
	placement: 'toTop',
	theme: {
		primary: 'blue',
	},
};

Parallelepiped.propTypes = {
	placement: PropTypes.oneOf(['toTop', 'toBottom']),
	theme: PropTypes.shape({
		primary: PropTypes.string.isRequired,
	}),
};


export default withTheme(Parallelepiped);

