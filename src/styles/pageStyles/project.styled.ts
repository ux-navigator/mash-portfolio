/* External dependencies */
import styled, { css } from 'styled-components'

/* Internal dependencies */
import Image from 'components/Image'
import SVGIcon from 'components/SVGIcon'

interface ModalContainerProps {
  show: boolean
}

interface ModalInputProps {
  hasError: boolean
}

interface FilterProps {
  active: boolean;
}

interface ContactContentProps {
  isKorean: boolean
}

export const ProjectContainer = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding-top: 144px;

  @media ${({ theme }) => theme.media.tablet} {
    width: 680px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
    padding-top: 60px;
  }
`

export const ModalContainer = styled.div<ModalContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.3s;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100000000;

  ${({ show }) => show && css`
    visibility: visible;
    opacity: 1;
  `}
`

export const Modal = styled.div`
  width: 383px;
  border-radius: 6px;
  background-color: white;

  @media ${({ theme }) => theme.media.mobile} {
    width: 340px;
  }
`

export const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 20px;
  color: #222222;
  font-family: 'Gothic Bold';
  box-sizing: border-box;
  border-bottom: 1px solid #F2F2F2;
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`

export const ModalDescription = styled.div`
  width: 74%;
  word-break: keep-all;
  line-height: 1.5rem;
  color: #2C3E50;
  font-size: 1rem;
  font-family: 'Gothic Regular';

  @media ${({ theme }) => theme.media.mobile} {
    width: 84%;
  }
`

export const ModalInput = styled.input<ModalInputProps>`
  width: 100%;
  height: 46px;
  margin-top: 20px;
  padding: 0 12px;
  box-sizing: border-box;
  color: #747474;
  font-size: 0.875rem;
  outline: none;
  border: 1px solid #3370E8;
  border-radius: 6px;

  ${({ hasError }) => hasError && css`
    border-color: #F4800B;
  `}
`

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`

export const ModalCancel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 36px;
  background-color: #EBEBEB;
  color: #747474;
  font-family: 'Gothic Regular';
  border-radius: 4px;
  cursor: pointer;
`

export const ModalConfirm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 36px;
  margin-left: 12px;
  background-color: #DBE7FF;
  color: #3370E8;
  font-family: 'Gothic Regular';
  border-radius: 4px;
  cursor: pointer;
`

export const ProjectTitle = styled.div`
  margin-top: 50px;
  font-family: 'Gothic Bold';
  font-size: 38px;
  line-height: 54px;

  @media ${({ theme }) => theme.media.mobile} {
    width: 335px;
    margin: 30px auto 0;
  }
`

export const ProjectSubTitle = styled.p`
  margin-top: 10px;
  color: #4F5A65;
  font-family: 'Gothic Regular';
  font-size: 20px;

  @media ${({ theme }) => theme.media.mobile} {
    width: 335px;
    margin: 14px auto 0;
  }
`

export const Filter = styled.div<FilterProps>`
  width: fit-content;
  padding: 2px 0;
  color: #E0E5EB;
  font-family: 'Mark Pro Bold';
  font-size: 40px;
  white-space: nowrap;
  border-bottom: 4px solid white;
  cursor: pointer;

  ${({ active }) => active && css`
    color: #3370E8;
    border-bottom-color: #3370E8;
  `}
`

export const FilterWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 80px;
  overflow-x: scroll;

  ${Filter} + ${Filter} {
    margin-left: 60px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    flex-direction: column;
    width: 335px;
    margin: 48px auto 0;

    ${Filter} + ${Filter} {
      margin-left: 0;
      margin-top: 20px;
    }
  }
`

export const ProjectItemTitle = styled.p`
  max-width: 90%;
  color: white;
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: bold;
  font-family: 'Gothic Bold';
`

export const ProjectItemPeriod = styled.p`
  max-width: 90%;
  margin-top: 6px;
  color: white;
  text-align: center;
  font-size: 0.875rem;
  font-family: 'Gothic Regular';
`

export const ProjectImageBackground = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  background-color: rgba(0, 0, 0, 0.2);
  transition: opacity 0.45s;
  z-index: 9998;
`

export const ProjectImage = styled(Image)`
  width: 100%;
  height: 100%;
  transition: transform 0.45s;
`

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 504px;
  height: 378px;
  box-shadow: 0px 4px 16px rgba(25, 31, 41, 0.16);
  cursor: pointer;

  &:hover {
    ${ProjectImage} {
      transform: scale(1.1);
    }

    ${ProjectImageBackground} {
      opacity: 1;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    width: 330px;
    height: 248px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 335px;
    height: 252px;
  }
`

export const ProjectListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 68px;

  ${ProjectWrapper} + ${ProjectWrapper} {
    margin-top: 40px;

    &:nth-of-type(2) {
      margin-top: 0;
    }
  }

  @media ${({ theme }) => theme.media.tablet} {
    ${ProjectWrapper} + ${ProjectWrapper} {
      margin-top: 20px;
    }
  }

  @media ${({ theme }) => theme.media.mobile} {
    align-items: center;
    flex-direction: column;

    ${ProjectWrapper} + ${ProjectWrapper} {
      margin-top: 20px;

      &:nth-of-type(2) {
      margin-top: 20px;
    }
    }
  }
`

export const ProjectMainImage = styled.div`
  position: relative;
  width: 100%;
  height: 329px;
  overflow: hidden;

  @media ${({ theme }) => theme.media.tablet} {
    height: 215px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    height: 218px;
  }
`

export const Tag = styled.div`
  padding: 7px 10px;
  box-sizing: border-box;
  font-family: 'Mark Pro Light';
  font-size: 12px;
  border: 1px solid #D1D1D1;
  border-radius: 4px;

  @media ${({ theme }) => theme.media.tablet} {
    padding: 4px 6px;
    font-size: 8px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    padding: 4px 6px;
    font-size: 8px;
  }
`

export const LockIcon = styled(SVGIcon)`
  margin-left: auto;
`

export const ProjectContent = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  padding: 0 16px;
  box-sizing: border-box;

  ${Tag} + ${Tag} {
    margin-left: 10px;
  }
`

export const ContactPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding-top: 200px;
  box-sizing: border-box;

  @media ${({ theme }) => theme.media.tablet} {
    width: 680px;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 100%;
    max-width: 375px;
    padding-left: 20px;
  }
`

export const ContactPageInnerWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const ContactTitle = styled.div`
  font-family: 'Mark Pro Bold';
  font-size: 4rem;
  color: #3370E8;

  @media ${({ theme }) => theme.media.mobile} {
    font-size: 2.625rem;
  }
`

export const ContactSubTitle = styled.p`
  margin-top: 1.125rem;
  font-family: 'Mark Pro Light';
  font-size: 1.375rem;
  color: #2C3E50;

  @media ${({ theme }) => theme.media.tablet} {
    width: 25.5rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    width: 18.5rem;
    margin-top: 0.875rem;
    font-size: 1rem;
  }
`

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.125rem;
  height: 3.125rem;
  background-color: #FFF;
  border: 2px solid black;
  border-radius: 50%;

  @media ${({ theme }) => theme.media.mobile} {
    width: 2.5rem;
    height: 2.5rem;
  }
`

export const ContactContent = styled.div<ContactContentProps>`
  margin-left: 1rem;
  font-family: 'Mark Pro Bold';
  font-size: 1.125rem;

  ${({ isKorean }) => isKorean && css`
    font-family: 'Gothic Bold';
  `}

  @media ${({ theme }) => theme.media.mobile} {
    margin-left: 0.75rem;
    font-size: 1rem;
  }
`

export const ContactInfoItem = styled.a`
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;

  &:hover {
    ${ContactIcon} {
      box-shadow: 10px 10px 16px 1px rgba(0, 0, 0, .2);
      border-color: #3370E8;

      @media ${({ theme }) => theme.media.mobile} {
        box-shadow: 6px 6px 12px 1px rgba(0, 0, 0, .2);
      }
    }

    ${ContactContent} {
      color: #3370E8;
    }
  }
`

export const ContactInfoWrapper = styled.div`
  margin-top: 7.625rem;

  ${ContactInfoItem} + ${ContactInfoItem} {
    margin-top: 1.5rem;
  }

  @media ${({ theme }) => theme.media.tablet} {
    margin-top: 5.5rem;
  }

  @media ${({ theme }) => theme.media.mobile} {
    margin-top: 5.25rem;

    ${ContactInfoItem} + ${ContactInfoItem} {
      margin-top: 1.125rem;
    }
  }
`

export const ContactBackgroundImage = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 32.5rem;

  @media ${({ theme }) => theme.media.tablet} {
    display: none;
  }

  @media ${({ theme }) => theme.media.mobile} {
    display: none;
  }
`

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px 0 50px;
`

export const FooterLogoWrapper = styled.div`
  width: 26px;
  height: 26px;

  @media ${({ theme }) => theme.media.mobile} {
    width: 20px;
    height: 20px;
  }
`

export const FooterLogo = styled(SVGIcon)`
  width: 100%;
`

export const FooterContent = styled.div`
  margin-left: 0.5rem;
  font-family: 'Gothic Regular';
  color: #B9B9B9;
`

export const FooterReserve = styled.p`
  line-height: 1.125rem;
  font-size: 0.8125rem;

  @media ${({ theme }) => theme.media.mobile} {
    line-height: 1rem;
    font-size: 0.625rem;
    font-family: 'Gothic Regular';
  }
`

export const FooterDescription = styled.p`
  line-height: 1.125rem;
  font-size: 0.8125rem;

  @media ${({ theme }) => theme.media.mobile} {
    line-height: 0.75rem;
    font-size: 0.4375rem;
  }
`
