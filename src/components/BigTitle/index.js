import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { withTheme } from 'theming';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';

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
	margin-bottom: 10px;
	opacity: 0;
	transform: translateY(20px);
	transition: opacity 2000ms cubic-bezier(0,1,.37,.98), transform 400ms cubic-bezier(0,1,.37,.98);
`;

const BigTitleWrapper = styled('h1')`
	margin: ${({ nomargin }) => (nomargin ? 0 : 60)}px 0 0;

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
		const { children, theme, color, nomargin } = this.props;
		const { ready } = this.state;

		return (
			<BigTitleWrapper nomargin={nomargin} className={ready && 'ready'}>
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
	nomargin: false,
};

const messageType = PropTypes.oneOfType([
	PropTypes.instanceOf(FormattedMessage),
	PropTypes.instanceOf(FormattedHTMLMessage),
	PropTypes.element,
	PropTypes.string,
]).isRequired;

BigTitle.propTypes = {
	children: messageType,
	color: PropTypes.string,
	timeout: PropTypes.number,
	theme: PropTypes.shape({
		titleFontFamily: PropTypes.string.isRequired,
	}).isRequired,
	nomargin: PropTypes.bool,
};

export default withTheme(BigTitle);

