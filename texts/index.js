import { addLocaleData, IntlProvider } from 'react-intl';
import de from 'react-intl/locale-data/de';
import PropTypes from 'prop-types';
import getMessages from './messages';

addLocaleData([ ...de ]);

const locale = 'de-DE';
const messages = getMessages(locale);

const TextsProvider = ({ children }) => (
	<IntlProvider {...{ locale, messages }}>
		{children}
	</IntlProvider>
);

TextsProvider.propTypes = {
	children: PropTypes.element.isRequired,
};

export default TextsProvider;
