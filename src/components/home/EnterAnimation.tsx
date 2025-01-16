import { Box, Typography } from '@mui/material';
import TextLayerUp from '../animations/TextLayerUp';
import React from 'react';
import AvatarApearAnimation from '../animations/AvatarApearAnimation';

const EnterAnimation: React.FC = (): JSX.Element => {
    return (
        <Box sx={{ position: 'relative', width: '100%', height: '100vh' }}>
            <TextLayerUp 
                node={<Typography sx={{fontWeight: 700, fontSize: '2vw'}}>Hey, my name's Octavio Bruza. I'm a FullStack Javascript Developer</Typography>} 
                style={{ position: 'absolute', top: 0, left: 0, minHeight: '100vh', minWidth: '100vw', zIndex: 3, backgroundColor: 'primary.main' }}
            />
            <TextLayerUp 
                node={<Typography sx={{fontWeight: 700, fontSize: '2vw'}}>And this is my portfolio</Typography>} 
                style={{ position: 'absolute', top: 0, left: 0, minHeight: '100vh', minWidth: '100vw', zIndex: 2, backgroundColor: 'secondary.main' }} 
            />
            <AvatarApearAnimation/>
        </Box>
    );
};

export default EnterAnimation;