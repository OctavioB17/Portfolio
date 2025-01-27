import { Box, Typography } from '@mui/material'
import React from 'react'
import Work from './WorkAndStudies/Work'
import Studies from './WorkAndStudies/Studies'

const WorkAndStudies: React.FC = (): JSX.Element => {
  return (
    <Box sx={{width: '100vw', bgcolor: 'primary.main',  padding: '5vw', paddingBottom: '10vw'}}>
      <Typography sx={{textDecoration: 'underline', color: 'button.main'}}>
        <Typography variant='h2' sx={{fontWeight: 800, color: 'typography.main'}}>
          Work experience
        </Typography>
      </Typography>
      <Box sx={{ padding: '3vw' }}>
        <Work/>
      </Box>
      <Typography sx={{textDecoration: 'underline', color: 'button.main'}}>
        <Typography variant='h2' sx={{fontWeight: 800, color: 'typography.main'}}>
          Studies
        </Typography>
      </Typography>
      <Box sx={{ padding: '3vw' }}>
        <Studies/>
      </Box>
    </Box>
  )
}

export default WorkAndStudies