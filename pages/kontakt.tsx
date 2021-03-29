import { FC } from 'react'
import styled from 'styled-components'
import Page from '../src/hocs/Page'
import BigTitle from '../src/components/BigTitle'
import Subtitle from '../src/components/Subtitle'
import Paragraph from '../src/components/Paragraph'
import SocialIconList from '../src/components/SocialIconList'
import MobilePicture from '../src/components/MobilePicture'
import { getText } from '../src/texts/getText'

const SocialIconListWrapper = styled.div`
	position: relative;
	color: red;
`

const pageName = 'kontakt'
const ContactPage: FC = () => (
	<Page pageName={pageName}>
		<MobilePicture
			src="/images/artworks/mobile/wandererseafog.jpg"
			alt="Kontaktdaten von Michaela Jaritz"
		/>
		<Subtitle timeout={1000}>{getText(`pages.${pageName}.content.subtitle`)}</Subtitle>
		<BigTitle timeout={1100}>{getText(`pages.${pageName}.content.title`)}</BigTitle>
		<Paragraph timeout={1200}>{getText(`pages.${pageName}.content.contactInformations`)}</Paragraph>
		<SocialIconListWrapper>
			<SocialIconList startTimeout={1300} />
		</SocialIconListWrapper>
		<Paragraph timeout={1600}>{getText(`pages.${pageName}.content.finalSentence`)}</Paragraph>
	</Page>
)

export default ContactPage
