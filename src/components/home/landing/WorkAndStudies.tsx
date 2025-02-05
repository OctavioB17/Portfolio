import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import Work from './WorkAndStudies/Work'
import Studies from './WorkAndStudies/Studies'

const WorkAndStudies: React.FC = (): JSX.Element => {
  const isSmallScreen = useMediaQuery('(max-width:1200px)');

  return (
    <Box sx={{width: '100vw', bgcolor: 'primary.main',  padding: isSmallScreen ? '2vw' : '5vw', paddingBottom: '10vw', paddingTop: isSmallScreen ? '10vw' : ''}}>
      <Typography variant={ isSmallScreen ? 'h3' : 'h2'} sx={{textDecoration: 'underline', color: 'button.main', display: 'flex', padding: isSmallScreen ? '5vw' : '', paddingBottom: isSmallScreen ? '5vw' : '3vw' }}>
        <span style={{fontWeight: 800, color: '#172c66', display: 'inline'}}>
          Work experience
        </span>
      </Typography>
      <Box sx={{ padding: '3vw' }}>
        <Work/>
      </Box>
      <Typography variant={ isSmallScreen ? 'h3' : 'h2'} sx={{textDecoration: 'underline', color: 'button.main', display: 'flex', padding: isSmallScreen ? '5vw' : '', paddingBottom: isSmallScreen ? '10vw' : '3vw', paddingTop: isSmallScreen ? '20vw' : '5vw' }}>
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