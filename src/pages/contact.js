import React from 'react';
import PropTypes from 'prop-types';
import page from '../hocs/page';

const ContactPage = ({ pageName }) => <div pageName={pageName} />;

ContactPage.propTypes = {
	pageName: PropTypes.string.isRequired,
};

export default page('contact')(ContactPage);
