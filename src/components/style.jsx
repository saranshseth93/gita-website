import { Container } from '@mui/material'
import { styled } from 'styled-components'
import { brandColors } from '../theme';

export const StyledContainer = styled(Container)`
    background-color: ${brandColors.darkBlue};
    color: ${brandColors.gold};
    padding: 0.5rem 0;
    display: flex !important;
    width: 100%;
    height: 140px;
    align-items: center;
    justify-content: center;
    `;