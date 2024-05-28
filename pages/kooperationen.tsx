import React, { FC } from 'react'
import BigTitle from '../src/components/BigTitle'
import MobilePicture from '../src/components/MobilePicture'
import Paragraph from '../src/components/Paragraph'
import Page from '../src/hocs/Page'
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
		<a
			href="https://change-collective.de/"
			target="_blank"
			rel="noopener noreferrer"
			title="THE CHANGE COLLECTIVE | Begleitung, für erfolgreiche Veränderungsprozesse. Experten für Führung, Kommunikation & Konfliktlösung. Zukunft und Performance im Einklang."
		>
			<MobilePicture src="/logos/change-collective.png" alt="Logo von THE CHANGE COLLECTIVE" />
		</a>
		<a
			href="https://www.sabinestock.com/"
			target="_blank"
			rel="noopener noreferrer"
			title="Sabine Stock | Stärken. Revolution. Die Stärke deiner Einzigartigkeit!"
		>
			<MobilePicture src="/logos/sabine-stock.png" alt="Logo von Sabine Stock" />
		</a>
		<a
			href="https://www.linkedin.com/in/harald-stock-39910241/"
			target="_blank"
			rel="noopener noreferrer"
			title="Harald Stock | Managing Director bei Strande Consulting - Sichtbar-Macher * Inspirator * Impulsator * Aktivator"
		>
			<MobilePicture src="/logos/harald-stock.png" alt="Bild und Name von Harald Stock" />
		</a>
	</Page>
)

export default CooperationsPage
