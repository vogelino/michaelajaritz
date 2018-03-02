import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
	Accordion as ASAccordion,
	AccordionItem as ASAccordionItem,
} from 'react-sanfona';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Paragraph from '../Paragraph';

const Accordion = styled(ASAccordion)`
	margin: 0 0 30px 0;
	padding: 0 3px;
`;

const AccordionItem = styled(ASAccordionItem)`
	padding: 10px 0;
	border-top: solid 1px rgba(0,0,0,.1);
	overflow: hidden;
	opacity: 0;
	transform: translateY(10px);
	transition: opacity 2000ms cubic-bezier(0,1,.37,.98), transform 400ms cubic-bezier(0,1,.37,.98);

	&:last-child {
		border-bottom: solid 1px rgba(0,0,0,.1);
	}

	&.ready {
		opacity: 1;
		transform: translateY(0);
	}

	& .react-sanfona-item-title {
		font-family: ${({ theme }) => theme.accordionFontFamily};
		font-size: ${({ theme }) => theme.accordionFontSize};
		font-weight: ${({ theme }) => theme.accordionFontWeight};
		letter-spacing: ${({ theme }) => theme.accordionLetterSpacing};
		line-height: ${({ theme }) => theme.accordionLineHeight};
		color: ${({ theme }) => theme.darkGrey};
		transition: color 200ms ease-out;
		position: relative;

		&:hover {
			color: ${({ theme, color }) => theme[color]}
		}
		
		&:after {
			content: '+';
			position: absolute;
			top: 0;
			right: 0;
			color: ${({ theme }) => theme.grey};
			font-weight: 300;
		}
	}

	&.react-sanfona-item-expanded .react-sanfona-item-title:after {
		content: '–';
	}
`;

class AccordionWrapper extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: props.items.map((item) => ({
				...item,
				ready: false,
			})),
		};
	}

	componentDidMount() {
		const { startTimeout } = this.props;
		const { items } = this.state;
		const animationDuration = 100;
		items.forEach((item, index) => {
			const timeout = (animationDuration * index) + startTimeout;
			setTimeout(() => this.setState({
				items: items.map((innerItem, innerIndex) => ({
					...innerItem,
					ready: innerIndex <= index,
				})),
			}), timeout);
		});
	}

	render() {
		const { items } = this.state;
		const { color } = this.props;
		return (
			<Accordion activeItems={[]}>
				{items.map(({ title, content, ready }) => (
					<AccordionItem
						key={title}
						title={title}
						className={ready && 'ready'}
						color={color}
					>
						<Paragraph timeout={0}>{content}</Paragraph>
					</AccordionItem>
				))}
			</Accordion>
		);
	}
}

AccordionWrapper.defaultProps = {
	items: [],
	startTimeout: 10,
	color: 'blue',
};

const messageType = PropTypes.oneOfType([
	PropTypes.instanceOf(FormattedMessage),
	PropTypes.instanceOf(FormattedHTMLMessage),
	PropTypes.element,
	PropTypes.string,
]).isRequired;

AccordionWrapper.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		title: messageType,
		content: messageType,
	})),
	startTimeout: PropTypes.number,
	color: PropTypes.oneOf(['blue', 'orange', 'purple']),
};

export default AccordionWrapper;

