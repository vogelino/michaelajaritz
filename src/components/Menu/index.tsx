import { FC } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'next/link'
import AnimatedInText from '../AnimatedInText'
import pages from '../../constants/pages'
import { getText } from '../../texts/getText'
import { ThemeType } from 'src/theme'

interface MenuListItemType {
	active: boolean
	theme: ThemeType
}

const MenuListItem = styled.li<MenuListItemType>`
	margin: 0;
	list-style: none;
	padding: 10px 0 0;
	font-weight: ${({ active, theme }) =>
		active ? theme.menuFontWeightActive : theme.menuFontWeight};
	font-size: ${({ theme }) => theme.menuFontSize};
	font-family: ${({ theme }) => theme.menuFontFamily};

	@media screen and (max-width: 540px) {
		font-weight: ${({ active, theme }) =>
			active ? theme.menuFontWeightActive : theme.menuFontWeightMobile};
	}

	& a {
		text-decoration: none;
		color: ${({ theme, active }) => (!active ? theme.grey : theme.darkGrey)};
		transition: color 150ms ease-out;

		&:hover {
			color: ${({ theme }) => theme.darkGrey};
		}

		> span {
			width: 100%;
		}
	}
`

const MenuList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`

const Menu: FC<{ pageName: string }> = ({ pageName }) => (
	<MenuList>
		{pages.map((page, index) => (
			<MenuListItem key={page.name} active={pageName === page.name}>
				<Link href={page.path}>
					<a title={`Michaela Jaritz | ${getText(`pages.${pageName}.title`)}`}>
						<AnimatedInText timeout={index * 100 + 400}>
							{getText(`pages.${page.name}.title`)}
						</AnimatedInText>
					</a>
				</Link>
			</MenuListItem>
		))}
	</MenuList>
)

Menu.propTypes = {
	pageName: PropTypes.string.isRequired,
}

export default Menu
