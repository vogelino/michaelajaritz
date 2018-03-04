import React from 'react';
import PropTypes from 'prop-types';
import { FormattedHTMLMessage } from 'react-intl';
import Page from '../hocs/Page';
import BigTitle from '../components/BigTitle';
import Subtitle from '../components/Subtitle';
import Paragraph from '../components/Paragraph';
import MobilePicture from '../components/MobilePicture';

const pageName = 'idee';
const IdeaPage = () => {
	const Text = ({ id }) => (
		<FormattedHTMLMessage id={`pages.${pageName}.content.${id}`} />
	);
	Text.propTypes = {
		id: PropTypes.string.isRequired,
	};

	return (
		<Page pageName={pageName}>
			<MobilePicture
				src="/static/images/artworks/possible.jpg"
				alt="Training, Coaching und Moderation"
			/>
			<Subtitle timeout={1000}>
				<Text id="subtitle" />
			</Subtitle>
			<BigTitle timeout={1200} color="orange" marginBottom={10}>
				<Text id="titleTraining" />
			</BigTitle>
			<BigTitle timeout={1400} color="blue" marginBottom={10} marginTop={0}>
				<Text id="titleCoaching" />
			</BigTitle>
			<BigTitle timeout={1600} color="purple" marginTop={0}>
				<Text id="titleModeration" />
			</BigTitle>
			<Paragraph timeout={1800}>
				<Text id="textIntro" />
			</Paragraph>
			<BigTitle timeout={1900} color="purple">
				<Text id="titleMakeVisible" />
			</BigTitle>
			<Paragraph timeout={2000}>
				<Text id="textMakeVisible" />
			</Paragraph>
			<BigTitle timeout={2100} color="orange">
				<Text id="titleMakeRoom" />
			</BigTitle>
			<Paragraph timeout={2200}>
				<Text id="textMakeRoom" />
			</Paragraph>
			<BigTitle timeout={2300} color="blue">
				<Text id="titleMakePossible" />
			</BigTitle>
			<Paragraph timeout={2400}>
				<Text id="textMakePossible" />
			</Paragraph>
		</Page>
	);
};

export default IdeaPage;
