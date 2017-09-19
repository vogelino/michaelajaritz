import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape, defineMessages } from 'react-intl';
import page from '../hocs/page';
// import { gracefulFunction } from '../hocs/withErrorLogs';
import BigTitle from '../components/BigTitle';

const WelcomePage = ({ pageName, intl }) => {
	const messages = defineMessages({
		title: {
			id: `pages.${pageName}.content.title`,
		},
	});
	const titleColors = ['purple', 'orange', 'blue'];

	return (
		<div>
			{intl.formatMessage(messages.title).split('\n').map((lineText, i) => (
				<BigTitle timeout={(i * 300) + 1200} color={titleColors[i]}>{lineText}</BigTitle>
			))}
		</div>
	);
};

WelcomePage.propTypes = {
	pageName: PropTypes.string.isRequired,
	intl: intlShape.isRequired,
};

export default page('welcome')(injectIntl(WelcomePage));

