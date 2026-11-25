import { ArrowBackIosNewRounded, ArrowForwardIosRounded } from '@mui/icons-material'
import { Box, IconButton, Typography } from '@mui/material'
import { useState } from 'react'
import type { ProjectCardData } from './projectCards'

interface ProjectGalleryProps {
  project: ProjectCardData
}

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project }) => {
  const images = (project.strings ?? []).filter(Boolean)
  const [activeImage, setActiveImage] = useState(0)
  const [mediaAspectRatio, setMediaAspectRatio] = useState(16 / 9)
  const [isTallMedia, setIsTallMedia] = useState(false)

  if (images.length === 0) {
    return (
      <Box
        role="img"
        aria-label={`${project.title} project cover`}
        sx={{
          aspectRatio: '16 / 10',
          minHeight: 250,
          width: '100%',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: 'clamp(24px, 4vw, 48px)',
          borderRadius: '20px',
          bgcolor: project.coverColor,
          color: project.coverTextColor,
          isolation: 'isolate',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '38%',
            aspectRatio: '1',
            border: '1px solid currentColor',
            borderRadius: '50%',
            right: '-9%',
            top: '-28%',
            opacity: .24,
            zIndex: -1,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            width: '68%',
            height: '1px',
            bgcolor: 'currentColor',
            opacity: .3,
            right: '-15%',
            bottom: '23%',
            transform: 'rotate(-28deg)',
            zIndex: -1,
          },
        }}
      >
        <Typography sx={{ fontSize: '.78rem', fontWeight: 800, letterSpacing: '.15em', textTransform: 'uppercase' }}>
          {project.eyebrow}
        </Typography>
        <Typography sx={{ fontWeight: 800, fontSize: 'clamp(2.5rem, 7vw, 5rem)', lineHeight: .92, letterSpacing: '-.06em', overflowWrap: 'anywhere' }}>
          {project.title}
        </Typography>
        <Typography sx={{ fontSize: '.9rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', opacity: .86 }}>
          Project overview
        </Typography>
      </Box>
    )
  }

  const goToImage = (direction: -1 | 1) => {
    setMediaAspectRatio(16 / 9)
    setIsTallMedia(false)
    setActiveImage((current) => (current + direction + images.length) % images.length)
  }

  return (
    <Box component="figure" sx={{ m: 0, minWidth: 0 }}>
      <Box sx={{ position: 'relative', width: '100%', ...(isTallMedia ? { height: 'min(78vh, 720px)' } : { aspectRatio: mediaAspectRatio }), overflow: 'hidden', bgcolor: '#fff9ed', borderRadius: '20px', border: '1px solid rgba(23,44,102,.1)' }}>
        <Box sx={{ width: '100%', height: '100%', overflowX: 'hidden', overflowY: isTallMedia ? 'auto' : 'hidden', scrollbarWidth: 'thin', scrollbarColor: 'rgba(23,44,102,.35) transparent' }}>
          <Box
            component="img"
            key={images[activeImage]}
            src={images[activeImage]}
            alt={`${project.title} screen ${activeImage + 1} of ${images.length}`}
            loading="eager"
            onLoad={(event) => {
              const { naturalWidth, naturalHeight } = event.currentTarget
              if (naturalWidth > 0 && naturalHeight > 0) {
                const aspectRatio = naturalWidth / naturalHeight
                setIsTallMedia(aspectRatio < .8)
                setMediaAspectRatio(Math.min(2.4, Math.max(.8, aspectRatio)))
              }
            }}
            sx={{ display: 'block', width: '100%', height: isTallMedia ? 'auto' : '100%', objectFit: isTallMedia ? 'initial' : 'contain' }}
          />
        </Box>
        {images.length > 1 && (
          <>
            <IconButton
              onClick={() => goToImage(-1)}
              aria-label="Show previous project image"
              sx={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, bgcolor: 'rgba(255,249,237,.92)', color: '#172c66', boxShadow: '0 4px 14px rgba(0,0,0,.12)', '&:hover': { bgcolor: '#fff9ed' } }}
            >
              <ArrowBackIosNewRounded sx={{ fontSize: 17 }} />
            </IconButton>
            <IconButton
              onClick={() => goToImage(1)}
              aria-label="Show next project image"
              sx={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, bgcolor: 'rgba(255,249,237,.92)', color: '#172c66', boxShadow: '0 4px 14px rgba(0,0,0,.12)', '&:hover': { bgcolor: '#fff9ed' } }}
            >
              <ArrowForwardIosRounded sx={{ fontSize: 17 }} />
            </IconButton>
          </>
        )}
      </Box>
      {images.length > 1 && (
        <Box component="figcaption" sx={{ mt: 1.5, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography sx={{ color: 'rgba(23,44,102,.7)', fontSize: '.85rem', fontWeight: 700 }}>
            {isTallMedia ? 'Scroll the image to see the full page' : 'Project screens'}
          </Typography>
          <Typography aria-live="polite" sx={{ color: '#172c66', fontSize: '.85rem', fontWeight: 800, fontVariantNumeric: 'tabular-nums' }}>
            {String(activeImage + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </Typography>
        </Box>
      )}
    </Box>
  )
}

export default ProjectGallery
