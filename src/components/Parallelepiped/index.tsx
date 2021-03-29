import { FC } from 'react'
import styled from 'styled-components'
import theme from '../../theme'
import { ColorsType } from '../../theme/colors'
import { useClientIsReady } from '../../utils/hooks/useClientIsReady'

type PlacementType = 'toTop' | 'toBottom'
type PositionType = [x: number, y: number]

interface ParallelepipedType {
	timeout?: number
	link?: string
	placement?: PlacementType
	position?: PositionType
	size?: number
	color?: keyof ColorsType
	image?: string
	className?: string
}

const getTranslateYByPlacement = (placement: PlacementType): string =>
	placement === 'toTop' ? '' : 'translateY(100%)'

const getRotateByPlacement = (placement: PlacementType): string =>
	`rotate(${placement === 'toTop' ? '20deg' : '-20deg'})`

const getHeightBySize = ({ size }: { size: number }): number => size * 20
const getWidthBySize = ({ size }: { size: number }): number => size * 35

const getPosition = ({ position, size }: { position: PositionType; size: number }): string => {
	const [x, y] = position
	const xFullWidth = getWidthBySize({ size: x })
	const yFullHeight = getHeightBySize({ size: y })
	const xPos = xFullWidth - xFullWidth / 3
	const yPos = yFullHeight - getHeightBySize({ size })
	return `translate(${xPos}px, ${yPos}px)`
}

const Container = styled.div`
	display: inline-block;
	transform-origin: 0 100%;
	transition-property: transform, opacity;
	transition-duration: 800ms, 1000ms;
	transition-timing-function: cubic-bezier(0, 1, 0.37, 0.98), cubic-bezier(0, 1, 0.37, 0.98);
	position: absolute;
	top: 50%;
	left: 0;
`

const Image = styled.image`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${({ color }) => color || 'unset'};
	border: 0;
`

const ParallelepipedPath = styled.path`
	transition: fill 400ms cubic-bezier(0, 1, 0.37, 0.98);
`

const ExternalLink = styled.a`
	cursor: pointer;
	opacity: 1;
	transition: opacity 800ms cubic-bezier(0, 1, 0.37, 0.98);

	&:hover {
		opacity: 0.8;
	}
`

const Parallelepiped: FC<ParallelepipedType> = ({
	placement = 'toTop',
	position = [0, 0],
	size = 6,
	color = 'purple',
	image = undefined,
	timeout = 10,
	link = undefined,
	className = '',
}) => {
	const isClientReady = useClientIsReady()
	const clipPathId = `${placement}-${color}-${position.join('-')}-${size}`
	const height = getHeightBySize({ size })
	const width = getWidthBySize({ size })
	const thirdWidth = (width / 100) * 33.3337
	const twoThirdWidth = (width / 100) * 66.6667
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
	].join(' ')
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
	].join(' ')
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
	)

	return (
		<Container
			className={`parallelepiped parallelepiped-${placement} ${className}`}
			style={{
				transform: `${getPosition({ position, size })} ${
					!isClientReady ? getRotateByPlacement(placement) : 'rotate(0deg)'
				} ${getTranslateYByPlacement(placement)}`,
				transitionDelay: `${timeout + 300}ms, ${timeout + 300}ms`,
				opacity: isClientReady ? 1 : 0,
				width: `${width}px`,
				height: `${height}px`,
			}}
		>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`} version="1.1">
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
				) : (
					content
				)}
			</svg>
		</Container>
	)
}

export default Parallelepiped
