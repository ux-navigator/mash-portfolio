/* External dependencies */
import React, { useContext, useEffect, useState, useCallback, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

/* Internal dependencies */
import { GlobalContext } from 'contexts/globalContext'
import DeviceService from 'services/DeviceService'
import useLayout from 'hooks/useLayout'
import Device from 'constants/Device'
import { isSafari } from 'utils/browserUtils'
import SEO from 'components/SEO'
import Pagination, { Page } from 'components/Pagination'
import Image from 'components/Image'
import SVGIcon from 'components/SVGIcon'
import * as Styled from 'styles/pageStyles/index.styled'
import ship from 'images/ship.png'
import Arrow from 'images/arrow.png'
import Config from '../../config'

const IntroMainImages = ['meeting.png', 'thinking.png', 'study.png']
const IntroIconImages = ['glass.png', 'statistic.png', 'pencil.png']

function IndexPage() {
  const { state: { currentPage } } = useContext(GlobalContext)

  const [currentInfoItemIndex, setCurrentInfoItemIndex] = useState<number | null>(null)
  const [contactItemIndex, setContactItemIndex] = useState<number | null>(null)
  const [currentProjectSlide, setCurrentProjectSlide] = useState(0)

  const paginationRef = useRef<{ handleMovePage: (pageIndex: number) => void }>(null)

  const handleInfoItem = useCallback((index: number) => {
    if (index === currentInfoItemIndex) {
      setCurrentInfoItemIndex(null)
      return
    }
    setCurrentInfoItemIndex(index)
  }, [currentInfoItemIndex])

  const handleEnterContactItem = useCallback((index: number) => {
    setContactItemIndex(index)
  }, [])

  const handleLeaveContactItem = useCallback(() => {
    setContactItemIndex(null)
  }, [])

  const handleClickMainArrow = useCallback(() => {
    if (paginationRef.current) {
      paginationRef.current.handleMovePage(2)
    }
  }, [])

  return (
    <>
      <SEO title="Lee JinYoung | home" />
      <Pagination ref={paginationRef}>
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
            <Styled.Arrow onClick={handleClickMainArrow}>
              <Styled.ArrowIcon name="main-arrow" />
            </Styled.Arrow>
          </Styled.FirstPageInnerWrapper>
        </Page>
        <Page>
          <Styled.IntroPageInnerWrapper>
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
              <Styled.ChattingImage1
                trigger={currentPage === 3}
                delay={500}
                repeat
              >
                <Image name="chat1" />
              </Styled.ChattingImage1>
              <Styled.ChattingImage2
                trigger={currentPage === 3}
                delay={1000}
                repeat
              >
                <Image name="chat2" />
              </Styled.ChattingImage2>
              <Styled.ChattingImage3
                trigger={currentPage === 3}
                delay={1500}
                repeat
              >
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
                      trigger={currentPage === 4}
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
                    <SVGIcon name="right-arrow" size={16} />
                  </Styled.ProjectButtonIcon>
                </Styled.ProjectButton>
              </Styled.ProjectPageInnerWrapper>
            </Styled.ProjectPageWrapper>
          </Styled.ProjectPageBackground>
        </Page>
        <Page>
          <Styled.BlogPageWrapper>
            <Styled.BlogMainTitle>
            { Config.main_seven.paragraph1 }
            </Styled.BlogMainTitle>
            <Styled.BlogSubTitle>
            { Config.main_seven.paragraph2 }
            </Styled.BlogSubTitle>
            <Styled.ProjectListWrapper>
              { Config.main_seven.projects.map((project, index) => (
                <Styled.ProjectWrapper
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Styled.ProjectImageWrapper>
                    <Styled.ProjectImage name={`main_project/${project.image}`} />
                  </Styled.ProjectImageWrapper>
                  <Styled.ProjectContent>
                    <Styled.ProjectName>
                      { project.title }
                    </Styled.ProjectName>
                    <Styled.ProjectCreatedAt>
                      { project.createdAt }
                    </Styled.ProjectCreatedAt>
                  </Styled.ProjectContent>
                </Styled.ProjectWrapper>
              ))}
              <Styled.ProjectTabletLinkListWrapper>
                <Styled.ProjectLinkListWrapper>
                  <Styled.LinkWrapper
                    href={Config.main_seven.tistory}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Styled.LinkIcon name="tistory" />
                    <Styled.LinkText>
                      Tistory
                    </Styled.LinkText>
                  </Styled.LinkWrapper>
                  <Styled.LinkWrapper
                    href={Config.main_seven.brunch}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Styled.LinkIcon name="brunch" />
                    <Styled.LinkText>
                      Brunch
                    </Styled.LinkText>
                  </Styled.LinkWrapper>
                </Styled.ProjectLinkListWrapper>
              </Styled.ProjectTabletLinkListWrapper>
            </Styled.ProjectListWrapper>
            <Styled.ProjectListMobileWrapper>
              <Slider
                className="slider variable-width"
                dots
                infinite
                centerMode
                variableWidth
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                customPaging={(index) => <Styled.CarouselDot active={index === currentProjectSlide} />}
                beforeChange={(_, nextSlide) => setCurrentProjectSlide(nextSlide)}
              >
                { Config.main_seven.projects.map((project, index) => (
                  <Styled.ProjectWrapper
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Styled.ProjectImageWrapper>
                      <Styled.ProjectImage name={`main_project/${project.image}`} />
                    </Styled.ProjectImageWrapper>
                    <Styled.ProjectContent>
                      <Styled.ProjectName>
                        { project.title }
                      </Styled.ProjectName>
                      <Styled.ProjectCreatedAt>
                        { project.createdAt }
                      </Styled.ProjectCreatedAt>
                    </Styled.ProjectContent>
                  </Styled.ProjectWrapper>
                ))}
              </Slider>
            </Styled.ProjectListMobileWrapper>
            <Styled.ProjectNotTabletLinkListWrapper>
              <Styled.ProjectLinkListWrapper>
                <Styled.LinkWrapper
                  href={Config.main_seven.tistory}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Styled.LinkIcon name="tistory" />
                  <Styled.LinkText>
                    Tistory
                  </Styled.LinkText>
                </Styled.LinkWrapper>
                <Styled.LinkWrapper
                  href={Config.main_seven.brunch}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Styled.LinkIcon name="brunch" />
                  <Styled.LinkText>
                    Brunch
                  </Styled.LinkText>
                </Styled.LinkWrapper>
              </Styled.ProjectLinkListWrapper>
            </Styled.ProjectNotTabletLinkListWrapper>
          </Styled.BlogPageWrapper>
        </Page>
        <Page>
          <Styled.ContactPageWrapper>
            <Styled.ContactPageInnerWrapper>
              <Styled.ContactTitle>
                <Styled.ContactUnderline
                  key={Config.main_eight.title}
                  trigger={currentPage === 6 || currentPage === 7}
                  delay={600}
                  repeat
                >
                  {Config.main_eight.title}
                </Styled.ContactUnderline>
              </Styled.ContactTitle>
              <Styled.ContactSubTitle>
                {Config.main_eight.subTitle}
              </Styled.ContactSubTitle>
              <Styled.ContactInfoWrapper>
                {Config.main_eight.items.map((item, index) => (
                  <Styled.ContactInfoItem
                    key={index}
                    href={item.link}
                    target="_blank"
                    onMouseEnter={() => handleEnterContactItem(index)}
                    onMouseLeave={handleLeaveContactItem}
                  >
                    <Styled.ContactIcon>
                      <SVGIcon
                        name={`${item.icon}${contactItemIndex === index ? '-blue' : ''}`}
                        size={DeviceService.getDevice() === Device.Mobile ? 20: 28}
                      />
                    </Styled.ContactIcon>
                    <Styled.ContactContent isKorean={item.language === 'ko'}>
                      {item.content}
                    </Styled.ContactContent>
                  </Styled.ContactInfoItem>
                ))}
              </Styled.ContactInfoWrapper>
            </Styled.ContactPageInnerWrapper>
          </Styled.ContactPageWrapper>
        </Page>
        <Styled.FooterPage>
          <Styled.FooterWrapper>
            <Styled.FooterLogoWrapper>
              <Styled.FooterLogo name="footer-logo" />
            </Styled.FooterLogoWrapper>
            <Styled.FooterContent>
              <Styled.FooterReserve>{ Config.main_footer.reserve }</Styled.FooterReserve>
              <Styled.FooterDescription>{ Config.main_footer.description }</Styled.FooterDescription>
            </Styled.FooterContent>
          </Styled.FooterWrapper>
        </Styled.FooterPage>
      </Pagination>
    </>
  )
}

export default useLayout(IndexPage)
