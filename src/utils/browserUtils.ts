const userAgent = (typeof window !== 'undefined') ? window.navigator.userAgent.toLowerCase() : null

export const isIE = userAgent ? userAgent.includes('trident') : false

export const isSafari = userAgent ? userAgent.includes('safari') && !userAgent.includes('chrome') : false
