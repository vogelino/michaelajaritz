import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import page from '../hocs/page';

const WelcomePage = ({ pageName }) => (
	<div>
		{pageName}: <FormattedMessage id="pages.welcome.greetings" />
	</div>
);

WelcomePage.propTypes = {
	pageName: PropTypes.string.isRequired,
};

export default page('Welcome')(WelcomePage);
