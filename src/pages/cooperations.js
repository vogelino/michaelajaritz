import React from 'react';
import PropTypes from 'prop-types';
import page from '../hocs/page';

const CooperationsPage = ({ pageName }) => <div pageName={pageName} />;

CooperationsPage.propTypes = {
	pageName: PropTypes.string.isRequired,
};

export default page('cooperations')(CooperationsPage);

