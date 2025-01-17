import { Box } from '@mui/material'
import React from 'react'
import { MuiStyleWithChildren } from '../../interfaces/MUI'

const NormalBox: React.FC<MuiStyleWithChildren> = ({ sx, children }): JSX.Element => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', ...sx}}>
        {children}
    </Box>
  )
}

export default NormalBox