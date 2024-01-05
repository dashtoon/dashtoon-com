import {Box, Typography} from "@mui/material";
import React from "react";

import {ReactComponent as DashtoonLogo} from '../../Assets/Images/Svg/Header/dashtoon-logo.svg';
import {color} from "../../Theme/Colors";
import {getREM} from "../../Utils/Spacing";

const Header: React.FC = () => {

    return (
        <Box
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'transparent'
            }}
        >
            <Box
                style={{
                    height: getREM(69),
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: '672.121px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    background: 'rgba(255, 255, 255, 0.15)',
                    padding: '8px',
                    backdropFilter: 'blur(13.45px)',
                }}>
                <Box
                    style={{
                        width: getREM(56),
                        height: getREM(52),
                        borderRadius: '38px',
                        background: 'linear-gradient(162deg, rgba(217, 238, 243, 0.14) 12.43%, rgba(164, 164, 164, 0.14) 195.08%)',
                        padding: '12px 12px 10px 12px'
                    }}
                >
                    <DashtoonLogo width={getREM(30)} height={getREM(30)}/>
                </Box>
                <Box
                    style={{
                        display: 'grid',
                        gridGap: '24px',
                        gridAutoFlow: 'column',
                        marginLeft: '32px',
                        marginRight: '50px'
                    }}
                >
                    <Typography variant={'sm'} color={color.grey8} fontWeight={400}>Company</Typography>
                    <Typography variant={'sm'} color={color.grey8} fontWeight={400}>Dash Studio</Typography>
                    <Typography variant={'sm'} color={color.grey8} fontWeight={400}>Careers</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
