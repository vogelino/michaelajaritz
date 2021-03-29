import colors, { ColorsType } from './colors'
import typography, { TypographyType } from './typography'

export interface ThemeType extends ColorsType, TypographyType {}

const theme: ThemeType = {
	...colors,
	...typography,
}

export default theme
