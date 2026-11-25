import { ArrowBackRounded, ArrowForwardRounded, ArrowOutwardRounded } from '@mui/icons-material'
import { Box, Button, Chip, Stack, Typography, useMediaQuery } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import AppearWrapper from '../animations/AppearWrapper'
import { TechnologyChip } from './technologiesIcon'
import ProjectGallery from './ProjectGallery'
import { projectCards } from './projectCards'

const panelSx = {
  bgcolor: 'primary.main',
  border: '1px solid rgba(23,44,102,.1)',
  borderRadius: '20px',
  boxShadow: '0 12px 32px rgba(23,44,102,.055)',
}

const ProjectInfoPage = (): JSX.Element => {
  const { '*': slug } = useParams()
  const isPhone = useMediaQuery('(max-width:760px)')
  const isTablet = useMediaQuery('(max-width:1020px)')
  const projectIndex = projectCards.findIndex((project) => project.slug === slug)
  const project = projectCards[projectIndex]

  if (!project) {
    return (
      <Box component="main" sx={{ minHeight: '100vh', bgcolor: 'secondary.main', px: 3, py: 8, color: 'typography.main' }}>
        <Box sx={{ maxWidth: 900, mx: 'auto' }}>
          <Typography component="h1" sx={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 800 }}>Project not found</Typography>
          <Button component={Link} to="/projects" startIcon={<ArrowBackRounded />} sx={{ mt: 2, color: '#172c66', textTransform: 'none' }}>
            Back to projects
          </Button>
        </Box>
      </Box>
    )
  }

  const previousProject = projectCards[(projectIndex - 1 + projectCards.length) % projectCards.length]
  const nextProject = projectCards[(projectIndex + 1) % projectCards.length]

  return (
    <AppearWrapper>
      <Box
        component="main"
        sx={{
          minHeight: '100vh',
          bgcolor: 'secondary.main',
          color: 'typography.main',
          fontFamily: 'Proxima-Nova',
          px: 'clamp(20px, 5vw, 76px)',
          py: 'clamp(24px, 4vw, 58px)',
        }}
      >
        <Box sx={{ maxWidth: 1360, mx: 'auto' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" gap={2} sx={{ mb: 'clamp(24px, 4vw, 48px)' }}>
            <Button
              component={Link}
              to="/projects"
              startIcon={<ArrowBackRounded />}
              sx={{ minHeight: 44, px: 1.75, borderRadius: '999px', color: '#172c66', bgcolor: 'rgba(23,44,102,.06)', textTransform: 'none', fontWeight: 700, '&:hover': { bgcolor: 'rgba(23,44,102,.1)' } }}
            >
              All projects
            </Button>
            <Typography sx={{ color: 'rgba(23,44,102,.68)', fontWeight: 700, fontSize: '.88rem', letterSpacing: '.08em', textTransform: 'uppercase', textAlign: 'right' }}>
              {String(projectIndex + 1).padStart(2, '0')} <Box component="span" sx={{ opacity: .55 }}>/</Box> {String(projectCards.length).padStart(2, '0')}
            </Typography>
          </Stack>

          <Box
            component="header"
            sx={{
              ...panelSx,
              p: 'clamp(20px, 3vw, 40px)',
              display: 'grid',
              gridTemplateColumns: isTablet ? '1fr' : 'minmax(0, .92fr) minmax(0, 1.08fr)',
              alignItems: 'center',
              gap: 'clamp(24px, 4vw, 56px)',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ minWidth: 0, py: isTablet ? 0 : 1.5 }}>
              <Typography sx={{ color: 'rgba(23,44,102,.68)', fontWeight: 800, fontSize: '.82rem', letterSpacing: '.14em', textTransform: 'uppercase', mb: 1.75 }}>
                {project.eyebrow}
              </Typography>
              <Typography component="h1" sx={{ color: '#172c66', fontWeight: 800, fontSize: 'clamp(2.6rem, 5vw, 5rem)', letterSpacing: '-.05em', lineHeight: .98, overflowWrap: 'anywhere' }}>
                {project.title}<Box component="span" sx={{ color: '#f582ae' }}>.</Box>
              </Typography>
              <Box sx={{ width: 88, height: 5, bgcolor: '#f582ae', borderRadius: '999px', mt: 2.5, mb: 2.25 }} />
              <Typography sx={{ maxWidth: 620, color: 'typography.main', fontSize: 'clamp(1.05rem, 1.35vw, 1.25rem)', lineHeight: 1.65 }}>
                {project.description}
              </Typography>
              <Box role="note" sx={{ mt: 2, px: 1.75, py: 1.5, borderRadius: '12px', borderLeft: '4px solid #f582ae', bgcolor: 'rgba(245,130,174,.12)' }}>
                <Typography sx={{ color: '#172c66', fontSize: '.92rem', lineHeight: 1.55, fontWeight: 650 }}>
                  {project.previewNote}
                </Typography>
              </Box>
              {project.status && (
                <Chip
                  label={project.status}
                  size="small"
                  sx={{ mt: 2.5, height: 32, borderRadius: '999px', bgcolor: 'rgba(245,130,174,.18)', color: '#172c66', fontWeight: 800, '& .MuiChip-label': { px: 1.4 } }}
                />
              )}
            </Box>
            <ProjectGallery project={project} />
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: isPhone ? '1fr' : isTablet ? '1fr' : 'minmax(0, 1.35fr) minmax(320px, .65fr)', alignItems: 'start', gap: 2.5, mt: 2.5 }}>
            <Stack spacing={2.5}>
              <Box component="section" aria-labelledby="project-overview-heading" sx={{ ...panelSx, p: 'clamp(22px, 3vw, 38px)' }}>
                <Typography id="project-overview-heading" component="h2" sx={{ color: '#172c66', fontWeight: 800, fontSize: 'clamp(1.6rem, 2.4vw, 2rem)', letterSpacing: '-.025em', mb: 2 }}>
                  Project overview
                </Typography>
                <Stack spacing={1.75}>
                  {project.overview.map((paragraph) => (
                    <Typography key={paragraph} sx={{ color: 'typography.main', fontSize: '1rem', lineHeight: 1.75 }}>
                      {paragraph}
                    </Typography>
                  ))}
                </Stack>
              </Box>

              <Box component="section" aria-labelledby="project-highlights-heading" sx={{ ...panelSx, p: 'clamp(22px, 3vw, 38px)' }}>
                <Stack direction="row" alignItems="baseline" justifyContent="space-between" gap={2} sx={{ mb: 2 }}>
                  <Typography id="project-highlights-heading" component="h2" sx={{ color: '#172c66', fontWeight: 800, fontSize: 'clamp(1.6rem, 2.4vw, 2rem)', letterSpacing: '-.025em' }}>
                    Highlights
                  </Typography>
                  {project.highlights.length > 0 && (
                    <Typography sx={{ color: 'rgba(23,44,102,.58)', fontWeight: 700, fontSize: '.84rem' }}>
                      {String(project.highlights.length).padStart(2, '0')} points
                    </Typography>
                  )}
                </Stack>
                {project.highlights.length > 0 ? (
                  <Box sx={{ display: 'grid', gridTemplateColumns: isPhone ? '1fr' : 'repeat(2, minmax(0, 1fr))', gap: 1.25 }}>
                    {project.highlights.map((highlight, index) => (
                      <Box key={highlight.title} component="article" sx={{ minWidth: 0, p: 2.25, borderRadius: '14px', bgcolor: 'rgba(23,44,102,.045)', border: '1px solid rgba(23,44,102,.075)' }}>
                        <Typography sx={{ color: '#f06d9d', fontWeight: 800, fontSize: '.8rem', letterSpacing: '.1em', mb: 1 }}>
                          {String(index + 1).padStart(2, '0')}
                        </Typography>
                        <Typography component="h3" sx={{ color: '#172c66', fontWeight: 800, fontSize: '1.08rem', mb: .65 }}>
                          {highlight.title}
                        </Typography>
                        <Typography sx={{ color: 'typography.main', fontSize: '.96rem', lineHeight: 1.55 }}>
                          {highlight.description}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                ) : (
                  <Typography sx={{ color: 'rgba(23,44,102,.76)', fontSize: '1rem', lineHeight: 1.7, p: 2.25, borderRadius: '14px', bgcolor: 'rgba(23,44,102,.045)' }}>
                    The full project scope and supporting material are still being prepared for this case study.
                  </Typography>
                )}
              </Box>
            </Stack>

            <Stack spacing={2.5}>
              <Box component="aside" aria-labelledby="project-stack-heading" sx={{ ...panelSx, p: 'clamp(22px, 2.6vw, 32px)' }}>
                <Typography id="project-stack-heading" component="h2" sx={{ color: '#172c66', fontWeight: 800, fontSize: '1.45rem', letterSpacing: '-.025em', mb: 1.75 }}>
                  Technology stack
                </Typography>
                {project.technologies.length > 0 ? (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {project.technologies.map((technology) => (
                      <TechnologyChip key={technology} technology={technology} />
                    ))}
                  </Box>
                ) : (
                  <Typography sx={{ color: 'rgba(23,44,102,.72)', fontSize: '.96rem', lineHeight: 1.6 }}>
                    No technology stack has been recorded for this project yet.
                  </Typography>
                )}
              </Box>

              <Box component="aside" aria-labelledby="project-links-heading" sx={{ ...panelSx, p: 'clamp(22px, 2.6vw, 32px)' }}>
                <Typography id="project-links-heading" component="h2" sx={{ color: '#172c66', fontWeight: 800, fontSize: '1.45rem', letterSpacing: '-.025em', mb: 1.75 }}>
                  Project links
                </Typography>
                <Stack spacing={1.25}>
                  {project.projectUrl && (
                    <Button
                      component="a"
                      href={project.projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      endIcon={<ArrowOutwardRounded />}
                      variant="contained"
                      sx={{ minHeight: 46, justifyContent: 'space-between', px: 2, borderRadius: '12px', bgcolor: '#f582ae', color: '#172c66', fontWeight: 800, textTransform: 'none', '&:hover': { bgcolor: '#ed6f9d' } }}
                    >
                      Open live frontend
                    </Button>
                  )}
                  {project.gitHubUrl && (
                    <Button
                      component="a"
                      href={project.gitHubUrl}
                      target="_blank"
                      rel="noreferrer"
                      endIcon={<ArrowOutwardRounded />}
                      variant="outlined"
                      sx={{ minHeight: 46, justifyContent: 'space-between', px: 2, borderRadius: '12px', borderColor: 'rgba(23,44,102,.22)', color: '#172c66', fontWeight: 800, textTransform: 'none', '&:hover': { borderColor: '#172c66', bgcolor: 'rgba(23,44,102,.04)' } }}
                    >
                      View source code
                    </Button>
                  )}
                  {!project.projectUrl && !project.gitHubUrl && (
                    <Typography sx={{ color: 'rgba(23,44,102,.72)', fontSize: '.96rem', lineHeight: 1.6 }}>
                    No public frontend link is available.
                    </Typography>
                  )}
                </Stack>
              </Box>
            </Stack>
          </Box>

          <Box component="nav" aria-label="Other projects" sx={{ display: 'grid', gridTemplateColumns: isPhone ? '1fr' : 'repeat(2, minmax(0, 1fr))', gap: 1.5, mt: 'clamp(32px, 5vw, 56px)' }}>
            {[previousProject, nextProject].map((item, index) => (
              <Button
                key={`${index}-${item.slug}`}
                component={Link}
                to={'/projects/' + item.slug}
                startIcon={index === 0 ? <ArrowBackRounded /> : undefined}
                endIcon={index === 1 ? <ArrowForwardRounded /> : undefined}
                sx={{
                  minHeight: 76,
                  display: 'flex',
                  flexDirection: index === 0 ? 'row' : 'row-reverse',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  px: 2.25,
                  borderRadius: '16px',
                  bgcolor: 'rgba(23,44,102,.05)',
                  color: '#172c66',
                  textAlign: index === 0 ? 'left' : 'right',
                  textTransform: 'none',
                  '&:hover': { bgcolor: 'rgba(23,44,102,.09)' },
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: index === 0 ? 'flex-start' : 'flex-end', minWidth: 0 }}>
                  <Typography sx={{ color: 'rgba(23,44,102,.62)', fontSize: '.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em' }}>
                    {index === 0 ? 'Previous project' : 'Next project'}
                  </Typography>
                  <Typography sx={{ fontSize: '1.05rem', fontWeight: 800, overflowWrap: 'anywhere' }}>{item.title}</Typography>
                </Box>
              </Button>
            ))}
          </Box>
        </Box>
      </Box>
    </AppearWrapper>
  )
}

export default ProjectInfoPage
