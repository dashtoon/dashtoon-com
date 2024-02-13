import { t } from 'i18next';
import { Link } from 'react-router-dom';
import React from 'react';
import { useTheme } from '@mui/material/styles';

const TermsAndConditionsComponent = () => {
  const theme = useTheme()
  return (
    <div style={{ color: "grey", fontSize: '12px' }}>
      {t('By using our platform, you are subjected to Dashtoon’s ')}
      <Link
        to="https://dashtoon.com/terms-and-conditions/"
        style={{ color: theme.palette.primary.main, textDecoration: 'none' }}
        target="_blank"
      >
        {t('terms & conditions ')}
      </Link>
      {t('and ')}
      <Link
        to="https://dashtoon.com/privacy-policy"
        style={{ color: theme.palette.primary.main, textDecoration: 'none' }}
        target="_blank"
      >
        {t('privacy policy')}
      </Link>
    </div>
  )
}
export default TermsAndConditionsComponent