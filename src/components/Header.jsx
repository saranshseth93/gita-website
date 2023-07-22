import React from 'react'
import { StyledContainer, StyledImage } from './style'
import logo from '../assets/logo.svg'


const Header = () => {
  return (
    <StyledContainer maxWidth={false}>
        <StyledImage src={logo} alt="logo" />
        
    </StyledContainer>
  )
}

export default Header