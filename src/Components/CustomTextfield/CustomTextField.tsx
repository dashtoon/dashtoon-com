import React, { ChangeEventHandler, KeyboardEventHandler, useRef, useState } from 'react';
import { FormHelperText, IconButton, InputAdornment, TextField } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { t } from 'i18next';

interface CustomTextFieldProps {
  id?: string;
  label: string;
  name?: string;
  subLabel?: string;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
  type?: string;
  noOfLines?: number;
  style?: Object;
  width?: string;
  height?: string;
  onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>; // add inputProps prop
  enableAutofill?: boolean; // add enableAutofill prop
  tooltip?: string;
  showToggle?: boolean;
  ref?: React.Ref<HTMLInputElement>;
  isV2?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  id,
  label,
  placeholder,
  required,
  multiline,
  type,
  onChange,
  onKeyDown,
  onBlur,
  noOfLines,
  style,
  width,
  height,
  inputProps,
  subLabel,
  enableAutofill = false, // set default value for enableAutofill prop
  tooltip,
  showToggle = false,
  ref,
  isV2 = false,
  disabled = false,
  backgroundColor,
  name,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleTabPress: KeyboardEventHandler<HTMLDivElement> = event => {
    if (
      enableAutofill &&
      event.key === 'Tab' &&
      inputRef.current &&
      inputRef.current.value === ''
    ) {
      event.preventDefault();
      inputRef.current.value = placeholder || '';
    }
  };

  return (
    <div style={{ padding: isV2 ? '0' : '10px 0', pointerEvents: 'all' }}>
      {tooltip ? (
        <Tooltip title={t(tooltip)}>
          <label style={{ fontSize: isV2 ? '12px' : '16px', fontWeight: isV2 ? '600' : '500' }}>
            {t(label)} {required && <span style={{ color: 'red' }}>*</span>}
          </label>
        </Tooltip>
      ) : (
        <label style={{ fontSize: isV2 ? '12px' : '16px', fontWeight: isV2 ? '600' : '500' }}>
          {t(label)} {required && <span style={{ color: 'red' }}>*</span>}
        </label>
      )}
      <div style={{ width: isV2 ? width : 350 }}>
        <label style={{ fontSize: isV2 ? '12px' : '14px', fontWeight: '400' }}>{subLabel}</label>
      </div>
      <div style={{ marginTop: '5px' }}>
        <TextField
          disabled={disabled}
          id={id}
          name={name}
          value={inputProps?.value}
          minRows={multiline ? noOfLines ?? 5 : 1}
          maxRows={multiline ? noOfLines ?? 5 : 1}
          multiline={multiline}
          ref={ref}
          onChange={onChange}
          onBlur={item => {
            onBlur && onBlur(item);
          }}
          onKeyDown={event => {
            if (event.key === 'Backspace' || event.key === 'Delete') {
              event.stopPropagation();
            }
            onKeyDown && onKeyDown(event);
            handleTabPress(event);
          }}
          sx={{
            width: multiline ? width ?? '400px' : width ?? '300px',
            backgroundColor: backgroundColor ?? theme.palette.background.paper,
            height: height,
            '& .MuiInputBase-root': {
              height: height,
            },
          }}
          placeholder={placeholder}
          inputProps={{
            style: {
              padding: multiline ? '0px' : '6px 10px',
              WebkitUserSelect: 'text',
              MozUserSelect: 'text',
              ...style,
              // MsUserSelect: 'text',
              // UserSelect: 'text',
            },
            ref: inputRef, // Assign ref to inputRef
            ...inputProps,
          }} // add custom styles to inputProps
          type={showToggle ? (!showPassword ? 'password' : 'text') : type}
          {...rest}
          InputProps={{
            endAdornment: showToggle && ( // display toggle button conditionally
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {!showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
            style: {
              WebkitUserSelect: 'text',
              MozUserSelect: 'text',
              ...style,
            },
          }}
        />
      </div>
    </div>
  );
};

export default CustomTextField;
