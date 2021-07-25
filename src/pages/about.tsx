/* External dependencies */
import React from 'react'

/* Internal dependencies */
import useLayout from 'hooks/useLayout'
import * as Styled from 'styles/pageStyles/about.styled'
import Config from '../../config'
import ProfileImage from 'images/jinyoung.png'

function AboutPage() {
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
    </Styled.AboutContainer>
  )
}

export default useLayout(AboutPage)
