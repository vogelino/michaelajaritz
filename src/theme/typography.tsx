const sansSerifFont = 'Lato, sans-serif'
const monospaceFont = '"PT Mono", monospace'
const baseFontSize = 16
const baseFontWeight = 400
const typography = {
	paragraphFontSize: `${baseFontSize}px`,
	paragraphFontSizeMobile: `${baseFontSize - 1}px`,
	paragraphFontFamily: sansSerifFont,
	paragraphFontWeight: baseFontWeight,
	paragraphLetterSpacing: '0.02em',
	paragraphLineHeight: `${baseFontSize + baseFontSize / 4}px`,
	footerLinkFontSize: `${baseFontSize - 2}px`,
	footerLinkFontWeight: baseFontWeight,
	footerLinkFontFamily: sansSerifFont,
	sloganFontSize: `${baseFontSize}px`,
	sloganFontWeight: baseFontWeight,
	sloganFontFamily: sansSerifFont,
	menuFontSize: `${baseFontSize + 6}px`,
	menuFontFamily: sansSerifFont,
	menuFontWeight: baseFontWeight - 100,
	menuFontWeightMobile: baseFontWeight,
	menuFontWeightActive: baseFontWeight + 100,
	addressFontSize: `${baseFontSize - 2}px`,
	addressFontFamily: sansSerifFont,
	titleFontSize: `${baseFontSize + 24}px`,
	titleFontSizeMobile: `${baseFontSize + 12}px`,
	titleFontFamily: monospaceFont,
	titleFontWeight: baseFontWeight - 100,
	titleLetterSpacing: '0.04em',
	subtitleFontSize: `${baseFontSize + 10}px`,
	subtitleFontSizeMobile: `${baseFontSize + 4}px`,
	subtitleFontFamily: sansSerifFont,
	subtitleFontWeight: baseFontWeight - 100,
	subtitleFontWeightMobile: baseFontWeight,
	subtitleLetterSpacing: 'inherit',
	accordionFontSize: `${baseFontSize + 2}px`,
	accordionFontFamily: sansSerifFont,
	accordionFontWeight: baseFontWeight + 200,
	accordionLineHeight: `${baseFontSize + 2 + (baseFontSize + 2) / 3}px`,
	accordionLetterSpacing: 'inherit',
}

export type TypographyType = typeof typography
export default typography
