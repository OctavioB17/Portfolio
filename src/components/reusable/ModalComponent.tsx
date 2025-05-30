import React from 'react';
import { ModalProps } from '../../interfaces/Reusable';
import Modal from '@mui/material/Modal';
import { Box, Typography } from '@mui/material';

const CustomModal: React.FC<ModalProps> = ({ children, state, setState, title }): JSX.Element => {
  return (
    <Modal
      open={state || false}
      onClose={() => setState && setState(false)}
      sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
    >
      <Box sx={{ padding: '2vw', bgcolor: 'secondary.main', outline: 'none', borderRadius: '10px' }}>
        {title && (
          <Typography 
            variant="h5" 
            sx={{ 
              marginBottom: '1vw', 
              color: 'primary.contrastText',
              fontWeight: 'bold',
              textAlign: 'left'
            }}
          >
            {title}
          </Typography>
        )}
        {typeof children === 'function' ? children({}) : children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
