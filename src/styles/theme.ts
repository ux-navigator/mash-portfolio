const deviceSizes = {
  mobile: 759,
  tablet: 1149,
}

export const media = {
  mobile: `(max-width: ${deviceSizes.mobile}px)`,
  tablet: `(max-width: ${deviceSizes.tablet}px) and (min-width: ${deviceSizes.mobile + 1}px)`,
}
