import { Box, Typography } from '@mui/material'
import { projectInfo } from '../../interfaces/projects/Projects'

const Copy: React.FC<{ paragraphs: string[] }> = ({ paragraphs }) => <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
  {paragraphs.map((paragraph) => <Typography key={paragraph} sx={{ fontSize: 'inherit', lineHeight: 1.7 }}>{paragraph}</Typography>)}
</Box>

export const vun: projectInfo = {
  title: 'VÜN — Audiovisual',
  description: () => <Copy paragraphs={[
    'A completed one-page website for VÜN Audiovisual, a Buenos Aires production company focused on documentary branded content and full-service audiovisual production.',
    'The published frontend presents its services, production process, work and FAQ in a responsive page, with the matching design system and technical SEO foundation.',
  ]} />,
  photosUrl: [],
  technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'GSAP', 'Vercel'],
  status: 'Completed client project',
}

export const mainaOutbound: projectInfo = {
  title: 'Maina Outbound',
  description: () => <Copy paragraphs={[
    'A completed client project for Maina Agency: a B2B prospecting workspace that connects campaign planning with company and lead records, source data and outreach workflows.',
    'The codebase combines a Next.js workspace with a NestJS API, PostgreSQL and Prisma, Redis-backed jobs, AI tooling, WhatsApp channel support and CRM connections. Its interfaces cover campaigns, companies, conversations, Google Sheets and provider setup.',
  ]} />,
  photosUrl: [],
  technologies: ['Next.js 16', 'React 19', 'NestJS 12', 'TypeScript', 'Prisma', 'PostgreSQL', 'Redis', 'OpenAI Agents', 'WhatsApp', 'HubSpot', 'Google Sheets'],
  status: 'Completed client project',
}

export const dialoar: projectInfo = {
  title: 'Dialo.ar',
  description: () => <Copy paragraphs={[
    'A multi-company conversational commerce platform for creating intelligent WhatsApp sales and support assistants. The product combines a business dashboard with catalog discovery, customer conversations and commerce workflows.',
    'The project integrates AI-assisted conversations with tools and services for product catalogs, payments, shipping and commerce platforms. Its architecture includes a TypeScript frontend and API, persistent conversation data, queues and real-time communication.',
  ]} />,
  photosUrl: [],
  technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Material UI', 'Redux Toolkit', 'NestJS', 'PostgreSQL', 'Prisma', 'OpenAI API', 'Auth0', 'WhatsApp', 'Twilio', 'Mercado Pago', 'Socket.IO', 'AWS S3'],
  status: 'Product platform',
}
