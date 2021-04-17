/* External dependencies */
import React, { useContext, useEffect, useState, useCallback } from 'react'

/* Internal dependencies */
import { GlobalContext } from 'contexts/globalContext'
import useLayout from 'hooks/useLayout'
import { isSafari } from 'utils/browserUtils'
import Pagination, { Page, SCROLLING_DURATION } from 'components/Pagination'
import Image from 'components/Image'
import SVGIcon, { Size } from 'components/SVGIcon'
import * as Styled from 'styles/pageStyles/index.styled'
import ship from 'images/ship.png'
import Arrow from 'images/arrow.png'
import Config from '../../config'

const IntroMainImages = ['meeting.png', 'thinking.png', 'study.png']
const IntroIconImages = ['glass.png', 'statistic.png', 'pencil.png']

function IndexPage() {
  const { state: { currentPage } } = useContext(GlobalContext)

  const [isIntroFixed, setIntroFixed] = useState(false)
  const [currentInfoItemIndex, setCurrentInfoItemIndex] = useState<number | null>(null)

  const leavingIntroPage = useCallback((pageIndex: number) => {
    if (
      (pageIndex === 1 && currentPage === 0) ||
      (pageIndex === 2 && currentPage === 3)
    ) {
      return true
    }

    return false
  }, [currentPage])

  const handleInfoItem = useCallback((index: number) => {
    if (index === currentInfoItemIndex) {
      setCurrentInfoItemIndex(null)
      return
    }
    setCurrentInfoItemIndex(index)
  }, [currentInfoItemIndex])

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
          <Styled.EllipseImage1Wrapper>
            <Image name="ellipse1.png" />
          </Styled.EllipseImage1Wrapper>
          <Styled.EllipseImage2Wrapper>
            <Image name="ellipse2.png" />
          </Styled.EllipseImage2Wrapper>
          <Styled.IntroWrapper>
            <Styled.IntroTitle>
              {Config.main_second.title.map((text, index) => (
                <Styled.IntroUnderline
                  key={text}
                  trigger={currentPage === 1}
                  delay={600 + index * 200}
                  repeat
                >
                  {text}
                </Styled.IntroUnderline>
              ))}
            </Styled.IntroTitle>
            <Styled.IntroContent>
              <Styled.NotMobileContentTitle>{ Config.main_second.notMobileParagraphTitle }</Styled.NotMobileContentTitle>
              <Styled.NotMobileContentList>
                { Config.main_second.notMobileParagraphs.map((paragraph, index) => (
                  <Styled.ContentItem key={index}>{paragraph}</Styled.ContentItem>
                ))}
              </Styled.NotMobileContentList>
              <Styled.MobileContentTitle dangerouslySetInnerHTML={{ __html: Config.main_second.mobileParagraphTitle }} />
              <Styled.MobileContentList>
                { Config.main_second.mobileParagraphs.map((paragraph, index) => (
                  <Styled.ContentItem key={index}>{paragraph}</Styled.ContentItem>
                ))}
              </Styled.MobileContentList>
            </Styled.IntroContent>
          </Styled.IntroWrapper>
        </Styled.IntroPageInnerWrapper>
      </Page>
      <Page>
        <Styled.IntroPageInnerWrapper fixed={isIntroFixed} hidden={!leavingIntroPage(2) && currentPage !== 2}>
          <Styled.EllipseImage1Wrapper>
            <Image name="ellipse1.png" />
          </Styled.EllipseImage1Wrapper>
          <Styled.EllipseImage2Wrapper>
            <Image name="ellipse2.png" />
          </Styled.EllipseImage2Wrapper>
          <Styled.IntroWrapper>
            <Styled.IntroTitle>
              {Config.main_third.title.map((text, index) => (
                <Styled.IntroUnderline
                  key={text}
                  trigger={currentPage === 2}
                  delay={600 + index * 200}
                  repeat
                >
                  {text}
                </Styled.IntroUnderline>
              ))}
            </Styled.IntroTitle>
            <Styled.IntroContent>
              {Config.main_third.notMobileParagraphs.map((paragraph, index) => (
                <Styled.NotMobileIntroListItem key={index}>
                  <Styled.Icon>
                    <SVGIcon name="check" size={Size.Large} />
                  </Styled.Icon>
                  {paragraph}
                </Styled.NotMobileIntroListItem>
              ))}
              {Config.main_third.mobileParagraphs.map((paragraph, index) => (
                <Styled.MobileIntroListItem key={index}>
                  <Styled.Icon>
                    <SVGIcon name="check" size={Size.Large} />
                  </Styled.Icon>
                  {paragraph}
                </Styled.MobileIntroListItem>
              ))}
            </Styled.IntroContent>
          </Styled.IntroWrapper>
        </Styled.IntroPageInnerWrapper>
      </Page>
      <Page>
        <Styled.CommonPageBackground>
          <Styled.CommonPageInnerWrapper>
            <Styled.IntroParagraph1>
              {Config.main_fourth.paragraph1}
            </Styled.IntroParagraph1>
            <Styled.IntroParagraph2>
              {Config.main_fourth.paragraph2}
            </Styled.IntroParagraph2>
            <Styled.IntroItemsWrapper>
              {Config.main_fourth.items.map((item, index) => (
                <Styled.IntroItemWrapper key={index}>
                  <Styled.IntroImageItemWrapper>
                    <Image name={IntroMainImages[index]} />
                  </Styled.IntroImageItemWrapper>
                  <Styled.IntroItemTabletIcon name={IntroIconImages[index]} />
                  <Styled.IntroItemContentWrapper>
                    <Styled.IntroItemTitle show={currentInfoItemIndex === index}>
                      <Styled.IntroItemMobileIcon name={IntroIconImages[index]} />
                      {item.title}
                      <Styled.ContentToggleButton
                        lotate={currentInfoItemIndex === index}
                        src={Arrow}
                        alt=""
                        onClick={() => handleInfoItem(index)}
                      />
                    </Styled.IntroItemTitle>
                    <Styled.IntroItemContent show={currentInfoItemIndex === index}>
                      {item.content}
                    </Styled.IntroItemContent>
                  </Styled.IntroItemContentWrapper>
                </Styled.IntroItemWrapper>
              ))}
            </Styled.IntroItemsWrapper>
          </Styled.CommonPageInnerWrapper>
        </Styled.CommonPageBackground>
      </Page>
      <Page>
        <Styled.BubblePageInnerWrapper>
          <Styled.IntroParagraph1>
            {Config.main_fifth.paragraph1}
          </Styled.IntroParagraph1>
          <Styled.IntroParagraph2>
            {Config.main_fifth.paragraph2}
          </Styled.IntroParagraph2>
          <Styled.ChattingImageWrapper>
            <Styled.ChattingImage1 show>
              <Image name="chat1" />
            </Styled.ChattingImage1>
            <Styled.ChattingImage2 show>
              <Image name="chat2" />
            </Styled.ChattingImage2>
            <Styled.ChattingImage3 show>
              <Image name="chat3" />
            </Styled.ChattingImage3>
          </Styled.ChattingImageWrapper>
          <Styled.PeopleImageWrapper>
            <Image name="people.png" />
          </Styled.PeopleImageWrapper>
        </Styled.BubblePageInnerWrapper>
      </Page>
      <Page>
        <Styled.ProjectPageBackground>
          <Styled.ProjectPageWrapper>
            <Styled.ProjectPageInnerWrapper>
              <Styled.ProjectTitle>
                { Config.main_sixth.title.map((text, index) => (
                  <Styled.ProjectUnderline
                    key={text}
                    trigger={currentPage === 5}
                    delay={600 + index * 500}
                    repeat
                  >
                    {text}
                  </Styled.ProjectUnderline>
                ))}
              </Styled.ProjectTitle>
              <Styled.ProjectButton to="/project">
                <Styled.ProjectButtonText>
                  { Config.main_sixth.button }
                </Styled.ProjectButtonText>
                <Styled.ProjectButtonIcon>
                  <SVGIcon name="right-arrow" size={Size.XSmall} />
                </Styled.ProjectButtonIcon>
              </Styled.ProjectButton>
            </Styled.ProjectPageInnerWrapper>
          </Styled.ProjectPageWrapper>
        </Styled.ProjectPageBackground>
      </Page>
    </Pagination>
  )
}

export default useLayout(IndexPage)
