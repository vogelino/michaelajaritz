import React from 'react';
import { mount, shallow } from 'enzyme';
import Raven from 'raven-js';
import { gracefulFunction } from '.';

describe('Test suite: gracefulFunction with error logs wrapper function', () => {
	it('should just call the callback', () => {
		const callback = jest.fn();
		const wrappedFunction = gracefulFunction('executing callback', callback);
		const props = { isBobANiceGuy: true };
		wrappedFunction(props);
		expect(callback).toHaveBeenCalledWith(props);
	});

	it('should log the exception if error', () => {
		const callback = () => {
			throw new Error('Bob is a bad guy');
		};
		const wrappedFunction = gracefulFunction('executing callback', callback);
		Raven.captureException = jest.fn();
		wrappedFunction();
		expect(Raven.captureException).toHaveBeenCalledTimes(1);
	});

	it('should log an instance of Error', () => {
		const callback = () => {
			throw new Error('Bob is a bad guy');
		};
		const wrappedFunction = gracefulFunction('executing callback', callback);
		Raven.captureException = jest.fn();
		wrappedFunction();
		const exception = Raven.captureException.mock.calls[0][0];
		expect(exception).toBeInstanceOf(Error);
	});
});

