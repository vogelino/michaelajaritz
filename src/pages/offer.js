import React from 'react';
import PropTypes from 'prop-types';
import page from '../hocs/page';

const OfferPage = ({ pageName }) => <div pageName={pageName} />;

OfferPage.propTypes = {
	pageName: PropTypes.string.isRequired,
};

export default page('offer')(OfferPage);
