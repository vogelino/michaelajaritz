import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const getTranslateYByPlacement = ({ placement }) => (
	placement === 'toTop' ? '' : 'translateY(100%)'
);

const getRotateByPlacement = ({ ready, placement }) => (
	!ready ?
		`rotate(${placement === 'toTop' ? '20deg' : '-20deg'})` :
		'rotate(0)'
);

const getHeightBySize = ({ size }) => size * 20;
const getWidthBySize = ({ size }) => size * 35;

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
	transform: ${getPosition} ${getRotateByPlacement} ${getTranslateYByPlacement};
	opacity: ${({ ready }) => (ready ? 1 : 0)};
	transition: transform 400ms cubic-bezier(0,1,.37,.98),
		opacity 400ms cubic-bezier(0,1,.37,.98);
	position: absolute;
	top: 50%;
	left: 0;
`;

const Image = styled('image')`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	clip-path: url(#${({ clipPathId }) => clipPathId});
	${({ color }) => color && `background-color: ${color};`}
	border: 0;
`;

const ParallelepipedPath = styled('path')`
	transition: fill 400ms cubic-bezier(0,1,.37,.98);
`;

const ExternalLink = styled.a`
	cursor: pointer;
	opacity: 1;
	transition: opacity 800ms cubic-bezier(0,1,.37,.98);
	
	&:hover {
		opacity: .8;
	}
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
		const { link, theme, placement, size, position, color, image } = this.props;
		const { ready } = this.state;
		const clipPathId = `${placement}-${color}-${position.join('-')}-${size}`;
		const height = getHeightBySize({ size });
		const width = getWidthBySize({ size });
		const thirdWidth = (width / 100) * 33.3337;
		const twoThirdWidth = (width / 100) * 66.6667;
		const pathToTop = [
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
		const pathToBottom = [
			'M0',
			'0',
			thirdWidth,
			height,
			width,
			height,
			twoThirdWidth,
			0,
			thirdWidth,
			'0z',
		].join(' ');
		const content = image ? (
			<Image
				clipPathId={clipPathId}
				xlinkHref={image}
				width={width}
				height={height}
			/>
		) : (
			<ParallelepipedPath
				d={placement === 'toBottom' ? pathToBottom : pathToTop}
				fill={theme[color]}
			/>
		);

		return (
			<Container
				placement={placement}
				position={position}
				size={size}
				ready={ready}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox={`0 0 ${width} ${height}`}
					version="1.1"
				>
					{image && (
						<defs>
							<clipPath id={clipPathId}>
								<ParallelepipedPath d={placement === 'toBottom' ? pathToBottom : pathToTop} />
							</clipPath>
						</defs>
					)}
					{link ? (
						<ExternalLink href={link} target="_blank" rel="noopener nofollower">
							{content}
						</ExternalLink>
					) : content}
				</svg>
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
	link: undefined,
};

Parallelepiped.propTypes = {
	placement: PropTypes.oneOf(['toTop', 'toBottom']),
	position: PropTypes.arrayOf(PropTypes.number),
	size: PropTypes.number,
	theme: PropTypes.shape({}).isRequired,
	color: PropTypes.oneOf(['blue', 'orange', 'purple']),
	image: PropTypes.string,
	timeout: PropTypes.number,
	link: PropTypes.string,
};


export default withTheme(Parallelepiped);
