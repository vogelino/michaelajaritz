import React from 'react';
import PropTypes from 'prop-types';
import page from '../hocs/page';

const IdeaPage = ({ pageName }) => <div pageName={pageName} />;

IdeaPage.propTypes = {
	pageName: PropTypes.string.isRequired,
};

export default page('idea')(IdeaPage);
