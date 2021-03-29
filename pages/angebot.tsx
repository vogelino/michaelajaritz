import { FC } from 'react'
import Page from '../src/hocs/Page'
import { getText } from '../src/texts/getText'
import BigTitle from '../src/components/BigTitle'
import Subtitle from '../src/components/Subtitle'
import Paragraph from '../src/components/Paragraph'
import Accordion from '../src/components/Accordion'
import MobilePicture from '../src/components/MobilePicture'

const pageName = 'angebot'

const Accordion1: FC = () => (
	<Accordion
		startTimeout={1600}
		color="orange"
		items={[
			{
				title: getText(`pages.${pageName}.content.symbolonProfilTitle`),
				content: getText(`pages.${pageName}.content.symbolonProfilText`),
			},
			{
				title: getText(`pages.${pageName}.content.symbolonProfilIntensiveTitle`),
				content: getText(`pages.${pageName}.content.symbolonProfilIntensiveText`),
			},
		]}
	/>
)

const Accordion2: FC = () => (
	<Accordion
		startTimeout={2100}
		color="blue"
		items={[
			{
				title: getText(`pages.${pageName}.content.businessCoachingTitle`),
				content: getText(`pages.${pageName}.content.businessCoachingText`),
			},
			{
				title: getText(`pages.${pageName}.content.symbolonTeamTitle`),
				content: getText(`pages.${pageName}.content.symbolonTeamText`),
			},
			{
				title: getText(`pages.${pageName}.content.art4reflectionTitle`),
				content: getText(`pages.${pageName}.content.art4reflectionText`),
			},
		]}
	/>
)

const OfferPage: FC = () => (
	<Page pageName={pageName}>
		<MobilePicture src="/images/artworks/mobile/atelier.jpg" alt="Persönliche Angebot" />
		<Subtitle timeout={1000}>{getText(`pages.${pageName}.content.subtitle`)}</Subtitle>
		<BigTitle timeout={1200} color="orange">
			{getText(`pages.${pageName}.content.titlePersonalOffer`)}
		</BigTitle>
		<Paragraph timeout={1300}>{getText(`pages.${pageName}.content.textPersonalOffer`)}</Paragraph>
		<Accordion1 />
		<MobilePicture src="/images/artworks/mobile/renoir.jpg" alt="Team Angebot" />
		<BigTitle timeout={1800} color="blue">
			{getText(`pages.${pageName}.content.titleTeamOffer`)}
		</BigTitle>
		<Paragraph timeout={1900}>{getText(`pages.${pageName}.content.textTeamOffer`)}</Paragraph>
		<Accordion2 />
	</Page>
)

export default OfferPage
