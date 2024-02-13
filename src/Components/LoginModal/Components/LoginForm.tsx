import { FormHeader, LeftContainer } from './StyledComponents';
import { t } from 'i18next';
import CustomTextField from '../../CustomTextfield/CustomTextField';
import CustomButton from '../../CustomButton/CustomButton';
import React, { SetStateAction, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import {
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  User,
} from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import { FirebaseError } from 'firebase/app';
import { ReactComponent as GoogleIcon } from '../../../assets/images/google.svg';
import { isProduction, hostname } from '../../../Config/Config';
import { message } from 'antd';
import usePhoneLayout from '../../../Hooks/usePhoneLayout';
import { ReactComponent as CloseIcon } from '../../../assets/icons/cross.svg';
import TermsAndConditionsComponent from './TermsAndConditionsComponent';

interface LoginFormProps {
  setMode: React.Dispatch<SetStateAction<'login' | 'signup'>>;
  closeModal: () => void;
}
const LoginForm = ({ setMode, closeModal }: LoginFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const { isSmallScreen } = usePhoneLayout();
  const navigate = useNavigate();
  const theme = useTheme();

  const actionCodeSettings = {
    url: hostname,
    handleCodeInApp: true,
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      closeModal();
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error('Error signing in with Google:', error.message);
      }
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError(t('Please fill in all fields'));
      return;
    }

    setLoading(true);
    setError('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (auth.currentUser?.emailVerified === false) {
        await sendEmailVerification(auth.currentUser as User, actionCodeSettings);
        closeModal();
        navigate('/verify-email');
      } else {
        closeModal();
        window.location.reload();
      }
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error('Error logging in:', error.message);
        setError(t('Invalid email or password'));
      }
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!resetEmail) {
      setError('Please enter your email');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, resetEmail);
      message.success('Password reset email sent');
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error('Error sending password reset email:', error.message);
        setError('Failed to send password reset email');
      }
    }
  };

  if (showForgotPassword) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <FormHeader isSmallScreen={isSmallScreen}>
          {t('Welcome to Dashtoon')}
          {isSmallScreen && (
            <CloseIcon
              height={24}
              width={24}
              color={theme.palette.constant.grey}
              onClick={() => closeModal()}
            />
          )}
        </FormHeader>
        <CustomTextField
          label={t('Email')}
          placeholder={t('Enter your email')}
          inputProps={{ value: resetEmail }}
          onChange={e => {
            setResetEmail(e.target.value);
          }}
          isV2={true}
          height={'40px'}
          width={'100%'}
          style={{ borderRadius: '8px' }}
        />
        <CustomButton
          text={'Reset Password'}
          onClick={handleForgotPassword}
          variant={'contained'}
          width={'100%'}
          height={'40px'}
          hasBorder={false}
          backgroundColor={theme.palette.constant.blue}
          foregroundColor={theme.palette.constant.white}
          style={{ borderRadius: '8px' }}
        />
        <div
          style={{
            color: theme.palette.constant.blue,
            fontSize: '16px',
            fontWeight: 600,
            textDecoration: 'none',
            cursor: 'pointer',
          }}
          onClick={e => {
            e.preventDefault();
            setShowForgotPassword(false);
            setError('');
          }}
        >
          {t('Return to Login')}
        </div>
      </div>
    );
  }
  return (
    <LeftContainer>
      <FormHeader isSmallScreen={isSmallScreen}>
        {t('Welcome to Dashtoon')}
        {isSmallScreen && (
          <CloseIcon
            height={24}
            width={24}
            color={theme.palette.constant.grey}
            onClick={() => closeModal()}
          />
        )}
      </FormHeader>
      <CustomButton
        text={'Sign in with Google'}
        onClick={handleGoogleSignIn}
        variant={'contained'}
        width={'100%'}
        height={'40px'}
        hasBorder={false}
        backgroundColor={theme.palette.surface.tertiary}
        foregroundColor={theme.palette.constant.white}
        hasIcon={true}
        icon={
          <GoogleIcon
            color={theme.palette.object.primary}
            height={'24px'}
            width={'24px'}
            style={{ marginRight: '24px' }}
          />
        }
        style={{ borderRadius: '8px' }}
      />
      <div
        style={{
          width: '100%',
          height: '1px',
          backgroundColor: theme.palette.surface.tertiary,
        }}
      />
      <div style={{ fontSize: '12px', fontWeight: 600 }}>{t('or Sign in with your email')}</div>
      <CustomTextField
        label={''}
        placeholder={t('Enter your email')}
        inputProps={{ value: email }}
        onChange={e => {
          setEmail(e.target.value);
        }}
        isV2={true}
        height={'40px'}
        width={'100%'}
        style={{ borderRadius: '8px' }}
      />

      <CustomTextField
        label={t('Password')}
        placeholder={t('Enter your password')}
        inputProps={{ value: password }}
        onChange={e => {
          setPassword(e.target.value);
        }}
        showToggle={true}
        isV2={true}
        height={'40px'}
        width={'100%'}
        style={{ borderRadius: '8px' }}
      />
      {error && <div style={{ color: 'red', margin: '10px 0px', fontSize: '14px' }}>{error}</div>}
      <CustomButton
        text={'Login'}
        onClick={handleLogin}
        variant={'contained'}
        width={'100%'}
        height={'40px'}
        hasBorder={false}
        backgroundColor={theme.palette.constant.blue}
        foregroundColor={theme.palette.constant.white}
        style={{ borderRadius: '8px' }}
        disabled={error !== '' || loading}
      />
      <div
        style={{
          color: theme.palette.constant.blue,
          fontSize: '16px',
          fontWeight: 600,
          textDecoration: 'none',
          cursor: 'pointer',
        }}
        onClick={e => {
          setShowForgotPassword(true);
          setError('');
        }}
      >
        {t('Forgot Password?')}
      </div>
      <TermsAndConditionsComponent/>
      <div
        style={{
          color: theme.palette.constant.grey,
          fontSize: '16px',
          fontWeight: 600,
          display: 'flex',
          gap: '4px',
        }}
      >
        <div>{t('Don’t have an account?')}</div>
        <div
          style={{ color: theme.palette.constant.blue, cursor: 'pointer' }}
          onClick={() => setMode('signup')}
        >
          {t(' Sign up')}
        </div>
      </div>
    </LeftContainer>
  );
};

export default LoginForm;
