export default class InteractionError extends Error {
	constructor({ message, stack }) {
		super(message);
		this.name = 'InteractionError';
		this.stack = stack;
	}
}

