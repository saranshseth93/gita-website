import { Container } from '@mui/material'
import { styled } from 'styled-components'
import { brandColors } from '../theme';

export const StyledContainer = styled(Container)`
    background-color: rgba(11,57,84, 0.5);
    color: ${brandColors.gold};
    padding: 0.5rem 0;
    display: flex !important;
    width: 100%;
    height: 150px;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 600px) {
        height: 100px;
        background-color: rgba(11,57,84, 1);
        justify-content: center;
    }
    `;

    export const StyledTopWrapper = styled.div`
    width: 100%;
    height: 700px;
    position: relative;

    @media (max-width: 600px) {
        height: 340px;
    }
    `;

export const StyledImage = styled.img`
    width: 8%;
    @media (max-width: 600px) {
        width: 23%;
    }
    `;

    export const StyledBanner = styled.img`
    width: 100%;
    max-height: 700px;
    object-fit: cover;
    object-position: top;
    position: absolute;
    top: 0;
    z-index: -1;
    @media (max-width: 600px) {
        max-height: 300px;
        position: relative;
    }
    `;

    export const StyledHeading = styled.h1`
    width: 100%;
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
    padding: 0;
    color: ${brandColors.textColor};
    @media (max-width: 600px) {
        font-size: 2rem;
    }
    `;

    export const StyledBodyWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem;
    @media (max-width: 600px) {
        padding: 1rem;
    }
    `;

    export const StyledPara = styled.p`
    width: 100%;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
    padding: 0;
    color: ${brandColors.textColor};
    @media (max-width: 600px) {
        font-size: 1rem;
    }
    `;