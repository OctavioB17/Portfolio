import { Box, Button, Chip, IconButton, Typography, useMediaQuery } from '@mui/material'
import React, { useState } from 'react'
import { ExperienceBoxProps } from '../../../../interfaces/home/Home'
import ModalComponent from '../../../reusable/ModalComponent'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { TechnologyChip } from '../../../projects/technologiesIcon'

const ExperiencesBox: React.FC<ExperienceBoxProps> = ({
  institution,
  title,
  date,
  description,
  photo,
  technologies = [],
  impact,
  certificates,
}): JSX.Element => {
  const [openCertificate, setOpenCertificate] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState(0)
  const isSmallScreen = useMediaQuery('(max-width:900px)')
  const certificateCount = certificates?.length ?? 0

  const showPrevious = () => setSelectedCertificate((current) => (current - 1 + certificateCount) % certificateCount)
  const showNext = () => setSelectedCertificate((current) => (current + 1) % certificateCount)

  return (
    <Box
      component="article"
      sx={{
        display: 'grid',
        gridTemplateColumns: isSmallScreen ? '1fr' : '220px minmax(0, 1fr)',
        bgcolor: 'primary.main',
        border: '1px solid rgba(23, 44, 102, .12)',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 24, 88, .06)',
      }}
    >
      <Box
        sx={{
          minHeight: isSmallScreen ? 132 : 220,
          p: isSmallScreen ? 2.5 : 3,
          bgcolor: 'secondary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src={photo}
          alt={institution + ' logo'}
          loading="eager"
          sx={{
            display: 'block',
            width: isSmallScreen ? 'min(65%, 220px)' : '100%',
            maxWidth: 190,
            maxHeight: isSmallScreen ? 86 : 110,
            objectFit: 'contain',
          }}
        />
      </Box>

      <Box sx={{ minWidth: 0, p: 'clamp(20px, 3vw, 36px)', display: 'flex', flexDirection: 'column', gap: 2.25 }}>
        <Box sx={{ display: 'flex', alignItems: { xs: 'flex-start', sm: 'flex-start' }, justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
          <Box sx={{ minWidth: 0 }}>
            <Typography component="h3" sx={{ color: 'typography.main', fontWeight: 800, fontSize: 'clamp(1.7rem, 2.7vw, 2.4rem)', lineHeight: 1.1, overflowWrap: 'anywhere' }}>
              {institution}
            </Typography>
            {title && (
              <Typography component="p" sx={{ color: 'typography.main', fontWeight: 700, fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)', mt: 0.75 }}>
                {title}
              </Typography>
            )}
          </Box>
          <Chip
            label={date}
            variant="outlined"
            sx={{
              minHeight: 36,
              height: 'auto',
              maxWidth: '100%',
              bgcolor: '#fff9ed',
              color: 'typography.main',
              borderColor: 'rgba(23, 44, 102, .2)',
              fontWeight: 700,
              '& .MuiChip-label': { whiteSpace: 'normal', py: 0.75, lineHeight: 1.25 },
            }}
          />
        </Box>

        <Box sx={{ color: 'typography.main', fontSize: '1rem', lineHeight: 1.6 }}>
          {typeof description === 'string'
            ? <Typography sx={{ color: 'inherit', fontSize: 'inherit', lineHeight: 'inherit' }}>{description}</Typography>
            : description}
        </Box>

        {impact && (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              p: 2,
              borderLeft: '4px solid #f582ae',
              bgcolor: 'rgba(139, 211, 221, .28)',
              borderRadius: '0 10px 10px 0',
            }}
          >
            <Typography sx={{ flex: '0 0 auto', color: 'typography.main', fontWeight: 800, fontSize: 'clamp(1.45rem, 2vw, 1.8rem)', lineHeight: 1 }}>
              {impact.value}
            </Typography>
            <Typography sx={{ color: 'typography.main', fontSize: '.95rem', lineHeight: 1.4 }}>
              {impact.label}
            </Typography>
          </Box>
        )}

        {technologies.length > 0 && (
          <Box>
            <Typography sx={{ color: 'typography.main', fontWeight: 700, fontSize: '.9rem', mb: 1 }}>
              Technologies & tools
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
              {technologies.map((technology) => (
                <TechnologyChip
                  key={technology}
                  technology={technology}
                  variant="outlined"
                  sx={{ height: 30, fontSize: '.78rem', borderColor: 'rgba(23, 44, 102, .22)' }}
                />
              ))}
            </Box>
          </Box>
        )}

        {certificateCount > 0 && (
          <>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 'auto' }}>
              <Button
                onClick={() => setOpenCertificate(true)}
                variant="contained"
                sx={{
                  minHeight: 44,
                  px: 2,
                  bgcolor: 'button.main',
                  color: 'button.textSecondary',
                  textTransform: 'none',
                  fontWeight: 700,
                }}
              >
                {certificateCount > 1 ? 'View certificates' : 'View certificate'}
              </Button>
            </Box>
            <ModalComponent
              state={openCertificate}
              setState={setOpenCertificate}
              title={certificates?.[selectedCertificate]?.title}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, maxWidth: '92vw' }}>
                <IconButton
                  onClick={showPrevious}
                  aria-label="Previous certificate"
                  sx={{ minWidth: 44, minHeight: 44, flex: '0 0 auto', color: 'button.main' }}
                >
                  <FaChevronLeft aria-hidden="true" />
                </IconButton>
                <Box sx={{ minWidth: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  {certificates && React.createElement(certificates[selectedCertificate].image)}
                </Box>
                <IconButton
                  onClick={showNext}
                  aria-label="Next certificate"
                  sx={{ minWidth: 44, minHeight: 44, flex: '0 0 auto', color: 'button.main' }}
                >
                  <FaChevronRight aria-hidden="true" />
                </IconButton>
              </Box>
              <Box role="group" aria-label="Choose a certificate" sx={{ display: 'flex', justifyContent: 'center', gap: 0.5, mt: 1 }}>
                {certificates?.map((certificate, index) => (
                  <IconButton
                    key={certificate.title ?? index}
                    onClick={() => setSelectedCertificate(index)}
                    aria-label={'Show certificate ' + (index + 1)}
                    aria-pressed={index === selectedCertificate}
                    sx={{ minWidth: 44, minHeight: 44 }}
                  >
                    <Box sx={{ width: 9, height: 9, borderRadius: '50%', bgcolor: index === selectedCertificate ? 'button.main' : 'rgba(23,44,102,.28)' }} />
                  </IconButton>
                ))}
              </Box>
            </ModalComponent>
          </>
        )}
      </Box>
    </Box>
  )
}

export default ExperiencesBox
