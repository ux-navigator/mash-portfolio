import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

interface ImageProps {
  name: string
  alt?: string
}

const Image = ({ name, alt }: ImageProps) => {
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
            fluid={image.node.childImageSharp.fluid}
            alt={alt}
          />
        );
      }}
    />
  )
}

export default Image