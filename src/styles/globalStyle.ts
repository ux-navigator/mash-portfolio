/* External dependencies */
import { createGlobalStyle } from 'styled-components'

/* Internal dependencies */
import fonts from 'styles/fonts/fonts'

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
    border: 0;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  html {
    font-size: 16px;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }
  body.nonScrollable {
    height: 100%;
    overflow: hidden;
    touch-action: none;
  }

  @font-face {
    font-family: 'Mark Pro Regular';
    font-style: normal;
    font-weight: normal;
    src: local('Mark Pro Regular'), url(${fonts.MarkProRegular}) format('woff');
  }


  @font-face {
    font-family: 'Mark Pro Extra Light';
    font-style: normal;
    font-weight: normal;
    src: local('Mark Pro Extra Light'), url(${fonts.MarkProExtraLight}) format('woff');
  }


  @font-face {
    font-family: 'Mark Pro Light';
    font-style: normal;
    font-weight: normal;
    src: local('Mark Pro Light'), url(${fonts.MarkProLight}) format('woff');
  }


  @font-face {
    font-family: 'Mark Pro Book';
    font-style: normal;
    font-weight: normal;
    src: local('Mark Pro Book'), url(${fonts.MarkProBook}) format('woff');
  }


  @font-face {
    font-family: 'Mark Pro Medium';
    font-style: normal;
    font-weight: normal;
    src: local('Mark Pro Medium'), url(${fonts.MarkProMedium}) format('woff');
  }


  @font-face {
    font-family: 'Mark Pro Bold';
    font-style: normal;
    font-weight: normal;
    src: local('Mark Pro Bold'), url(${fonts.MarkProBold}) format('woff');
  }


  @font-face {
    font-family: 'Mark Pro Heavy';
    font-style: normal;
    font-weight: normal;
    src: local('Mark Pro Heavy'), url(${fonts.MarkProHeavy}) format('woff');
  }

  @font-face {
    font-family: 'Gothic Black';
    src: url(${fonts.GothicA1Black});
  }

  @font-face {
    font-family: 'Gothic Bold';
    src: url(${fonts.GothicA1Bold});
  }

  @font-face {
    font-family: 'Gothic ExtrBold';
    src: url(${fonts.GothicA1ExtraBold});
  }

  @font-face {
    font-family: 'Gothic ExtraLight';
    src: url(${fonts.GothicA1ExtraLight});
  }

  @font-face {
    font-family: 'Gothic Light';
    src: url(${fonts.GothicA1Light});
  }

  @font-face {
    font-family: 'Gothic Medium';
    src: url(${fonts.GothicA1Medium});
  }

  @font-face {
    font-family: 'Gothic Regular';
    src: url(${fonts.GothicA1Regular});
  }

  @font-face {
    font-family: 'Gothic SemiBold';
    src: url(${fonts.GothicA1SemiBold});
  }

  @font-face {
    font-family: 'Gothic Thin';
    src: url(${fonts.GothicA1Thin});
  }
`
