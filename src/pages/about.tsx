/* External dependencies */
import React, { useState, useCallback } from 'react'

/* Internal dependencies */
import DeviceService from 'services/DeviceService'
import useLayout from 'hooks/useLayout'
import Device from 'constants/Device'
import SVGIcon from 'components/SVGIcon'
import Image from 'components/Image'
import * as Styled from 'styles/pageStyles/about.styled'
import Config from '../../config'
import ProfileImage from 'images/jinyoung.png'

function AboutPage() {
  const [contactItemIndex, setContactItemIndex] = useState<number | null>(null)

  const handleEnterContactItem = useCallback((index: number) => {
    setContactItemIndex(index)
  }, [])

  const handleLeaveContactItem = useCallback(() => {
    setContactItemIndex(null)
  }, [])

  return (
    <Styled.AboutContainer>
      <Styled.ProfileWrapper>
        <Styled.ProfileImage src={ProfileImage}/>
        <Styled.ProfileInfo>
          <Styled.NameWrapper>
            <Styled.NameKor>{Config.about.profile.nameKor}</Styled.NameKor>
            <Styled.NameEng>{Config.about.profile.nameEng}</Styled.NameEng>
          </Styled.NameWrapper>
          <Styled.BirthDay>{Config.about.profile.birthday}</Styled.BirthDay>
        </Styled.ProfileInfo>
      </Styled.ProfileWrapper>
      {Config.about.history.map((history, index) => (
        <Styled.ContentSection key={index}>
          <Styled.SectionTitle>{history.title}</Styled.SectionTitle>
          {history.histories.map((historyItem, index) => (
            <Styled.HistoryWrapper key={index}>
              {historyItem.itemTitle && <Styled.HistoryItemTitle isKorean={historyItem.isKorean}>{historyItem.itemTitle}</Styled.HistoryItemTitle>}
              <Styled.HistpryContentWrapper>
                {historyItem.items.map((item, index) => (
                  <Styled.HistoryContentItem key={index}>{item}</Styled.HistoryContentItem>
                ))}
              </Styled.HistpryContentWrapper>
            </Styled.HistoryWrapper>
          ))}
        </Styled.ContentSection>
      ))}
      <Styled.ContactPageWrapper>
        <Styled.ContactPageInnerWrapper>
          <Styled.ContactTitle>
            {Config.main_eight.title}
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
          <Styled.ContactBackgroundImage>
            <Image name="background-contact.png" />
          </Styled.ContactBackgroundImage>
        </Styled.ContactPageInnerWrapper>
      </Styled.ContactPageWrapper>
      <Styled.FooterWrapper>
        <Styled.FooterLogoWrapper>
          <Styled.FooterLogo name="footer-logo" />
        </Styled.FooterLogoWrapper>
        <Styled.FooterContent>
          <Styled.FooterReserve>{ Config.main_footer.reserve }</Styled.FooterReserve>
          <Styled.FooterDescription>{ Config.main_footer.description }</Styled.FooterDescription>
        </Styled.FooterContent>
      </Styled.FooterWrapper>
    </Styled.AboutContainer>
  )
}

export default useLayout(AboutPage)
