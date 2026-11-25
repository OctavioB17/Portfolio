import { ArrowBackRounded, ArrowOutwardRounded } from '@mui/icons-material'
import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material'
import type { FC } from 'react'
import { Link } from 'react-router-dom'
import ProjectBox from '../home/landing/ProjectSection/ProjectBox'
import AppearWrapper from '../animations/AppearWrapper'
import { projectCards } from './projectCards'

const ProjectLanding: FC = (): JSX.Element => {
  const isPhone = useMediaQuery('(max-width:680px)')
  const isTablet = useMediaQuery('(max-width:1020px)')

  return (
    <AppearWrapper>
      <Box
        component="main"
        sx={{
          width: '100%',
          minHeight: '100vh',
          bgcolor: 'secondary.main',
          fontFamily: 'Proxima-Nova',
          px: 'clamp(20px, 5vw, 76px)',
          py: 'clamp(28px, 5vw, 72px)',
        }}
      >
        <Box sx={{ maxWidth: 1360, mx: 'auto' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 'clamp(36px, 5vw, 64px)' }}>
            <Button
              component={Link}
              to="/"
              startIcon={<ArrowBackRounded />}
              sx={{
                minHeight: 44,
                px: 1.75,
                borderRadius: '999px',
                color: '#172c66',
                bgcolor: 'rgba(23,44,102,.06)',
                textTransform: 'none',
                fontWeight: 700,
                '&:hover': { bgcolor: 'rgba(23,44,102,.1)' },
              }}
            >
              Back to portfolio
            </Button>
            <Typography sx={{ color: 'rgba(23,44,102,.68)', fontWeight: 700, fontSize: '.9rem', letterSpacing: '.08em', textTransform: 'uppercase' }}>
              {String(projectCards.length).padStart(2, '0')} projects
            </Typography>
          </Stack>

          <Box sx={{ display: 'grid', gridTemplateColumns: isPhone ? '1fr' : isTablet ? '1fr 1fr' : 'minmax(0, 1.1fr) minmax(300px, .9fr)', alignItems: 'end', gap: 4, mb: 'clamp(36px, 5vw, 64px)' }}>
            <Box>
              <Typography sx={{ color: '#172c66', fontWeight: 800, fontSize: 'clamp(2.8rem, 7vw, 5.6rem)', lineHeight: .98, letterSpacing: '-.045em' }}>
                Selected work<span style={{ color: '#f582ae' }}>.</span>
              </Typography>
              <Box sx={{ width: 'min(300px, 68vw)', height: 6, bgcolor: '#f582ae', borderRadius: '999px', mt: 2 }} />
            </Box>
            <Box sx={{ maxWidth: 490, pb: .5 }}>
              <Typography sx={{ color: 'typography.main', fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)', lineHeight: 1.65 }}>
                Products, client platforms and experiments across web development, commerce and AI.
              </Typography>
              <Typography sx={{ color: 'rgba(23,44,102,.68)', mt: 1.25, fontSize: '.95rem', lineHeight: 1.6 }}>
                Each project opens a case study with its context, highlights, stack and available links.
              </Typography>
              <Typography role="note" sx={{ mt: 2, px: 1.75, py: 1.5, borderRadius: '12px', borderLeft: '4px solid #f582ae', bgcolor: 'rgba(245,130,174,.12)', color: '#172c66', fontSize: '.92rem', lineHeight: 1.55, fontWeight: 650 }}>
                These screens show visual previews of the original frontends. Their servers and features are unavailable; visible links open the published sites.
              </Typography>
            </Box>
          </Box>

          <Box
            component="section"
            aria-label="Project catalogue"
            sx={{
              display: 'grid',
              gridTemplateColumns: isPhone ? 'minmax(0, 1fr)' : isTablet ? 'repeat(2, minmax(0, 1fr))' : 'repeat(3, minmax(0, 1fr))',
              gridAutoRows: '1fr',
              gap: isPhone ? 2 : 2.5,
              alignItems: 'stretch',
            }}
          >
            {projectCards.map((project) => (
              <ProjectBox
                key={project.slug}
                title={project.title}
                description={project.description}
                strings={project.coverString ? [project.coverString] : undefined}
                technologies={project.technologies}
                technologyLimit={5}
                status={project.status}
                eyebrow={project.eyebrow}
                coverColor={project.coverColor}
                coverTextColor={project.coverTextColor}
                projectUrl={'/projects/' + project.slug}
              />
            ))}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'clamp(36px, 5vw, 64px)' }}>
            <Button
              component={Link}
              to="/"
              endIcon={<ArrowOutwardRounded />}
              variant="outlined"
              sx={{ minHeight: 46, px: 2.25, borderRadius: '999px', color: '#172c66', borderColor: 'rgba(23,44,102,.24)', textTransform: 'none', fontWeight: 700, '&:hover': { borderColor: '#172c66', bgcolor: 'rgba(23,44,102,.04)' } }}
            >
              Back to portfolio
            </Button>
          </Box>
        </Box>
      </Box>
    </AppearWrapper>
  )
}

export default ProjectLanding
