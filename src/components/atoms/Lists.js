import React from 'react'

import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

import file from '../../assets/svg/file.svg'

const UnorderedListItem = styled.li`
  color: #fff;
  ${'' /* border: 1px solid red; */}
  ${({ type }) =>
    type === 'code' &&
    css`
      list-style-position: inside;
      display: flex;
      flex-direction: row;
      div {
        display: grid;
        flex-direction: column;
        margin-bottom: 1em;
        code {
          width: fit-content;
        }
      }
      img {
        margin-top: 5px;
        margin-right: 5px;
        height: 1em;
      }
    `}
`

const OrderedListItem = styled.li``

export const UnorderedList = ({ children }) => {
  const isCode = children[0].type?.name
  return (
    <UnorderedListItem type={isCode}>
      {isCode === 'code'
        ? <>
          <img src={file} alt="File Marker" />
          <div>{children}</div>
        </>
        : children
      }
    </UnorderedListItem>
  )
}

export const OrderedList = ({ children }) => {
  return <OrderedListItem>{children}</OrderedListItem>
}

UnorderedList.propTypes = {
  children: PropTypes.array.isRequired,
}

OrderedList.propTypes = {
  children: PropTypes.array.isRequired,
}
