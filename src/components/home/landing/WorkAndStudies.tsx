import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import Work from './WorkAndStudies/Work'
import Studies from './WorkAndStudies/Studies'

const sectionHeadingSx = {
  color: 'typography.main',
  fontWeight: 800,
  fontSize: 'clamp(2rem, 4vw, 3.5rem)',
  lineHeight: 1.1,
  textDecoration: 'underline',
  textDecorationColor: '#f582ae',
  textDecorationThickness: '5px',
  textUnderlineOffset: '7px',
}

const WorkAndStudies: React.FC = (): JSX.Element => {
  const isSmallScreen = useMediaQuery('(max-width:900px)')

  return (
    <Box
      component="section"
      sx={{
        width: '100%',
        bgcolor: 'primary.main',
        px: isSmallScreen ? 'clamp(20px, 5vw, 32px)' : 'clamp(40px, 7vw, 104px)',
        py: isSmallScreen ? 'clamp(56px, 12vw, 88px)' : 'clamp(72px, 7vw, 104px)',
      }}
    >
      <Box sx={{ maxWidth: 1320, mx: 'auto' }}>
        <Box component="section" aria-labelledby="experience-heading">
          <Typography id="experience-heading" component="h2" sx={{ ...sectionHeadingSx, mb: 3.5 }}>
            Work experience
          </Typography>
          <Work />
        </Box>

        <Box component="section" aria-labelledby="studies-heading" sx={{ mt: isSmallScreen ? 7 : 9 }}>
          <Typography id="studies-heading" component="h2" sx={{ ...sectionHeadingSx, mb: 3.5 }}>
            Studies
          </Typography>
          <Studies />
        </Box>
      </Box>
    </Box>
  )
}

export default WorkAndStudies
