import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { withTheme } from 'theming';

const BigTitleLineContent = styled('span')`
	display: inline-block;
	position: relative;
	color: ${({ color, theme }) => theme[color]};

	&:after {
		content: '';
		height: 25px;
		width: 100%;
		width: calc(100% - 35px);
		background: ${({ color, theme }) => theme[`${color}Light`]};
		position: absolute;
		z-index: -1;
		bottom: -5px;
		left: 4px;
		display: block;
		transition: transform 600ms cubic-bezier(.12,1.45,.28,.97);
		transform: scaleX(0);
		transform-origin: 0 50%;
		transition-delay: 400ms;
	}
`;

const BigTitleLine = styled('span')`
	font-family: ${({ theme }) => theme.titleFontFamily};
	font-size: ${({ theme }) => theme.titleFontSize};
	font-weight: ${({ theme }) => theme.titleFontWeight};
	letter-spacing: ${({ theme }) => theme.titleLetterSpacing};

	display: block;
	margin-bottom: 20px;
	opacity: 0;
	transform: translateY(20px);
	transition: opacity 2000ms cubic-bezier(0,1,.37,.98), transform 400ms cubic-bezier(0,1,.37,.98);
`;

const BigTitleWrapper = styled('h1')`
	&.ready span {
		opacity: 1;
		transform: translateY(0);
	}

	&.ready span > span:after {
		transform: scaleX(1);
	}
`;

class BigTitle extends Component {
	constructor(props) {
		super(props);

		this.state = { ready: false };
	}

	componentDidMount() {
		const { timeout } = this.props;
		setTimeout(() => this.setState({ ready: true }), timeout);
	}

	render() {
		const { children, theme, color } = this.props;
		const { ready } = this.state;

		return (
			<BigTitleWrapper className={ready && 'ready'}>
				<BigTitleLine theme={theme}>
					<BigTitleLineContent color={color} theme={theme}>
						{children}
					</BigTitleLineContent>
				</BigTitleLine>
			</BigTitleWrapper>
		);
	}
}

BigTitle.defaultProps = {
	timeout: 10,
	color: 'blue',
};

BigTitle.propTypes = {
	children: PropTypes.string.isRequired,
	color: PropTypes.string,
	timeout: PropTypes.number,
	theme: PropTypes.shape({
		titleFontFamily: PropTypes.string.isRequired,
	}).isRequired,
};

export default withTheme(BigTitle);

