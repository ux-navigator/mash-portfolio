import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

interface BackgroundSectionProps {
  className?: string
  children?: React.ReactNode
}

function BackgroundSection({
  className,
  children,
}: BackgroundSectionProps) {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "background.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
    >
      { children }
    </BackgroundImage>
  )
}

export default BackgroundSection
