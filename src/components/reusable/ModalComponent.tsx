import React, { useId } from 'react';
import { ModalProps } from '../../interfaces/Reusable';
import Modal from '@mui/material/Modal';
import { Box, IconButton, Typography } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';

const CustomModal: React.FC<ModalProps> = ({ children, state, setState, title }): JSX.Element => {
  const titleId = useId();

  return (
    <Modal
      open={state || false}
      onClose={() => setState && setState(false)}
      sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
    >
      <Box
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-label={title ? undefined : 'Details'}
        sx={{ position: 'relative', width: 'fit-content', maxWidth: '96vw', maxHeight: '94vh', overflow: 'auto', p: 'clamp(20px, 3vw, 40px)', pt: title ? 'clamp(52px, 5vw, 64px)' : 'clamp(52px, 5vw, 64px)', bgcolor: 'secondary.main', outline: 'none', borderRadius: '12px' }}
      >
        <IconButton
          onClick={() => setState && setState(false)}
          aria-label="Close dialog"
          sx={{ position: 'absolute', top: 8, right: 8, minWidth: 44, minHeight: 44, color: 'typography.main' }}
        >
          <CloseRounded aria-hidden="true" />
        </IconButton>
        {title && (
          <Typography
            id={titleId}
            component="h2"
            variant="h5"
            sx={{ position: 'absolute', top: 16, left: 'clamp(20px, 3vw, 40px)', right: 64, color: 'typography.main', fontWeight: 800, textAlign: 'left', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}
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
