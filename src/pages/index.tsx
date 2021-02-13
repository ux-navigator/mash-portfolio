/* External dependencies */
import React from 'react'

/* Internal dependencies */
import { isSafari } from 'utils/browserUtils'
import Layout from 'components/Layout'
import Pagination, { Page } from 'components/Pagination'
import Image from 'components/Image'
import * as Styled from 'styles/pageStyles/index.styled'
import ship from 'images/ship.png'
import Config from '../../config'

function IndexPage() {
  return (
    <Layout>
      <Pagination>
        <Page>
          <Styled.PageInnerWrapper>
            <Styled.ContentWrapper>
              <Styled.MainTitle>{ Config.main_first.mainTitle }</Styled.MainTitle>
              <Styled.SubTitle>{ Config.main_first.subTitle }</Styled.SubTitle>
              <Styled.Paragraph>{ Config.main_first.paragraph }</Styled.Paragraph>
              { Config.main_first.skills.map(skill => (
                <Styled.Skill key={skill}>{skill}</Styled.Skill>
              )) }
            </Styled.ContentWrapper>
            <Styled.ImageWrapper>
              {
                isSafari
                  ? <Styled.SafariImage src={ship} width={823} height={636} />
                  : <Image name="ship.png" />
              }
            </Styled.ImageWrapper>
          </Styled.PageInnerWrapper>
        </Page>
        <Page>second</Page>
        <Page>third</Page>
      </Pagination>
    </Layout>
  )
}

export default IndexPage
