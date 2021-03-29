type CallbackType = () => void
type AddCallbackSignature = (handler: CallbackType) => void

const optimizedResize = (): {
	add: AddCallbackSignature
	getCallbacks: () => CallbackType[]
} => {
	const callbacks: CallbackType[] = []
	let running = false

	function runCallbacks(): void {
		callbacks.forEach((callback) => callback())

		running = false
	}

	function resize(): void {
		if (!running) {
			running = true
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(runCallbacks)
			} else {
				setTimeout(runCallbacks, 66)
			}
		}
	}

	function addCallback(callback: CallbackType): void {
		if (callback) {
			callbacks.push(callback)
		}
	}

	return {
		add: (callback) => {
			if (!callbacks.length && typeof window !== 'undefined') {
				window.addEventListener('resize', resize)
			}
			addCallback(callback)
		},
		getCallbacks: () => callbacks,
	}
}

export default optimizedResize
