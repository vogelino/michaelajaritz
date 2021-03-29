import { FC, useState } from 'react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import HtmlHead from '../../components/HtmlHead'
import Sidebar from '../../components/Sidebar'
import IllustrationZone from '../../components/IllustrationZone'
import Content from '../../components/Content'
import theme, { ThemeType } from '../../theme'
import { PageNameType } from '../../constants/pages'
import { useResponsiveState } from '../../utils/hooks/useResponsiveState'

const GlobalStyles = createGlobalStyle`
	body { margin: 0; }
	* { box-sizing: border-box; }

	@font-face {
		font-family: 'Lato';
		src: url('/fonts/lato-bold-webfont.woff2') format('woff2'),
			 url('/fonts/lato-bold-webfont.woff') format('woff'),
			 url('/fonts/lato-bold-webfont.ttf') format('truetype');
		font-weight: 700, bold;
		font-style: normal;
	}
	@font-face {
		font-family: 'Lato';
		src: url('/fonts/lato-italic-webfont.woff2') format('woff2'),
			 url('/fonts/lato-italic-webfont.woff') format('woff'),
			 url('/fonts/lato-italic-webfont.ttf') format('truetype');
		font-weight: 400, normal;
		font-style: italic;
	}
	@font-face {
		font-family: 'Lato';
		src: url('/fonts/lato-light-webfont.woff2') format('woff2'),
			 url('/fonts/lato-light-webfont.woff') format('woff'),
			 url('/fonts/lato-light-webfont.ttf') format('truetype');
		font-weight: 300, lighter;
		font-style: normal;
	}
	@font-face {
		font-family: 'Lato';
		src: url('/fonts/lato-regular-webfont.woff2') format('woff2'),
			 url('/fonts/lato-regular-webfont.woff') format('woff'),
			 url('/fonts/lato-regular-webfont.ttf') format('truetype');
		font-weight: 400, normal;
		font-style: normal;
	}
	@font-face {
		font-family: 'PT Mono';
		src: url('/fonts/pt-mono-webfont.woff2') format('woff2'),
			 url('/fonts/pt-mono-webfont.woff') format('woff'),
			 url('/fonts/pt-mono-webfont.ttf') format('truetype');
		font-weight: normal;
		font-style: normal;
	}
`

const Page: FC<{ pageName: PageNameType }> = ({ children, pageName }) => {
	const isMobile = useResponsiveState()
	const [isSidebarOpened, setSidebarIsOpened] = useState<boolean>(!isMobile)

	return (
		<ThemeProvider theme={theme as ThemeType}>
			<GlobalStyles />
			<HtmlHead pageName={pageName} />
			<IllustrationZone pageName={pageName} />
			<Sidebar pageName={pageName} isSidebarOpen={isSidebarOpened} />
			<Content isOpen={isSidebarOpened} setSidebar={setSidebarIsOpened}>
				{children}
			</Content>
		</ThemeProvider>
	)
}

export default Page
