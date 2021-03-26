import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useClientIsReady } from '../../utils/hooks/useClientIsReady';

const BigTitleLineContent = styled.span`
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
		transform: scaleX(0);
		transform-origin: 0 50%;
		transition-delay: ${({ timeout }) => timeout + 400}ms;

		@media screen and (max-width: 540px) {
			width: 80%;
			width: calc(100% - 24px);
			height: 16px;
			bottom: -2px;
		}
	}
`;

const BigTitleLine = styled.span`
	font-family: ${({ theme }) => theme.titleFontFamily};
	font-size: ${({ theme }) => theme.titleFontSize};
	font-weight: ${({ theme }) => theme.titleFontWeight};
	letter-spacing: ${({ theme }) => theme.titleLetterSpacing};

	display: block;
	opacity: 0;
	transform: translateY(20px);

	@media screen and (max-width: 540px) {
		font-size: ${({ theme }) => theme.titleFontSizeMobile};
	}
`;

const BigTitleWrapper = styled.h1`
	padding-top: ${({ marginTop }) => marginTop}px;
	padding-bottom: ${({ marginBottom }) => marginBottom}px;
	margin: 0;

	@media screen and (max-width: 540px) {
		padding-top: ${({ marginTop }) => marginTop / 2}px;
		padding-bottom: ${({ marginBottom }) => marginBottom / 2}px;
	}

	&.ready span {
		opacity: 1;
		transform: translateY(0);
		transition: opacity 2000ms cubic-bezier(0,1,.37,.98), transform 400ms cubic-bezier(0,1,.37,.98);
		transition-delay: ${({ timeout }) => timeout + 100}ms, ${({ timeout }) => timeout + 100}ms;
	}

	&.ready span > span:after {
		transform: scaleX(1);
		transition: transform 600ms cubic-bezier(.12,1.45,.28,.97) 300ms;
		transition-delay: ${({ timeout }) => timeout + 300}ms;
	}
`;

const BigTitle = (props) => {
	const clientIsReady = useClientIsReady();
	return (
		<BigTitleWrapper
			className={clientIsReady && 'ready'}
			timeout={props.timeout}
			marginTop={props.marginTop}
			marginBottom={props.marginBottom}
		>
			<BigTitleLine>
				<BigTitleLineContent color={props.color}>
					{props.children}
				</BigTitleLineContent>
			</BigTitleLine>
		</BigTitleWrapper>
	);
};

BigTitle.defaultProps = {
	timeout: 15,
	color: 'blue',
	marginTop: 40,
	marginBottom: 30,
};

const messageType = PropTypes.oneOfType([
	PropTypes.element,
	PropTypes.string,
]).isRequired;

BigTitle.propTypes = {
	children: messageType,
	color: PropTypes.string,
	timeout: PropTypes.number,
	marginTop: PropTypes.number,
	marginBottom: PropTypes.number,
};

export default BigTitle;
