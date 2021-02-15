/* External dependencies */
import React, { useContext, useEffect, useState, useCallback } from 'react'

/* Internal dependencies */
import { GlobalContext } from 'contexts/globalContext'
import { isSafari } from 'utils/browserUtils'
import { SCROLLING_DURATION } from 'components/Pagination'
import Layout from 'components/Layout'
import Pagination, { Page } from 'components/Pagination'
import Image from 'components/Image'
import SVGIcon, { Size } from 'components/SVGIcon'
import * as Styled from 'styles/pageStyles/index.styled'
import ship from 'images/ship.png'
import Config from '../../config'

function PaginationComponent() {
  const { state: { currentPage } } = useContext(GlobalContext)

  const [isIntroFixed, setIntroFixed] = useState(false)

  const leavingIntroPage = useCallback((pageIndex: number) => {
    if (
      (pageIndex === 1 && currentPage === 0) ||
      (pageIndex === 2 && currentPage === 3)
    ) {
      return true
    }

    return false
  }, [currentPage])

  useEffect(() => {
    if (currentPage === 1 || currentPage === 2) {
      setTimeout(() => {
        setIntroFixed(true)
      }, SCROLLING_DURATION)
    } else {
      setIntroFixed(false)
    }
  }, [currentPage])

  return (
    <Pagination>
      <Page>
        <Styled.FirstPageInnerWrapper>
          <Styled.ContentWrapper>
            <Styled.MainTitle>{ Config.main_first.mainTitle }</Styled.MainTitle>
            <Styled.SubTitle>{ Config.main_first.subTitle }</Styled.SubTitle>
            <Styled.Paragraph>{ Config.main_first.paragraph }</Styled.Paragraph>
            { Config.main_first.skills.map(skill => (
              <Styled.Skill key={skill}>{skill}</Styled.Skill>
            )) }
          </Styled.ContentWrapper>
          <Styled.ShipImageWrapper>
            {
              isSafari
                ? <Styled.SafariImage src={ship} width={823} height={636} />
                : <Image name="ship.png" />
            }
          </Styled.ShipImageWrapper>
        </Styled.FirstPageInnerWrapper>
      </Page>
      <Page>
        <Styled.IntroPageInnerWrapper fixed={isIntroFixed} hidden={!leavingIntroPage(1) && currentPage !== 1}>
          <Styled.EllipseImageWrapper>
            <Image name="ellipse.png" />
          </Styled.EllipseImageWrapper>
          <Styled.IntroWrapper>
            <Styled.IntroTitle>{ Config.main_second.title }</Styled.IntroTitle>
            <Styled.IntroContent>
              <Styled.ContentTitle>{ Config.main_second.paragraphTitle }</Styled.ContentTitle>
              <Styled.ContentList>
                { Config.main_second.paragraphs.map((paragraph, index) => (
                  <Styled.ContentItem key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
                ))}
              </Styled.ContentList>
            </Styled.IntroContent>
          </Styled.IntroWrapper>
        </Styled.IntroPageInnerWrapper>
      </Page>
      <Page>
        <Styled.IntroPageInnerWrapper fixed={isIntroFixed} hidden={!leavingIntroPage(2) && currentPage !== 2}>
          <Styled.EllipseImageWrapper>
            <Image name="ellipse.png" />
          </Styled.EllipseImageWrapper>
          <Styled.IntroWrapper>
            <Styled.IntroTitle>{ Config.main_third.title }</Styled.IntroTitle>
            <Styled.IntroContent>
              {Config.main_third.paragraphs.map((paragraph, index) => (
                <Styled.IntroListItem key={index}>
                  <Styled.Icon>
                    <SVGIcon name="check" size={Size.XLarge} />
                  </Styled.Icon>
                  {paragraph}
                </Styled.IntroListItem>
              ))}
            </Styled.IntroContent>
          </Styled.IntroWrapper>
        </Styled.IntroPageInnerWrapper>
      </Page>
    </Pagination>
  )
}

function IndexPage() {
  return (
    <Layout>
      <PaginationComponent />
    </Layout>
  )
}

export default IndexPage
