import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const HtmlHead = ({ pageTitle }) => (
    <Head>
        <title>{pageTitle} | Michaela Jaritz | Business Coaching & Training</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
);

HtmlHead.propTypes = {
    pageTitle: PropTypes.string.isRequired,
};

export default HtmlHead;
