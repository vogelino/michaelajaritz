import { useWindowWidth } from '@react-hook/window-size'

export const useResponsiveState = () => {
	const windowWidth = useWindowWidth({ initialWidth: 1600 })

	const isMobile = windowWidth < 960
	return {
		illustrationSclale: isMobile ? 0.8 : windowWidth / 1600,
		isMobile,
	}
}