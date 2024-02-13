import React, { SetStateAction, useState } from 'react';
import { t } from 'i18next';
import { FormHeader, LeftContainer } from './StyledComponents';
import CustomTextField from '../../CustomTextfield/CustomTextField';
import { Link, useNavigate } from 'react-router-dom';
import CustomButton from '../../CustomButton/CustomButton';
import { useTheme } from '@mui/material/styles';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import { trackEvent } from '../../../Utils/Analytics';
import { TrackingEvents } from '../../../Constants/TrackingEvents';
import { TrackingProperties } from '../../../Constants/TrackingProperties';
import { FirebaseError } from 'firebase/app';
import usePhoneLayout from '../../../Hooks/usePhoneLayout';
import { ReactComponent as CloseIcon } from '../../../assets/icons/cross.svg';
import TermsAndConditionsComponent from './TermsAndConditionsComponent';

interface SignupFormProps {
  setMode: React.Dispatch<SetStateAction<'login' | 'signup'>>;
  closeModal: () => void;
}
const SignupForm = ({ setMode, closeModal }: SignupFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const { isSmallScreen } = usePhoneLayout();
  const handleSignup = async () => {
    setLoading(true);
    setError('');

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(user, { displayName: name }); // Update user's display name
      trackEvent(
        {
          event: TrackingEvents.userSignup,
          properties: {
            userName: name,
            userEmail: email,
            userId: user?.uid,
          } as TrackingProperties,
        },
        'CONSUMER'
      );
      closeModal();

      navigate('/verify-email');
    } catch (error: unknown) {
      if (error instanceof FirebaseError) {
        console.error('Error signing up:', error.message);
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <LeftContainer>
      <FormHeader isSmallScreen={isSmallScreen}>
        {t('Signup for Dashtoon Studio')}
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
        label={'Name'}
        placeholder={t(`What's your name`)}
        inputProps={{ value: name }}
        onChange={e => {
          setName(e.target.value);
        }}
        isV2={true}
        height={'40px'}
        width={'100%'}
        style={{ borderRadius: '8px' }}
      />
      <CustomTextField
        label={'Email'}
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
        text={'Signup'}
        onClick={handleSignup}
        variant={'contained'}
        width={'100%'}
        height={'40px'}
        hasBorder={false}
        backgroundColor={theme.palette.constant.blue}
        foregroundColor={theme.palette.constant.white}
        style={{ borderRadius: '8px' }}
        disabled={loading || password === '' || email === '' || name === ''}
      />
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
        <div>{t('Already have an account? ')}</div>
        <div
          style={{ color: theme.palette.constant.blue, cursor: 'pointer' }}
          onClick={() => setMode('login')}
        >
          {t(' Login')}
        </div>
      </div>
    </LeftContainer>
  );
};

export default SignupForm;
