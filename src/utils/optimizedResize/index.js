const optimizedResize = () => {
	const callbacks = []
	let running = false

	function runCallbacks() {
		callbacks.forEach((callback) => callback())

		running = false
	}

	function resize() {
		if (!running) {
			running = true
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(runCallbacks)
			} else {
				setTimeout(runCallbacks, 66)
			}
		}
	}

	function addCallback(callback) {
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
