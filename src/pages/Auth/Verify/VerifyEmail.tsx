import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { sendEmailVerification, User } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import {isProduction} from "../../../Config/Config";
import { t } from 'i18next';
import LoginModal from "../../../Components/LoginModal/LoginModal";


const VerifyEmail = () => {
  const [user, setUser] = useState<User | null>(null);

  const actionCodeSettings = {
    url: isProduction? 'https://dashtoon.com/' : 'https://dev-studio.dashtoon.ai',
    handleCodeInApp: true,
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    verifyEmail();
  }, [user]);

  const verifyEmail = async () => {
    if (user) {
      await sendEmailVerification(user, actionCodeSettings);
    }
  };
  return (
    <div style={{ textAlign: 'center', marginTop: '20%' }}>
      <h2>{t('Email Verification Required')}</h2>
      <p>
        {t(
          'An email verification link has been sent to your email address. Please check your inbox and click the verification link to activate your account.'
        )}
      </p>
      <p>{t("Once you've verified your email, you can access the main app.")}</p>
      <p
        onClick={() => {
          <LoginModal open={true}></LoginModal>
        }}
      >
        <Link to="/">{t('Back to Login')}</Link>
      </p>
    </div>
  );
};

export default VerifyEmail;
