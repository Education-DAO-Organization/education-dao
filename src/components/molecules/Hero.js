import React from 'react'

import styled from 'styled-components'

import shapes from '../../assets/svg/shapes.svg'

const Wrapped = styled.div`
  background-image: url(${shapes});
  width: 100%;
  background-size: cover;
  height: 300px;
` 

const Hero = () => {

  return (
    <Wrapped>
    </Wrapped>
  )

}

export default Hero