import React from 'react';
import Raven from 'raven-js';
import InteractionError from '../../errors/InteractionError';

const logException = (ex, context) => {
	Raven.captureException(ex, {
		extra: context,
	});
	/* eslint-disable no-console */
	if (typeof window !== 'undefined') {
		console.error(ex);
	}
	/* eslint-enable no-console */
};

export const interaction = (description, callback) => (...args) => {
	try {
		callback(...args);
	}
	catch (exception) {
		const message = `Interaction "${description}" failed with error: ${exception.message}`;
		const error = new InteractionError({
			stack: exception.stack,
			message,
		});
		logException(error);
	}
};

export default (WrappedComponent) => (props) => {
	try {
		return <WrappedComponent {...props} />;
	}
	catch (exception) {
		logException(exception);
		return <div />;
	}
};

