import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../theme';
import { useClientIsReady } from '../../utils/hooks/useClientIsReady';

const getTranslateYByPlacement = (placement) => (
	placement === 'toTop' ? '' : 'translateY(100%)'
);

const getRotateByPlacement = (placement) => (
	`rotate(${placement === 'toTop' ? '20deg' : '-20deg'})`
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

const Container = styled.div`
	display: inline-block;
	transform-origin: 0 100%;
	transition-property: transform, opacity;
	transition-duration: 800ms, 1000ms;
	transition-timing-function: cubic-bezier(0,1,.37,.98), cubic-bezier(0,1,.37,.98);
	position: absolute;
	top: 50%;
	left: 0;
`;

const Image = styled.image`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${({ color }) => color || 'unset'};
	border: 0;
`;

const ParallelepipedPath = styled.path`
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

const Parallelepiped = ({
	timeout,
	link,
	placement,
	size,
	position,
	color,
	image,
	className,
}) => {
	const isClientReady = useClientIsReady();
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
			xlinkHref={image}
			width={width}
			height={height}
			style={{ clipPath: `url(#${clipPathId})` }}
		/>
	) : (
		<ParallelepipedPath
			d={placement === 'toBottom' ? pathToBottom : pathToTop}
			fill={theme[color]}
		/>
	);

	return (
		<Container
			className={`parallelepiped parallelepiped-${placement} ${className}`}
			style={{
				transform: `${getPosition({ position, size })} ${!isClientReady ? getRotateByPlacement(placement) : 'rotate(0deg)'} ${getTranslateYByPlacement(placement)}`,
				transitionDelay: `${timeout + 300}ms, ${timeout + 300}ms`,
				opacity: (isClientReady ? 1 : 0),
				width: `${width}px`,
				height: `${height}px`,
			}}
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
					<ExternalLink href={link} target="_blank" rel="noopener noreferrer">
						{content}
					</ExternalLink>
				) : content}
			</svg>
		</Container>
	);
};

Parallelepiped.defaultProps = {
	placement: 'toTop',
	position: [0, 0],
	size: 6,
	color: 'purple',
	image: undefined,
	timeout: 10,
	link: undefined,
	className: '',
};

Parallelepiped.propTypes = {
	placement: PropTypes.oneOf(['toTop', 'toBottom']),
	position: PropTypes.arrayOf(PropTypes.number),
	size: PropTypes.number,
	color: PropTypes.oneOf(['blue', 'orange', 'purple', 'white']),
	image: PropTypes.string,
	className: PropTypes.string,
	timeout: PropTypes.number,
	link: PropTypes.string,
};

export default Parallelepiped;
