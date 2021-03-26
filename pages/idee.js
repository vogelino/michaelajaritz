import React from 'react'
import Page from '../src/hocs/Page'
import BigTitle from '../src/components/BigTitle'
import Subtitle from '../src/components/Subtitle'
import Paragraph from '../src/components/Paragraph'
import MobilePicture from '../src/components/MobilePicture'
import { getText } from '../src/texts/getText'

const IdeaPage = () => (
	<Page pageName="idee">
		<MobilePicture
			src="/images/portraits/mobile/welcomeMain.jpg"
			alt="Training, Coaching, Moderation."
		/>
		<Subtitle timeout={1000}>{getText(`pages.idee.content.subtitle`)}</Subtitle>
		<BigTitle timeout={1200} color="orange" marginBottom={10}>
			{getText(`pages.idee.content.titleTraining`)}
		</BigTitle>
		<BigTitle timeout={1400} color="blue" marginBottom={10} marginTop={0}>
			{getText(`pages.idee.content.titleCoaching`)}
		</BigTitle>
		<BigTitle timeout={1600} color="purple" marginTop={0}>
			{getText(`pages.idee.content.titleModeration`)}
		</BigTitle>
		<Paragraph timeout={1800}>{getText(`pages.idee.content.textIntro`)}</Paragraph>
		<MobilePicture src="/images/artworks/mobile/experienced.jpg" alt="Sichtbar machen." />
		<BigTitle timeout={1900} color="purple">
			{getText(`pages.idee.content.titleMakeVisible`)}
		</BigTitle>
		<Paragraph timeout={2000}>{getText(`pages.idee.content.textMakeVisible`)}</Paragraph>
		<MobilePicture src="/images/artworks/mobile/makespace.jpg" alt="Platz machen." />
		<BigTitle timeout={2100} color="orange">
			{getText(`pages.idee.content.titleMakeRoom`)}
		</BigTitle>
		<Paragraph timeout={2200}>{getText(`pages.idee.content.textMakeRoom`)}</Paragraph>
		<MobilePicture src="/images/artworks/mobile/possible.jpg" alt="Möglich machen." />
		<BigTitle timeout={2300} color="blue">
			{getText(`pages.idee.content.titleMakePossible`)}
		</BigTitle>
		<Paragraph timeout={2400}>{getText(`pages.idee.content.textMakePossible`)}</Paragraph>
	</Page>
)

export default IdeaPage
