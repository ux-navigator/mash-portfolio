/* Internal dependencies */
import { breakPoints } from 'services/DeviceService'

export const media = {
  mobile: `(max-width: ${breakPoints.mobile}px)`,
  tablet: `(max-width: ${breakPoints.tablet}px) and (min-width: ${breakPoints.mobile + 1}px)`,
}
