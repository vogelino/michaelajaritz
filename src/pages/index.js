import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, injectIntl, intlShape, defineMessages } from 'react-intl';
import page from '../hocs/page';
// import { gracefulFunction } from '../hocs/withErrorLogs';
import BigTitle from '../components/BigTitle';
import Subtitle from '../components/Subtitle';

const WelcomePage = ({ pageName, intl }) => {
	const messages = defineMessages({
		title: {
			id: `pages.${pageName}.content.title`,
		},
	});
	const titleColors = ['purple', 'orange', 'blue'];

	return (
		<div>
			<Subtitle timeout={1000}>
				<FormattedMessage id={`pages.${pageName}.content.subtitle`} />
			</Subtitle>
			{intl.formatMessage(messages.title).split('\n').map((lineText, i) => (
				<BigTitle
					key={lineText}
					timeout={(i * 300) + 1200}
					color={titleColors[i]}
					nomargin
				>
					{lineText}
				</BigTitle>
			))}
		</div>
	);
};

WelcomePage.propTypes = {
	pageName: PropTypes.string.isRequired,
	intl: intlShape.isRequired,
};

export default page('welcome')(injectIntl(WelcomePage));

