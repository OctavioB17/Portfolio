import React from 'react';
import { Typography } from '@mui/material';
import { MuiStyle } from '../../interfaces/MUI';

const CodeIcon: React.FC<MuiStyle> = ({ sx }): JSX.Element => {
  return (
      <Typography
        sx={{
          fontFamily: 'Monospace',
          fontWeight: 'bold',
          ...sx
        }}
      >
        &lt;/&gt;
      </Typography>
  );
};

export default CodeIcon;
