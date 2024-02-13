import { styled } from '@mui/material/styles';

export const LeftContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
}));

export const FormHeader = styled('div')<{ isSmallScreen: boolean }>(({ theme, isSmallScreen }) => ({
  fontSize: isSmallScreen ? '20px' : '32px',
  fontWeight: 600,
  lineHeight: '36px',
  marginBottom: isSmallScreen ? '0px' : '16px',
  width: isSmallScreen ? '100%' : '90%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
}));
