import React from 'react'
import { sectionWithPhotoProps } from '../../../interfaces/home/Home'
import { Box } from '@mui/material'

const SectionWithPhoto: React.FC<sectionWithPhotoProps> = ({ imgUrl, children, imgDirection, sx, photoSx }): JSX.Element => {
  return (
    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', ...sx }}>
        { imgDirection === 'Left' &&
        <Box>
            <Box component='img' src={imgUrl}/>
        </Box>
        }
        <Box>
            {children}
        </Box>
        { imgDirection === 'Right' &&
        <Box>
            <Box component='img' src={imgUrl} sx={{...photoSx}}/>
        </Box>
        }
    </Box>
  )
}

export default SectionWithPhoto