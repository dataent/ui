import { ImportError } from './Error'

import Element from './base/Element'
import Control from './base/Control'

if ( typeof jQuery === 'undefined' ) {
	throw new ImportError('dataent.ui requires jQuery. Kindly import jQuery.')
}

export default {
	Element, Control
}