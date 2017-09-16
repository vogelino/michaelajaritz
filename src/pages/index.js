import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import page from '../hocs/page';
import { gracefulFunction } from '../hocs/withErrorLogs';

const WelcomePage = ({ pageName }) => (
	<div>
		{pageName}: <FormattedMessage id="pages.welcome.greetings" />
		<button
			onClick={
				gracefulFunction('Do something', () => {
					throw new Error('Test error');
				})
			}
		/>
	</div>
);

WelcomePage.propTypes = {
	pageName: PropTypes.string.isRequired,
};

export default page('welcome')(WelcomePage);
