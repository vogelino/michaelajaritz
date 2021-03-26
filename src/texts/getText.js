import sanitizeHtml from 'sanitize-html'
import getMessages from './messages'

const texts = getMessages('de-DE')

export const getText = (key) => sanitizeHtml(texts[key]) || ''
