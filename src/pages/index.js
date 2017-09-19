import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import page from '../hocs/page';
import { gracefulFunction } from '../hocs/withErrorLogs';

const WelcomePage = ({ pageName }) => (
	<div>

	</div>
);

WelcomePage.propTypes = {
	pageName: PropTypes.string.isRequired,
};

export default page('welcome')(WelcomePage);
