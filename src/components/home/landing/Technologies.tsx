import { Box, Typography, useMediaQuery } from '@mui/material'
import type { FC } from 'react'
import CodeIcon from '../../visual/CodeIcon'
import { TechnologyChip } from '../../projects/technologiesIcon'

const groups = [
  {
    title: 'Frontend',
    description: 'Building responsive interfaces, reusable components and clear product flows.',
    technologies: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'Redux', 'Material UI', 'Tailwind CSS', 'GSAP'],
  },
  {
    title: 'Backend & data',
    description: 'Developing APIs, business logic, authentication and relational data workflows.',
    technologies: ['Node.js', 'NestJS', 'Express', 'Java', 'Spring Boot', 'MySQL', 'PostgreSQL', 'Sequelize', 'Prisma', 'Redis', 'JWT', 'Socket.IO'],
  },
  {
    title: 'AI & integrations',
    description: 'Connecting language models and business tools to products and customer journeys.',
    technologies: ['OpenAI API', 'MCP SDK', 'Composio', 'Google Sheets', 'WhatsApp', 'Playwright'],
  },
  {
    title: 'Cloud & delivery',
    description: 'Running applications, services and delivery workflows across development and cloud.',
    technologies: ['AWS', 'AWS EC2', 'AWS S3', 'Docker', 'Linux', 'Git', 'GitHub', 'GitHub Actions', 'Vercel'],
  },
]

const Technologies: FC = (): JSX.Element => {
  const isSmallScreen = useMediaQuery('(max-width:900px)')

  return (
    <Box
      component="section"
      id="technologies"
      aria-labelledby="skills-heading"
      sx={{
        width: '100%',
        bgcolor: 'secondary.main',
        px: isSmallScreen ? 'clamp(20px, 5vw, 36px)' : 'clamp(40px, 7vw, 104px)',
        py: isSmallScreen ? 'clamp(56px, 12vw, 88px)' : 'clamp(72px, 7vw, 104px)',
      }}
    >
      <Box sx={{ maxWidth: 1320, mx: 'auto' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
          <CodeIcon sx={{ fontSize: isSmallScreen ? 34 : 40, color: '#172c66', flex: '0 0 auto' }} />
          <Typography
            id="skills-heading"
            component="h2"
            sx={{
              color: 'typography.main',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              lineHeight: 1.1,
              textDecoration: 'underline',
              textDecorationColor: '#f582ae',
              textDecorationThickness: '5px',
              textUnderlineOffset: '7px',
            }}
          >
            Technologies & tools
          </Typography>
        </Box>
        <Typography
          sx={{
            color: 'typography.main',
            maxWidth: 760,
            mb: 4,
            fontSize: 'clamp(1rem, 1.2vw, 1.2rem)',
            lineHeight: 1.65,
          }}
        >
          A snapshot of the tools I use across product interfaces, business systems, AI workflows and cloud delivery.
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: isSmallScreen ? '1fr' : 'repeat(2, minmax(0, 1fr))',
            gap: isSmallScreen ? 2 : 2.5,
            alignItems: 'stretch',
          }}
        >
          {groups.map((group) => (
            <Box
              key={group.title}
              component="article"
              sx={{
                minWidth: 0,
                bgcolor: 'primary.main',
                p: 'clamp(20px, 2.4vw, 32px)',
                border: '1px solid rgba(23, 44, 102, .10)',
                borderTop: '4px solid #f582ae',
                borderRadius: '12px',
              }}
            >
              <Typography component="h3" sx={{ color: 'typography.main', fontWeight: 800, fontSize: 'clamp(1.4rem, 2vw, 1.8rem)', mb: 0.75 }}>
                {group.title}
              </Typography>
              <Typography sx={{ color: 'typography.main', mb: 2.5, fontSize: '1rem', lineHeight: 1.55 }}>
                {group.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {group.technologies.map((technology) => (
                  <TechnologyChip key={technology} technology={technology} variant="outlined" sx={{ borderColor: 'rgba(23, 44, 102, .24)' }} />
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Technologies
