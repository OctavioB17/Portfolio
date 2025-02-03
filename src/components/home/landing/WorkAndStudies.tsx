import { Box, Typography } from '@mui/material'
import React from 'react'
import Work from './WorkAndStudies/Work'
import Studies from './WorkAndStudies/Studies'

const WorkAndStudies: React.FC = (): JSX.Element => {
  return (
    <Box sx={{width: '100vw', bgcolor: 'primary.main',  padding: '5vw', paddingBottom: '10vw'}}>
      <Typography variant='h2' sx={{textDecoration: 'underline', color: 'button.main'}}>
        <span style={{fontWeight: 800, color: '#172c66', display: 'inline'}}>
          Work experience
        </span>
      </Typography>
      <Box sx={{ padding: '3vw' }}>
        <Work/>
      </Box>
      <Typography variant='h2' sx={{textDecoration: 'underline', color: 'button.main'}}>
        <span style={{fontWeight: 800, color: '#172c66', display: 'inline'}}>
          Studies
        </span>
      </Typography>
      <Box sx={{ padding: '3vw' }}>
        <Studies/>
      </Box>
    </Box>
  )
}

export default WorkAndStudies