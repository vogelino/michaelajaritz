import { Disclosure } from '@headlessui/react'
import React from 'react'
import { ColorsType } from '../../theme/colors'
import styled from 'styled-components'
import Paragraph from '@components/Paragraph'
import { useClientIsReady } from '@utils/hooks/useClientIsReady'

interface AccordionItemType {
	title: string
	content: string
}

interface HAccordionPropsType {
	items: AccordionItemType[]
	color: keyof ColorsType
	startTimeout: number
}

const StyledDisclosureButton = styled(Disclosure.Button)`
	width: 100%;
	padding: 10px 0 10px 4px;
	border-top: solid 1px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	opacity: 0;
	transform: translateY(10px);
	text-align: left;
	border: none;
	background: none;
	font-family: ${({ theme }) => theme.accordionFontFamily};
	font-size: ${({ theme }) => theme.accordionFontSize};
	font-weight: ${({ theme }) => theme.accordionFontWeight};
	letter-spacing: ${({ theme }) => theme.accordionLetterSpacing};
	line-height: ${({ theme }) => theme.accordionLineHeight};
	color: ${({ theme }) => theme.darkGrey};
	position: relative;
	cursor: pointer;
	transition:
		opacity 2000ms cubic-bezier(0, 1, 0.37, 0.98),
		transform 400ms cubic-bezier(0, 1, 0.37, 0.98);

	&:last-child {
		border-bottom: solid 1px rgba(0, 0, 0, 0.1);
	}

	&.ready {
		opacity: 1;
		transform: translateY(0);
	}

	& > span {
		transition: color 200ms ease-out;
	}
	&:hover span {
		color: ${({ theme, color }) => theme[color]};
	}

	&:after {
		content: '+';
		position: absolute;
		top: 0;
		right: 0;
		color: ${({ theme }) => theme.grey};
		font-weight: 300;
	}

	&.open:after {
		content: '–';
	}
`
const DisclosurePanel = styled(Disclosure.Panel)<{
	open: boolean
}>`
	transition: max-height 200ms ease-in-out;
	will-change: max-height;
	overflow: hidden;
	max-height: ${({ open }) => (open ? '100vh' : '0')};
`

export function Accordion(props: HAccordionPropsType): JSX.Element {
	const { items, color, startTimeout } = props
	const clientIsReady = useClientIsReady()
	return (
		<>
			{items.map(({ title, content }, i) => (
				<Disclosure key={i} defaultOpen={false}>
					{({ open }) => (
						<>
							<StyledDisclosureButton
								className={[clientIsReady && 'ready', open && 'open'].filter(Boolean).join(' ')}
								color={color}
								style={{
									transitionDelay: `${i * 100 + startTimeout}ms, ${i * 100 + startTimeout}ms`,
								}}
							>
								<span>{title}</span>
							</StyledDisclosureButton>
							<DisclosurePanel open={open} static>
								<Paragraph timeout={0}>{content}</Paragraph>
							</DisclosurePanel>
						</>
					)}
				</Disclosure>
			))}
		</>
	)
}
