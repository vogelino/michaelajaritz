const sansSerifFont = 'Lato, sans-serif';
const monospaceFont = '"PT Mono", monospace';
const baseFontSize = 16;
const baseFontWeight = 400;
export default {
	paragraphFontSize: `${baseFontSize}px`,
	paragraphFontFamily: sansSerifFont,
	paragraphFontWeight: baseFontWeight,
	paragraphLetterSpacing: 0.48,
	paragraphLineHeight: `${baseFontSize + (baseFontSize / 3)}px`,
	footerLinkFontSize: `${baseFontSize - 2}px`,
	footerLinkFontWeight: baseFontWeight,
	footerLinkFontFamily: sansSerifFont,
	sloganFontSize: `${baseFontSize}px`,
	sloganFontWeight: baseFontWeight,
	sloganFontFamily: sansSerifFont,
	menuFontSize: `${baseFontSize + 6}px`,
	menuFontFamily: sansSerifFont,
	menuFontWeight: baseFontWeight - 100,
	menuFontWeightActive: baseFontWeight + 100,
	addressFontSize: `${baseFontSize - 2}px`,
	addressFontFamily: sansSerifFont,
	titleFontSize: `${baseFontSize + 24}px`,
	titleFontFamily: monospaceFont,
	titleFontWeight: baseFontWeight - 100,
	titleLetterSpacing: '0.04em',
	subtitleFontSize: `${baseFontSize + 10}px`,
	subtitleFontFamily: sansSerifFont,
	subtitleFontWeight: baseFontWeight - 100,
	subtitleLetterSpacing: 'inherit',
	accordionFontSize: `${baseFontSize + 2}px`,
	accordionFontFamily: sansSerifFont,
	accordionFontWeight: baseFontWeight,
	accordionLineHeight: `${(baseFontSize + 2) + ((baseFontSize + 2) / 3)}px`,
	accordionLetterSpacing: 'inherit',
};

