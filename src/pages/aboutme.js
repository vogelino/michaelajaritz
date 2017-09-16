import React from 'react';
import PropTypes from 'prop-types';
import page from '../hocs/page';

const AboutMePage = ({ pageName }) => <div pageName={pageName} />;

AboutMePage.propTypes = {
	pageName: PropTypes.string.isRequired,
};

export default page('aboutme')(AboutMePage);
