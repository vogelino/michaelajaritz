import React from 'react'
import Page from '../src/hocs/Page'
import BigTitle from '../src/components/BigTitle'
import Subtitle from '../src/components/Subtitle'
import Paragraph from '../src/components/Paragraph'
import MobilePicture from '../src/components/MobilePicture'
import { getText } from '../src/texts/getText'

const pageName = 'willkommen'
const WelcomePage = () => (
	<Page pageName={pageName}>
		<MobilePicture
			src="/images/portraits/mobile/welcomeSecondary.jpg"
			alt="Portrait von Michaela Jaritz"
		/>
		<Subtitle timeout={1000} block>
			{getText(`pages.${pageName}.content.subtitle`)}
		</Subtitle>
		<BigTitle timeout={1200} color="purple" marginTop={10} marginBottom={0}>
			{getText(`pages.${pageName}.content.fresh`)}
		</BigTitle>
		<BigTitle timeout={1500} color="orange" marginTop={10} marginBottom={0}>
			{getText(`pages.${pageName}.content.individual`)}
		</BigTitle>
		<BigTitle timeout={1800} color="blue" marginTop={10}>
			{getText(`pages.${pageName}.content.sustainable`)}
		</BigTitle>
		<Subtitle timeout={2300} block marginTop={40}>
			{getText(`pages.${pageName}.content.quote`)}
		</Subtitle>
		<Paragraph timeout={2400}>{getText(`pages.${pageName}.content.greetings`)}</Paragraph>
	</Page>
)

export default WelcomePage
