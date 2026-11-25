import { Box, Typography } from '@mui/material'
import React from 'react'
import ExperiencesBox from './ExperiencesBox'
import Culzoni from '../../../../assets/images/WorkAndStudies/Logo_Culzoni_Sin_Slogan.png'

const highlights = [
  'Moved from digital marketing into full-stack development as the company needed custom software to manage sales at scale.',
  'Designed and implemented a hybrid ERP for sales operations, stock updates and invoicing.',
  'Connected Mercado Libre and Tango through webhooks to capture, process and invoice sales automatically.',
  'Manage application infrastructure with AWS, Docker and Linux, and build AI-enabled product workflows with tool calling, MCP and human approval steps.',
]

const description = (
  <Box component="ul" sx={{ m: 0, pl: 2.5, display: 'flex', flexDirection: 'column', gap: 1.2, '& li::marker': { color: '#d94d85' } }}>
    {highlights.map((highlight) => (
      <Typography key={highlight} component="li" sx={{ color: 'typography.main', fontSize: '1rem', lineHeight: 1.6 }}>
        {highlight}
      </Typography>
    ))}
  </Box>
)

const Work: React.FC = (): JSX.Element => (
  <ExperiencesBox
    photo={Culzoni}
    institution="Culzoni"
    title="Full-stack Developer"
    date="November 2023 – Present"
    description={description}
    impact={{ value: '≈ 3 hours', label: 'of manual work saved each day through sales automation' }}
    technologies={['React', 'TypeScript', 'Node.js', 'Java', 'Spring Boot', 'MySQL', 'AWS', 'Docker', 'Linux', 'OpenAI API', 'MCP SDK']}
  />
)

export default Work
