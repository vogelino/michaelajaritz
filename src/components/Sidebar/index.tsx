import { FC } from 'react'
import styled from 'styled-components'
import Menu from '../Menu'
import Logo from '../Logo'
import Footer from '../Footer'
import { PageNameType } from 'src/constants/pages'

const SidebarWrapper = styled.aside`
	top: 0;
	left: 0;
	width: 280px;
	height: 100%;
	height: 100vh;
	position: fixed;
	display: flex;
	flex-direction: column;
	z-index: 10;
	transition: transform 600ms cubic-bezier(0, 1, 0.37, 0.98),
		opacity 400ms cubic-bezier(0, 1, 0.37, 0.98);
	box-sizing: border-box;

	@media screen and (min-width: 321px) {
		max-width: 220px;
	}

	@media screen and (min-width: 960px) {
		padding: 40px 0 40px 50px;
		transform: translateX(0) !important;
		opacity: 1 !important;
	}

	@media screen and (max-width: 960px) {
		width: 100%;
		padding: 80px 20px 40px 20px;
		background: white;
		box-shadow: 0 -4px 20px -4px rgba(0, 0, 0, 0.2);
		transform: translateX(0);
	}
`

const LogoZone = styled.header`
	width: 212px;
	height: 123px;
	flex-shrink: 0;
	flex-basis: 130px;

	@media screen and (max-width: 960px) {
		display: none;
	}
`

const MenuZone = styled.nav`
	width: 100%;

	@media screen and (max-width: 960px) {
		margin-bottom: 40px;
	}

	@media screen and (min-width: 960px) {
		flex-basis: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
`

const FooterZone = styled.footer`
	width: 100%;
	flex-basis: 56px;
`

interface SidebarType {
	isSidebarOpen: boolean
	pageName: PageNameType
}

const Sidebar: FC<SidebarType> = ({ isSidebarOpen, pageName }) => (
	<SidebarWrapper
		style={
			isSidebarOpen
				? {}
				: {
						transform: 'translateX(-100%)',
						opacity: 0,
				  }
		}
	>
		<LogoZone>
			<Logo />
		</LogoZone>
		<MenuZone>
			<Menu pageName={pageName} />
		</MenuZone>
		<FooterZone>
			<Footer />
		</FooterZone>
	</SidebarWrapper>
)

export default Sidebar
