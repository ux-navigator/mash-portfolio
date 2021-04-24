import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

interface ImageProps {
  name: string
  alt?: string
  className?: string
}

const Image = ({ name, alt, className }: ImageProps) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}

      render={(data) => {
        const image = data.images.edges.find((n: any) => {
          return n.node.relativePath.includes(name)
        })
        if (!image) { return null }
        
        return (
          <Img
            className={className}
            objectFit="cover"
            objectPosition="50% 50%"
            fluid={image.node.childImageSharp.fluid}
            alt={alt}
          />
        );
      }}
    />
  )
}

export default Image
