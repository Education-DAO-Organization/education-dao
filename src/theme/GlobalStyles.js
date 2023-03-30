import { lighten, transparentize } from 'polished'
import { createGlobalStyle } from 'styled-components'

import fraktionMonoRegular from '../assets/fonts/Fraktion-Mono__regular.otf'
import fraktionSansBold from '../assets/fonts/Fraktion-Sans__bold.otf'
import fraktionSansLight from '../assets/fonts/Fraktion-Sans__light.otf'
import santralMedium from '../assets/fonts/santral/SantralMedium.ttf'

const GlobalStyles = createGlobalStyle`
  @font-face {
  font-family: 'Fraktion Sans Light';
  src: url(${fraktionSansLight});
  font-style: normal;
  font-weight: normal;
  }

  @font-face {
  font-family: 'Fraktion Mono Regular';
  src: url(${fraktionMonoRegular});
  font-style: normal;
  font-weight: normal;
  }

  @font-face {
  font-family: 'Santral Medium';
  src: url(${santralMedium});
  font-style: normal;
  font-weight: normal;
  }

  @font-face {
  font-family: 'Fraktion Sans Bold';
  src: url(${fraktionSansBold});
  font-style: normal;
  font-weight: normal;
  }

  body {
    margin: 0;
    padding: 0;
    position: relative;
    // font-family: sofia-pro, sans-serif;
		font-family: 'Fraktion Sans Bold', sans-serif;
    font-weight: 300;
    // background-color: #16171d;
    // background-color: #1D1C1C;
		// background-color: #292524;
		background-color: #191917;
    width: 100vw;
    height: 100vh;
    #root {
      position: relative;
      width: 100vw;
      height: 100vh;
      overflow: scroll;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1em 0;
    margin: 0 2em;
  }

  footer {
    padding: 1em 0;
    margin: 0 2em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Fraktion Mono Regular', sofia-pro, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #fbfbfc;
    &::selection {
      background-color: #826FD8;
    }
  }

  h1 {
    font-size: 2.25em;
    margin-bottom: 0;
  }

  hr {
    color: ${lighten(0.025, '#16171d')};
  }

  p {
    font-family: 'Fraktion Sans Bold', sans-serif;
    padding-bottom: 0;
    color: #CDCDCD;
    padding: 0;
    margin: 0;
    &::selection {
      background-color: #826FD8;
    }
  }

	button {
		width: fit-content;
		padding: 0.75em 1em;
		font-family: 'Fraktion Sans Bold', sans-serif;
		cursor: pointer;
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: 0.5em;
		border-radius: 25px;
		img {
			height: 20px;
			width: 20px;
		}
	}

  a {
    font-weight: 300;
    font-style: normal;
    color: #E9AC65;
    text-decoration: none;
		font-family: 'Fraktion Sans Bold', sans-serif;
    &:hover {
      text-decoration: underline;
    }
    &:visited {}
    &::selection {
      background-color: #826FD8;
      color: #F1F1F1;
    }
  }

  code {
    background-color: ${transparentize(0.85, '#826FD8')};
    font-size: 0.8em;
    padding: 5px;
    border-radius: 5px;
    font-family: 'Fraktion Mono Regular';
    color: #826FD8;
    font-weight: 400;
    font-style: normal;
  }

  pre {
    font-family: pt-mono, monospace;
    code {
      padding: 0;
      color: hsl(60, 4%, 80%);
      background-color: transparent;
      border: none;
    }
  }

  ol {
    list-style-position: inside;
  }

  ul, ol {
    padding: 0;
    > * {
      color: #fbfbfc;
    }
  }

  blockquote {
    background-color: #2B2A2A;
    margin: 0;
    padding: 1.25em;
    box-sizing: border-box;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
    &::before {
      display: block;
      background-color: #826FD8;
      content: '';
      position: absolute;
      height: 100%;
      width: 5px;
      left: 0;
      top: 0;
    }
  }

  .twitter-tweet {
    padding: 2em;
  }
`

export default GlobalStyles
