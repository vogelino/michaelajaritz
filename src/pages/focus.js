import React from 'react';
import PropTypes from 'prop-types';
import page from '../hocs/page';

const InFocusPage = ({ pageName }) => <div pageName={pageName} />;

InFocusPage.propTypes = {
	pageName: PropTypes.string.isRequired,
};

export default page('focus')(InFocusPage);
