import InteractionError from './InteractionError';

it('should have the name InteractionError', () => {
	const exception = new InteractionError({
		message: 'Test error',
		stack: (new Error()).stack,
	});
	expect(exception.name).toBe('InteractionError');
});

it('should pass down the stack and message', () => {
	const expectedMessage = 'Error';
	const expectedStack = (new Error()).stack;
	const exception = new InteractionError({
		message: expectedMessage,
		stack: expectedStack,
	});
	expect(exception.message).toBe(expectedMessage);
	expect(exception.stack).toBe(expectedStack);
});

