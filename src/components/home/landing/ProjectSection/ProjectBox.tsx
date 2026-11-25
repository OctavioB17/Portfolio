import { Box, Button, Chip, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import ImageSlider from '../../../visual/ImageSlider'
import { ProjectBoxProps } from '../../../../interfaces/home/Home'
import { TechnologyChip } from '../../../projects/technologiesIcon'
import { useNavigate } from 'react-router-dom'

const ProjectBox: React.FC<ProjectBoxProps> = ({
  strings = [],
  title,
  description,
  projectUrl,
  slidesPerView = 1,
  spaceBetween = 24,
  photoStyle,
  sx,
  coverColor = '#172c66',
  coverTextColor = '#fff8ec',
  eyebrow,
  technologies = [],
  technologyLimit,
  status,
  hideTitle = false,
}) => {
  const navigate = useNavigate()
  const isSmallScreen = useMediaQuery('(max-width:900px)')
  const [mediaAspectRatio, setMediaAspectRatio] = useState(16 / 10)
  const coverTitleSize = title && title.length > 13
    ? 'clamp(1.8rem, 3.4vw, 3rem)'
    : title && title.length > 8
      ? 'clamp(2.3rem, 4.5vw, 3.8rem)'
      : 'clamp(3rem, 7vw, 5.6rem)'
  const visibleTechnologies = technologyLimit ? technologies.slice(0, technologyLimit) : technologies
  const hiddenTechnologyCount = technologies.length - visibleTechnologies.length

  return (
    <Box
      component="article"
      sx={{
        width: '100%',
        minWidth: 0,
        height: '100%',
        minHeight: isSmallScreen ? 0 : 560,
        bgcolor: 'primary.main',
        p: isSmallScreen ? 2 : 2.5,
        borderRadius: isSmallScreen ? '12px' : '16px',
        border: '1px solid rgba(23, 44, 102, .10)',
        display: 'flex',
        flexDirection: 'column',
        gap: isSmallScreen ? 1.25 : 1.5,
        boxShadow: '0 10px 30px rgba(0, 24, 88, 0.07)',
        transition: 'transform 180ms ease, box-shadow 180ms ease',
        '&:hover': { transform: 'translateY(-3px)', boxShadow: '0 14px 34px rgba(0, 24, 88, 0.12)' },
        '@media (prefers-reduced-motion: reduce)': { transition: 'none', '&:hover': { transform: 'none' } },
        ...sx,
      }}
    >
      {strings.length > 0 ? (
        <Box sx={{ width: '100%', aspectRatio: mediaAspectRatio, minWidth: 0, overflow: 'hidden', borderRadius: '10px', bgcolor: '#fff9ed', flex: '0 0 auto', transition: 'aspect-ratio 220ms ease' }}>
          <ImageSlider
            photoStyle={{ ...photoStyle, width: '100%', height: '100%' }}
            strings={strings}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBetween}
            onAspectRatioChange={setMediaAspectRatio}
          />
        </Box>
      ) : (
        <Box
          role="img"
          aria-label={(title ?? 'Project') + ' cover'}
          sx={{
            width: '100%',
            aspectRatio: '16 / 10',
            minWidth: 0,
            borderRadius: '10px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: coverColor,
            flex: '0 0 auto',
            '&::after': {
              content: '""',
              position: 'absolute',
              width: '28%',
              height: '140%',
              right: '-12%',
              top: '-20%',
              borderLeft: '1px solid rgba(255,255,255,.38)',
              transform: 'rotate(22deg)',
            },
          }}
        >
          <Typography sx={{ position: 'relative', zIndex: 1, color: coverTextColor, fontWeight: 800, fontSize: coverTitleSize, lineHeight: .95, letterSpacing: '-.055em', textAlign: 'center', px: 2, maxWidth: '92%', overflowWrap: 'anywhere' }}>
            {title}
          </Typography>
          {eyebrow && (
            <Typography sx={{ position: 'absolute', left: '5%', bottom: '7%', zIndex: 1, color: coverTextColor, fontSize: '.68rem', lineHeight: 1.25, letterSpacing: '.09em', textTransform: 'uppercase', opacity: .95, maxWidth: '82%', overflowWrap: 'anywhere' }}>
              {eyebrow}
            </Typography>
          )}
        </Box>
      )}

      {(!hideTitle || status) && (
        <Box sx={{
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          alignItems: isSmallScreen ? 'flex-start' : 'center',
          justifyContent: isSmallScreen ? 'flex-start' : 'space-between',
          gap: isSmallScreen ? .75 : 1.5,
          minHeight: isSmallScreen ? 'auto' : 42,
        }}>
          {!hideTitle && (
            <Typography component="h3" sx={{ minWidth: 0, fontWeight: 800, color: 'typography.main', fontSize: 'clamp(1.5rem, 2.4vw, 2.2rem)', lineHeight: 1.15, overflowWrap: 'anywhere' }}>
              {title}
            </Typography>
          )}
          {status && (
            <Chip label={status} size="small" sx={{
              flex: isSmallScreen ? '0 1 auto' : '0 0 auto',
              bgcolor: '#f3d2c1',
              color: '#172c66',
              fontWeight: 700,
              maxWidth: isSmallScreen ? '100%' : '55%',
              height: isSmallScreen ? 'auto' : 32,
              '& .MuiChip-label': isSmallScreen ? { display: 'block', whiteSpace: 'normal', py: .35, lineHeight: 1.25 } : undefined,
            }} />
          )}
        </Box>
      )}

      {description && (
        <Typography
          sx={{
            color: 'typography.main',
            fontWeight: 500,
            lineHeight: 1.55,
            fontSize: '1rem',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            overflow: 'hidden',
            minHeight: '4.65em',
          }}
        >
          {description}
        </Typography>
      )}

      <Box sx={{ display: 'flex', gap: 0.9, flexWrap: 'wrap', alignContent: 'flex-start', minHeight: 36 }}>
        {visibleTechnologies.map((technology) => (
          <TechnologyChip
            key={technology}
            technology={technology}
            sx={{ height: 36 }}
          />
        ))}
        {hiddenTechnologyCount > 0 && (
          <Box
            component="span"
            aria-label={`${hiddenTechnologyCount} more technologies`}
            sx={{
              minHeight: 36,
              display: 'inline-flex',
              alignItems: 'center',
              px: 1.4,
              borderRadius: '999px',
              bgcolor: 'rgba(23, 44, 102, .035)',
              color: 'rgba(23, 44, 102, .72)',
              fontSize: '.8rem',
              fontWeight: 700,
              whiteSpace: 'nowrap',
            }}
          >
            +{hiddenTechnologyCount} more
          </Box>
        )}
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 'auto', pt: 0.5, minHeight: 44, alignItems: 'center' }}>
        {projectUrl && (
          <Button
            onClick={() => navigate(projectUrl)}
            variant="contained"
            sx={{
              minHeight: 44,
              bgcolor: 'button.main',
              color: 'button.textSecondary',
              fontWeight: 700,
              textTransform: 'none',
              fontSize: '.95rem',
              '&:hover': { bgcolor: '#001858' },
            }}
          >
            View project
          </Button>
        )}
      </Box>
    </Box>
  )
}

export default ProjectBox
