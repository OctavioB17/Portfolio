import { ArrowForwardRounded } from '@mui/icons-material'
import { Box, Button, Typography, useMediaQuery } from '@mui/material'
import type { FC } from 'react'
import ProjectBox from './ProjectSection/ProjectBox'
import { projectCards } from '../../projects/projectCards'
import { useNavigate } from 'react-router-dom'

const ProjectSection: FC = (): JSX.Element => {
  const navigate = useNavigate()
  const isSmallScreen = useMediaQuery('(max-width:900px)')

  return (
    <Box
      component="section"
      aria-labelledby="projects-heading"
      sx={{
        width: '100%',
        bgcolor: 'primary.main',
        px: isSmallScreen ? 'clamp(20px, 5vw, 32px)' : 'clamp(40px, 5vw, 80px)',
        py: isSmallScreen ? 'clamp(56px, 12vw, 88px)' : 'clamp(64px, 5vw, 88px)',
      }}
    >
      <Box sx={{ maxWidth: 1320, mx: 'auto' }}>
        <Typography
          id="projects-heading"
          component="h2"
          sx={{
            color: 'typography.main',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            lineHeight: 1.1,
            mb: 3.5,
            textDecoration: 'underline',
            textDecorationColor: '#f582ae',
            textDecorationThickness: '5px',
            textUnderlineOffset: '7px',
          }}
        >
          Selected projects
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: isSmallScreen ? '1fr' : 'repeat(2, minmax(0, 1fr))',
            gridAutoRows: '1fr',
            gap: isSmallScreen ? 2 : 3,
            alignItems: 'stretch',
          }}
        >
          {projectCards.slice(0, 6).map((project) => (
            <ProjectBox
              key={project.title}
              title={project.title}
              description={project.description}
              strings={project.previewStrings ?? project.strings}
              technologies={project.technologies}
              technologyLimit={5}
              status={project.status}
              eyebrow={project.eyebrow}
              coverColor={project.coverColor}
              coverTextColor={project.coverTextColor}
              projectUrl={project.slug ? '/projects/' + project.slug : undefined}
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
          <Button
            onClick={() => navigate('/projects')}
            variant="outlined"
            endIcon={<ArrowForwardRounded />}
            sx={{
              minHeight: 44,
              color: 'button.main',
              textTransform: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              borderColor: 'button.main',
              '&:hover': { borderColor: 'button.main', bgcolor: 'rgba(0,24,88,.04)' },
            }}
          >
            Browse all projects
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default ProjectSection
