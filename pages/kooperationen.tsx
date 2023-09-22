import React, { FC } from 'react'
import Page from '../src/hocs/Page'
import BigTitle from '../src/components/BigTitle'
import Paragraph from '../src/components/Paragraph'
import MobilePicture from '../src/components/MobilePicture'
import { getText } from '../src/texts/getText'

const pageName = 'kooperationen'
const CooperationsPage: FC = () => (
	<Page pageName={pageName}>
		<MobilePicture
			src="/images/artworks/mobile/TheRehearsalOfTheBalletOnstage.jpg"
			alt="Kooperationen"
		/>
		<BigTitle timeout={1100}>{getText(`pages.${pageName}.content.title`)}</BigTitle>
		<Paragraph timeout={1200}>{getText(`pages.${pageName}.content.text`)}</Paragraph>
		<Paragraph timeout={1300}>{getText(`pages.${pageName}.content.list`)}</Paragraph>
		<Paragraph timeout={1400}>{getText(`pages.${pageName}.content.thanks`)}</Paragraph>
		<br />
		<br />
		<br />
		<a
			href="http://a-u-m.biz/"
			target="_blank"
			rel="noopener noreferrer"
			title="A+M | Marketing, Consulting, Training, Coaching"
		>
			<MobilePicture src="/logos/aundm.jpg" alt="Kooperationen" />
		</a>
		<a
			href="https://www.symbolon.com/"
			target="_blank"
			rel="noopener noreferrer"
			title="Symbolon AG"
		>
			<MobilePicture src="/logos/symbolon.jpg" alt="Kooperationen" />
		</a>
		<a
			href="http://www.methodenberatung-jahn.de/"
			target="_blank"
			rel="noopener noreferrer"
			title="Judith Jahn | Marktforschung, Methodenberatung und Evaluation"
		>
			<MobilePicture src="/logos/judith-jahn.jpg" alt="Kooperationen" />
		</a>
	</Page>
)

export default CooperationsPage
