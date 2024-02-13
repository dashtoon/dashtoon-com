import { Modal } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import React, { useContext, useEffect, useState } from 'react';
import { ReactComponent as CloseIcon } from '../../assets/icons/cross.svg';
import SignupForm from './Components/SignupForm';
import LoginForm from './Components/LoginForm';
import usePhoneLayout from '../../Hooks/usePhoneLayout';
import { AuthContext } from '../../Provider/AuthProvider';

interface LoginModalProps {
    open: boolean;
}

const LoginModal = ({ open }: LoginModalProps) => {
    const auth = useContext(AuthContext);
    const [isOpened, setIsOpened] = React.useState(open);
    const handleOpen = () => setIsOpened(true);
    const handleClose = () => setIsOpened(false);
    const theme = useTheme();
    const [mode, setMode] = useState<'login' | 'signup'>('login');
    const { isSmallScreen } = usePhoneLayout();


    // useEffect(() => {
    //     if (auth.email && auth.currentUser && !auth.anonymous) {
    //         handleClose();
    //     }
    // }, [auth.currentUser]);

    return (
        <Modal
            open={isOpened}
            onClose={() => handleClose()}
            sx={{
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                outline: 'none',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    width: isSmallScreen ? '90%' : '60%',
                    maxWidth: '724px',
                    border: `1px solid ${theme.palette.surface.tertiary}`,
                    borderRadius: '16px',
                    overflow: 'hidden',
                    outline: 'none',
                }}
            >
                <div
                    style={{
                        flex: isSmallScreen ? 1 : 0.52,
                        backgroundColor: theme.palette.surface.secondary,
                        padding: '24px',
                        color: theme.palette.object.primary,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    {mode === 'login' && <LoginForm setMode={setMode} closeModal={handleClose} />}
                    {mode === 'signup' && <SignupForm setMode={setMode} closeModal={handleClose} />}
                </div>

                {!isSmallScreen && (
                    <div
                        style={{
                            flex: 0.48,
                            background:
                                mode === 'login'
                                    ? `url(${require('../../assets/images/login.png')}) center/cover`
                                    : `url(${require('../../assets/images/signup.png')}) center/cover`,

                            padding: '24px',
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <CloseIcon
                            height={24}
                            width={24}
                            color={theme.palette.constant.grey}
                            onClick={() => handleClose()}
                        />
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default LoginModal;