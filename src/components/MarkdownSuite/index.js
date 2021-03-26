import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'
import Paragraph from '../Paragraph'
import BigTitle from '../BigTitle'
import Subtitle from '../Subtitle'

class MarkdownSuite extends Component {
	constructor(props) {
		super(props)

		this.timeout = props.timeout
	}
	render() {
		const HeadingRenderer = ({ children, level, ...rest }) => {
			this.timeout += 100

			if (level === 1) {
				return (
					<BigTitle {...rest} timeout={this.timeout}>
						<span>{children}</span>
					</BigTitle>
				)
			}
			return (
				<Subtitle {...rest} timeout={this.timeout}>
					<span>{children}</span>
				</Subtitle>
			)
		}

		HeadingRenderer.propTypes = {
			level: PropTypes.number.isRequired,
			children: PropTypes.any.isRequired,
		}

		const ParagraphRenderer = ({ children, ...rest }) => {
			this.timeout += 100
			return (
				<Paragraph {...rest} timeout={this.timeout}>
					<span>{children}</span>
				</Paragraph>
			)
		}

		ParagraphRenderer.propTypes = {
			children: PropTypes.any.isRequired,
		}

		return (
			<Markdown
				source={this.props.source}
				skipHtml={false}
				renderers={{
					paragraph: ParagraphRenderer,
					heading: HeadingRenderer,
					break: () => <br />,
				}}
			/>
		)
	}
}

MarkdownSuite.defaultProps = {
	timeout: 0,
}

MarkdownSuite.propTypes = {
	source: Markdown.propTypes.source,
	timeout: PropTypes.number,
}

export default MarkdownSuite
