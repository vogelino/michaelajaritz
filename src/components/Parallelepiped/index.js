import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

const parallelepipedSvgClass = css`
	width: 223px;
	height: 129px;
	transform-origin: 0 100%;
	transform: scale(0) rotate(0);
	transition: transform 100ms ease-out;
	
	& path {
		fill: red;
	}

	&:hover {
		fill: blue;
	}
`;

const parallelepipedPathClass = css`
	fill: red;
	transition: fill 100ms ease-out;

	&:hover {
		fill: blue;
	}  
`;

const Parallelepiped = ({ placement }) => (
	<div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 223 129"
			placement={placement}
			className={parallelepipedSvgClass}
			width={79}
			height={45}
		>
			<path
				d="M149 129.03L223.49 0H74.5L0 129.03h149z"
				className={parallelepipedPathClass}
			/>
		</svg>
	</div>
);

Parallelepiped.defaultProps = {
	placement: 'toTop',
};

Parallelepiped.propTypes = {
	placement: PropTypes.oneOf(['toTop', 'toBottom']),
};

export default Parallelepiped;

