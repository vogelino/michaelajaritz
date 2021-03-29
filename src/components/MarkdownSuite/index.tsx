import { FC, Component, ReactNode } from 'react'
import Markdown from 'react-markdown'
import Paragraph from '../Paragraph'
import BigTitle from '../BigTitle'
import Subtitle from '../Subtitle'

interface MarkdownSuiteType {
	timeout: number
	level: number
	source: string
}

class MarkdownSuite extends Component<MarkdownSuiteType> {
	timeout: MarkdownSuiteType['timeout']

	constructor(props: MarkdownSuiteType) {
		super(props)

		this.timeout = props.timeout
	}
	render(): ReactNode {
		const HeadingRenderer: FC<MarkdownSuiteType> = ({ children, level, ...rest }) => {
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

		const ParagraphRenderer: FC = ({ children, ...rest }) => {
			this.timeout += 100
			return (
				<Paragraph {...rest} timeout={this.timeout}>
					<span>{children}</span>
				</Paragraph>
			)
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

export default MarkdownSuite
