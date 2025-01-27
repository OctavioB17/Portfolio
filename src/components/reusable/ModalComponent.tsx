import React from 'react';
import { ModalProps } from '../../interfaces/Reusable';
import Modal from '@mui/material/Modal';
import { Box } from '@mui/material';

const CustomModal: React.FC<ModalProps> = ({ children, state, setState }): JSX.Element => {
  return (
    <Modal
      open={state || false}
      onClose={() => setState && setState(false)}
      sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
    >
      <Box sx={{ padding: '2vw', bgcolor: 'secondary.main', outline: 'none', borderRadius: '10px' }}>
      {typeof children === 'function' ? children({}) : children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
