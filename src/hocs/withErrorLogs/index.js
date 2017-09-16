import React from 'react';
import Raven from 'raven-js';
import InteractionError from '../../errors/InteractionError';

export const logException = (ex, context) => {
	Raven.captureException(ex, {
		extra: context,
	});
	/* eslint-disable no-console */
	if (typeof window !== 'undefined') {
		console.error(ex);
	}
	/* eslint-enable no-console */
};

export const gracefulFunction = (description, callback) => (...args) => {
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

