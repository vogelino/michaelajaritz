import { useEffect, useState } from 'react'

export const useClientIsReady = () => {
	const [isClientReady, setIsClientReady] = useState(false)

	useEffect(() => {
		const to = setTimeout(() => setIsClientReady(true), 100)
		return () => clearTimeout(to)
	}, [])

	return isClientReady
}
