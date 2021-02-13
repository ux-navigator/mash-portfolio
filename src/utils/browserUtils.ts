const userAgent = window.navigator.userAgent.toLowerCase()

export const isIE = userAgent.includes('trident')

export const isSafari = userAgent.includes('safari') && !userAgent.includes('chrome')
