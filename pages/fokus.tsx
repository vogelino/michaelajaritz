import { FC } from 'react'
import Page from '../src/hocs/Page'
import BigTitle from '../src/components/BigTitle'
import Subtitle from '../src/components/Subtitle'
import Paragraph from '../src/components/Paragraph'
import MobilePicture from '../src/components/MobilePicture'
import { getText } from '../src/texts/getText'

const pageName = 'fokus'
const FocusPage: FC = () => (
	<Page pageName={pageName}>
		<MobilePicture src="/images/artworks/mobile/gallery.jpg" alt="Die Kunst" />
		<Subtitle timeout={1000}>{getText(`pages.${pageName}.content.subtitle`)}</Subtitle>
		<BigTitle timeout={1200} color="blue">
			{getText(`pages.${pageName}.content.titleArt`)}
		</BigTitle>
		<Paragraph timeout={1400}>{getText(`pages.${pageName}.content.textArt`)}</Paragraph>
		<MobilePicture src="/images/artworks/mobile/monalisa.jpg" alt="Der Mensch" />
		<BigTitle timeout={1500} color="orange">
			{getText(`pages.${pageName}.content.titleHuman`)}
		</BigTitle>
		<Paragraph timeout={1600}>{getText(`pages.${pageName}.content.textHuman`)}</Paragraph>
		<MobilePicture src="/images/artworks/mobile/soapbubbles.jpg" alt="Die Methode" />
		<BigTitle timeout={1700} color="purple">
			{getText(`pages.${pageName}.content.titleMethod`)}
		</BigTitle>
		<Paragraph timeout={1800}>{getText(`pages.${pageName}.content.textMethod`)}</Paragraph>
	</Page>
)

export default FocusPage
