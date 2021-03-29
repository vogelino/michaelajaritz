import { FC } from 'react'
import MarkdownSuite from '../src/components/MarkdownSuite'
import MobilePicture from '../src/components/MobilePicture'
import Page from '../src/hocs/Page'
import { getText } from '../src/texts/getText'

const pageName = 'impressum'
const Content: FC = () => (
	<MarkdownSuite timeout={1200} source={getText(`pages.${pageName}.text`)} />
)

const ImpressumPage: FC = () => (
	<Page pageName={pageName}>
		<MobilePicture src="/images/artworks/mobile/paulklee.jpg" alt="Impressum" />
		<Content />
	</Page>
)

export default ImpressumPage
