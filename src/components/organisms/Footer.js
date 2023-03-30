import React from 'react'

import styled from 'styled-components'

import { SOCIAL_LINKS } from '../../constants/SocialLinks'
import IconButton from '../atoms/IconButton'

const SocialLinkWrap = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  flex-direction: row;
  padding: 0.5em 0.5em 0 2em;
  width: fit-content;
`

const Copyright = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 2em;
  img {
    height: 15px;
    width: 15px;
    margin-right: 7px;
  }
`

const Footer = () => {
  return (
    <footer>
      <Copyright>
        <p>latest commit dd0231d</p>
      </Copyright>
      <SocialLinkWrap>
        {SOCIAL_LINKS.map((item, idx) => (
          <IconButton
            role="list item"
            key={`Social Link no.${idx + 1}`}
            type="link"
            url={item.url}
            name={item.name}
            image={item.logo}
          />
        ))}
      </SocialLinkWrap>
    </footer>
  )
}

export default Footer
