import germanTexts from './de-DE'
import { flattenObject } from '../utils'

const messages = (): Record<string, string> => flattenObject(germanTexts)

export default messages
