/* External dependencies */
import { throttle } from 'lodash-es'

/* Internal dependencies */
import Device from 'constants/Device'

export const breakPoints = {
  mobile: 759,
  tablet: 1149,
}

class DeviceService {
  private device: Device

  constructor() {
    window.addEventListener('resize', this.handleResize)
    this.device = this.calculateDevice(window.innerWidth)
  }

  handleResize = throttle(() => {
    this.device = this.calculateDevice(window.innerWidth)
  }, 300)

  calculateDevice = (width: number) => {
    if (width > breakPoints.tablet) {
      return Device.PC
    }
    
    if (breakPoints.tablet >= width && width > breakPoints.mobile) {
      return Device.Tablet
    }

    return Device.Mobile
  }

  getDevice = () => {
    return this.device
  }
}

export default new DeviceService()
