import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { t } from 'i18next';
import { Button, CircularProgress } from '@mui/material';
import * as React from 'react';
import { color } from '../../Constants/Colors';
import { trackEvent } from '../../Utils/Analytics';
import { TrackingEvents } from '../../Constants/TrackingEvents';

interface CustomButtonProps {
  text: string;
  onClick: () => void;
  backgroundColor?: string | undefined;
  foregroundColor?: string | undefined;
  hasIcon?: boolean;
  icon?: ReactJSXElement;
  height?: string;
  width?: string;
  minWidth?: string;
  variant: 'text' | 'outlined' | 'contained' | undefined;
  isLoading?: boolean;
  hasBorder?: boolean;
  disabled?: boolean;
  borderColor?: string;
  shortcutText?: string;
  padding?: string;
  style?: React.CSSProperties;
  hoverStyle?: React.CSSProperties;
}

const CustomButton = ({
  text,
  onClick,
  backgroundColor,
  foregroundColor,
  hasIcon = false,
  icon,
  height,
  width,
  minWidth,
  variant,
  isLoading = false,
  hasBorder = true,
  disabled = false,
  borderColor,
  shortcutText,
  padding,
  style,
  hoverStyle,
}: CustomButtonProps) => {
  const handleClick = () => {
    if (!isLoading) {
      trackEvent(
        {
          event: TrackingEvents.buttonClicked,
          properties: {
            buttonName: text,
          },
        },
        'CONSUMER'
      );
      onClick();
    }
  };
  return (
    <Button
      variant={variant}
      disabled={disabled || isLoading}
      sx={{
        textTransform: 'none',
        height: height,
        width: width,
        borderRadius: '8px',
        display: 'flex',
        justifyContent: shortcutText ? 'space-between' : 'center',
        alignContent: 'center',
        backgroundColor: backgroundColor,
        color: foregroundColor,
        padding: padding ? padding : hasIcon ? '0px 8px 0 0' : '0px',
        alignItems: 'center',
        border: hasBorder ? '1px solid' : 'none',
        borderColor: borderColor,
        minWidth: minWidth ?? '64px',
        ':hover': {
          backgroundColor: backgroundColor,
          color: foregroundColor,
          borderColor: borderColor,
          opacity: 0.8,
          ...hoverStyle,
        },
        ...style,
      }}
      onClick={() => handleClick()}
    >
      {!isLoading && hasIcon && icon}
      {isLoading && hasIcon && (
        <div
          style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress style={{ color: foregroundColor }} size={16} />{' '}
        </div>
      )}
      {isLoading && !hasIcon ? (
        <div
          style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress style={{ color: foregroundColor }} size={16} />
        </div>
      ) : shortcutText ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            padding: '0px 8px 0px 8px',
          }}
        >
          <div>{t(text)}</div>
          <div
            style={{
              fontSize: '14px',
              color: color['20'],
              backgroundColor: backgroundColor,
              fontWeight: 600,
            }}
          >
            {shortcutText}
          </div>
        </div>
      ) : (
        <div>{t(text)}</div>
      )}
    </Button>
  );
};

export default CustomButton;
