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

const getHeightBySize = ({ size }) => size * 20;
const getWidthBySize = ({ size }) => size * 40;

const getPosition = ({ position, size }) => {
	const [x, y] = position;
	const xFullWidth = getWidthBySize({ size: x });
	const yFullHeight = getHeightBySize({ size: y });
	const xPos = xFullWidth - (xFullWidth / 3);
	const yPos = yFullHeight - getHeightBySize({ size });
	return `translate(${xPos}px, ${yPos}px)`;
};

const Container = styled('div')`
	display: inline-block;
	width: ${getWidthBySize}px;
	height: ${getHeightBySize}px;
	transform-origin: 0 100%;
	transform: ${getPosition} ${getRotateByPlacement} ${getScaleYByPlacement};
	opacity: ${({ ready }) => (ready ? 1 : 0)};
	transition: transform 400ms cubic-bezier(0,1,.37,.98),
		opacity 400ms cubic-bezier(0,1,.37,.98);
	position: absolute;
	top: 50%;
	left: 0;
`;

const Image = styled('div')`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	clip-path: url(#${({ clipPathId }) => clipPathId});
	background-image: url('${({ image }) => image}');
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center center;
	border: 0;
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
		const { timeout } = this.props;
		setTimeout(() => {
			this.setState({ ready: true });
		}, timeout);
	}

	render() {
		const { theme, placement, size, position, color, image } = this.props;
		const { ready } = this.state;
		const imageId = image && image.replace(/(\/|\.)/g, '');
		const height = getHeightBySize({ size });
		const width = getWidthBySize({ size });
		const thirdWidth = (width / 100) * 33.3337;
		const twoThirdWidth = (width / 100) * 66.6667;
		const path = [
			`M${thirdWidth}`,
			0,
			0,
			height,
			twoThirdWidth,
			height,
			width,
			0,
			thirdWidth,
			'0z',
		].join(' ');

		return (
			<Container
				placement={placement}
				position={position}
				size={size}
				ready={ready}
			>
				{image &&
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox={`0 0 ${width} ${height}`}
						version="1.1"
					>
						<defs>
							<clipPath id={imageId}>
								<path d={path} className={parallelepipedPathClass} />
							</clipPath>
						</defs>
					</svg>
				}
				{image &&
					<Image
						clipPathId={imageId}
						image={image}
						style={{
							transform: `scale(${placement === 'toBottom' ? -1 : 1})`,
						}}
					/>
				}
				{!image &&
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 85.04 42.52"
						version="1.1"
					>
						<polygon
							points="28.35 0 0 42.52 56.69 42.52 85.04 0 28.35 0"
							className={parallelepipedPathClass}
							fill={theme[color]}
						/>
					</svg>
				}
			</Container>
		);
	}
}

Parallelepiped.defaultProps = {
	placement: 'toTop',
	position: [0, 0],
	size: 6,
	color: 'purple',
	image: undefined,
	timeout: 10,
};

Parallelepiped.propTypes = {
	placement: PropTypes.oneOf(['toTop', 'toBottom']),
	position: PropTypes.arrayOf(PropTypes.number),
	size: PropTypes.number,
	theme: PropTypes.shape({}).isRequired,
	color: PropTypes.oneOf(['blue', 'orange', 'purple']),
	image: PropTypes.string,
	timeout: PropTypes.number,
};


export default withTheme(Parallelepiped);

