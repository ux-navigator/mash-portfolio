/* External dependencies */
import React, { useContext, useEffect, useState, useCallback } from 'react'

/* Internal dependencies */
import { GlobalContext } from 'contexts/globalContext'
import useLayout from 'hooks/useLayout'
import { isSafari } from 'utils/browserUtils'
import { SCROLLING_DURATION } from 'components/Pagination'
import Pagination, { Page } from 'components/Pagination'
import Image from 'components/Image'
import SVGIcon, { Size } from 'components/SVGIcon'
import * as Styled from 'styles/pageStyles/index.styled'
import ship from 'images/ship.png'
import Config from '../../config'

function IndexPage() {
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
                ? <Styled.SafariImage src={ship} />
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
                  <Styled.ContentItem key={index}>{paragraph}</Styled.ContentItem>
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
            <Styled.IntroTitle dangerouslySetInnerHTML={{ __html: Config.main_third.title }} />
            <Styled.IntroContent>
              {Config.main_third.paragraphs.map((paragraph, index) => (
                <Styled.IntroListItem key={index}>
                  <Styled.Icon>
                    <SVGIcon name="check" size={Size.Large} />
                  </Styled.Icon>
                  {paragraph}
                </Styled.IntroListItem>
              ))}
            </Styled.IntroContent>
          </Styled.IntroWrapper>
        </Styled.IntroPageInnerWrapper>
      </Page>
      <Page>
        <Styled.CommonPageInnerWrapper>
          <Styled.IntroParagraph1>
            {Config.main_fourth.paragraph1}
          </Styled.IntroParagraph1>
          <Styled.IntroParagraph2>
            {Config.main_fourth.paragraph2}
          </Styled.IntroParagraph2>
          <Styled.IntroItemsWrapper>
            <Styled.IntroItemWrapper>
              <Styled.IntroImageItemWrapper width={312} style={{ transform: 'translateY(10px)'}}>
                <Image name="meeting.png" />
              </Styled.IntroImageItemWrapper>
              <Styled.IntroItemTitle>
                {Config.main_fourth.items[0].title}
              </Styled.IntroItemTitle>
              <Styled.IntroItemContent>
                {Config.main_fourth.items[0].content}
              </Styled.IntroItemContent>
            </Styled.IntroItemWrapper>
            <Styled.IntroItemWrapper>
              <Styled.IntroImageItemWrapper width={238}>
                <Image name="thinking.png" />
              </Styled.IntroImageItemWrapper>
              <Styled.IntroItemTitle>
                {Config.main_fourth.items[1].title}
              </Styled.IntroItemTitle>
              <Styled.IntroItemContent>
                {Config.main_fourth.items[1].content}
              </Styled.IntroItemContent>
            </Styled.IntroItemWrapper>
            <Styled.IntroItemWrapper>
              <Styled.IntroImageItemWrapper width={247} style={{ transform: 'translateY(10px)'}}>
                <Image name="study.png" />
              </Styled.IntroImageItemWrapper>
              <Styled.IntroItemTitle>
                {Config.main_fourth.items[2].title}
              </Styled.IntroItemTitle>
              <Styled.IntroItemContent>
                {Config.main_fourth.items[2].content}
              </Styled.IntroItemContent>
            </Styled.IntroItemWrapper>
          </Styled.IntroItemsWrapper>
        </Styled.CommonPageInnerWrapper>
      </Page>
      <Page>
        <Styled.CommonPageInnerWrapper>
          <Styled.IntroParagraph1>
            {Config.main_fifth.paragraph1}
          </Styled.IntroParagraph1>
          <Styled.IntroParagraph2>
            {Config.main_fifth.paragraph2}
          </Styled.IntroParagraph2>
          <Styled.ChattingImageWrapper>
            <Image name="chatting.png" />
          </Styled.ChattingImageWrapper>
          <Styled.PeopleImageWrapper>
            <Image name="people.png" />
          </Styled.PeopleImageWrapper>
        </Styled.CommonPageInnerWrapper>
      </Page>
    </Pagination>
  )
}

export default useLayout(IndexPage)
