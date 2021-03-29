import sanitizeHtml from 'sanitize-html'
import getMessages from './messages'

const texts = getMessages()

export const getText = (key: keyof typeof texts): string => sanitizeHtml(texts[key]) || ''
