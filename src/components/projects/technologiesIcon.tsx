import { Box, Chip, type ChipProps } from '@mui/material'
import type { FC } from 'react'
import type { IconType } from 'react-icons'
import { FaJava } from 'react-icons/fa'
import {
  SiAmazonwebservices,
  SiAmazonec2,
  SiAmazonrds,
  SiAmazonroute53,
  SiAmazons3,
  SiAuth0,
  SiHubspot,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiGooglesheets,
  SiGreensock,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiLinux,
  SiMercadopago,
  SiMui,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRedis,
  SiRedux,
  SiSass,
  SiSequelize,
  SiSearxng,
  SiSocketdotio,
  SiSpring,
  SiSpringboot,
  SiTailwindcss,
  SiTwilio,
  SiTypescript,
  SiVercel,
  SiWhatsapp,
} from 'react-icons/si'
import composioLogo from '../../assets/images/technology-logos/composio.svg'
import mcpLogo from '../../assets/images/technology-logos/mcp.svg'
import playwrightLogo from '../../assets/images/technology-logos/playwright.svg'

const officialLogoAssets: Record<string, string> = {
  composio: composioLogo,
  mcp: mcpLogo,
  'model context protocol': mcpLogo,
  playwright: playwrightLogo,
}

const officialIconRules: Array<{ match: RegExp; icon: IconType }> = [
  { match: /amazon.*rds|aws.*rds|\brds\b/, icon: SiAmazonrds },
  { match: /amazon.*route.?53|aws.*route.?53|route.?53/, icon: SiAmazonroute53 },
  { match: /amazon.*s3|aws.*s3/, icon: SiAmazons3 },
  { match: /amazon.*ec2|aws.*ec2/, icon: SiAmazonec2 },
  { match: /mcp|model context protocol/, icon: SiReact },
  { match: /composio/, icon: SiReact },
  { match: /playwright/, icon: SiReact },
  { match: /mercado pago/, icon: SiMercadopago },
  { match: /auth0/, icon: SiAuth0 },
  { match: /hubspot/, icon: SiHubspot },
  { match: /searxng/, icon: SiSearxng },
  { match: /twilio/, icon: SiTwilio },
  { match: /whatsapp|evolution api|baileys/, icon: SiWhatsapp },
  { match: /openai/, icon: SiOpenai },
  { match: /google sheets/, icon: SiGooglesheets },
  { match: /github actions|githubaction/, icon: SiGithubactions },
  { match: /github/, icon: SiGithub },
  { match: /vercel/, icon: SiVercel },
  { match: /greensock|gsap|scrolltrigger/, icon: SiGreensock },
  { match: /framer motion|framer/, icon: SiFramer },
  { match: /next/, icon: SiNextdotjs },
  { match: /react spring|react-spring/, icon: SiReact },
  { match: /react/, icon: SiReact },
  { match: /redux/, icon: SiRedux },
  { match: /typescript/, icon: SiTypescript },
  { match: /javascript/, icon: SiJavascript },
  { match: /html5|html/, icon: SiHtml5 },
  { match: /css3|css/, icon: SiCss3 },
  { match: /sass|scss/, icon: SiSass },
  { match: /tailwind/, icon: SiTailwindcss },
  { match: /material.?ui|mui/, icon: SiMui },
  { match: /node/, icon: SiNodedotjs },
  { match: /nestjs/, icon: SiNestjs },
  { match: /express/, icon: SiExpress },
  { match: /java\b/, icon: FaJava },
  { match: /spring/, icon: SiSpringboot },
  { match: /postgres/, icon: SiPostgresql },
  { match: /mysql/, icon: SiMysql },
  { match: /sequelize/, icon: SiSequelize },
  { match: /prisma/, icon: SiPrisma },
  { match: /redis/, icon: SiRedis },
  { match: /jwt|json web token/, icon: SiJsonwebtokens },
  { match: /socket io/, icon: SiSocketdotio },
  { match: /docker/, icon: SiDocker },
  { match: /amazon web services|\baws\b/, icon: SiAmazonwebservices },
  { match: /linux/, icon: SiLinux },
  { match: /^git$/, icon: SiGit },
]

const brandColorRules: Array<{ match: RegExp; color: string }> = [
  { match: /next/, color: '#111111' },
  { match: /react/, color: '#087ea4' },
  { match: /typescript/, color: '#3178c6' },
  { match: /javascript/, color: '#9a7600' },
  { match: /html5|html/, color: '#e34f26' },
  { match: /css3|css/, color: '#1572b6' },
  { match: /sass|scss/, color: '#cc6699' },
  { match: /redux/, color: '#764abc' },
  { match: /material.?ui|mui/, color: '#007fff' },
  { match: /tailwind/, color: '#06b6d4' },
  { match: /greensock|gsap|scrolltrigger/, color: '#16813c' },
  { match: /framer/, color: '#0055ff' },
  { match: /node/, color: '#339933' },
  { match: /nestjs/, color: '#e0234e' },
  { match: /express/, color: '#222222' },
  { match: /java\b/, color: '#ed8b00' },
  { match: /spring/, color: '#6db33f' },
  { match: /postgres/, color: '#4169e1' },
  { match: /mysql/, color: '#4479a1' },
  { match: /sequelize/, color: '#52b0e7' },
  { match: /prisma/, color: '#2d3748' },
  { match: /redis/, color: '#d82c20' },
  { match: /jwt|json web token/, color: '#a11b1b' },
  { match: /socket io/, color: '#111111' },
  { match: /docker/, color: '#2496ed' },
  { match: /amazon.*s3|aws.*s3/, color: '#569a31' },
  { match: /amazon.*ec2|aws.*ec2/, color: '#ff9900' },
  { match: /amazon.*rds|aws.*rds|\brds\b/, color: '#527fff' },
  { match: /amazon.*route.?53|aws.*route.?53|route.?53/, color: '#8c4fff' },
  { match: /amazon web services|\baws\b/, color: '#232f3e' },
  { match: /linux/, color: '#b28700' },
  { match: /^git$/, color: '#f05032' },
  { match: /github actions|githubaction/, color: '#2088ff' },
  { match: /github/, color: '#24292f' },
  { match: /vercel/, color: '#111111' },
  { match: /mercado pago/, color: '#009ee3' },
  { match: /auth0/, color: '#eb5424' },
  { match: /hubspot/, color: '#ff7a59' },
  { match: /searxng/, color: '#20a4f3' },
  { match: /twilio/, color: '#f22f46' },
  { match: /whatsapp|evolution api|baileys/, color: '#128c7e' },
  { match: /openai/, color: '#10a37f' },
  { match: /google sheets/, color: '#188038' },
]

const normalizeTechnology = (technology: string): string =>
  technology.toLowerCase().replace(/[._/+-]+/g, ' ').replace(/\s+/g, ' ').trim()

export const technologyIconFor = (technology: string): IconType | undefined => {
  const normalized = normalizeTechnology(technology)
  // Pair the official React and Spring marks in TechnologyMark for React Spring.
  if (/react spring/.test(normalized)) return SiReact
  return officialIconRules.find(({ match }) => match.test(normalized))?.icon
}

export const technologyColorFor = (technology: string): string => {
  const normalized = normalizeTechnology(technology)
  if (normalized.includes('composio') || normalized.includes('mcp')) return '#172c66'
  if (normalized.includes('playwright')) return '#2ead33'
  return brandColorRules.find(({ match }) => match.test(normalized))?.color ?? '#172c66'
}

export const TechnologyMark: FC<{ technology: string; size?: number; className?: string }> = ({ technology, size = 18, className }) => {
  const normalized = normalizeTechnology(technology)
  const image = Object.entries(officialLogoAssets).find(([name]) => normalized.includes(name))?.[1]

  if (image) {
    return (
      <Box
        component="img"
        src={image}
        alt=""
        aria-hidden="true"
        className={className}
        sx={{ width: size, height: size, objectFit: 'contain', flex: '0 0 auto' }}
      />
    )
  }

  if (/react spring/.test(normalized)) {
    return (
      <Box aria-hidden="true" className={className} sx={{ width: size * 1.45, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '2px', flex: '0 0 auto' }}>
        <SiReact focusable="false" style={{ width: size * .72, height: size * .72, color: '#087ea4' }} />
        <SiSpring focusable="false" style={{ width: size * .72, height: size * .72, color: '#6db33f' }} />
      </Box>
    )
  }

  const Icon = technologyIconFor(technology)
  if (!Icon) return null

  return <Icon aria-hidden="true" focusable="false" className={className} style={{ width: size, height: size, color: technologyColorFor(technology), flex: '0 0 auto' }} />
}

export interface TechnologyChipProps extends Omit<ChipProps, 'icon' | 'label'> {
  technology: string
}

export const TechnologyChip: FC<TechnologyChipProps> = ({ technology, sx, ...props }) => {
  if (!officialLogoAssets[normalizeTechnology(technology)] && !technologyIconFor(technology)) return null

  return (
    <Chip
      {...props}
      icon={<TechnologyMark technology={technology} />}
      label={technology}
      size={props.size ?? 'small'}
      variant="filled"
      sx={{
        height: 36,
        borderRadius: '999px',
        bgcolor: 'rgba(23, 44, 102, .055)',
        color: '#172c66',
        fontWeight: 700,
        border: '1px solid rgba(23, 44, 102, .10)',
        '& .MuiChip-icon': { ml: '8px', mr: '-3px', minWidth: 17, width: 'auto', height: 17 },
        '& .MuiChip-label': { px: 1.15, fontSize: '.82rem', letterSpacing: '-.01em' },
        '&:hover': { bgcolor: 'rgba(23, 44, 102, .09)', borderColor: 'rgba(23, 44, 102, .2)' },
        ...sx,
      }}
    />
  )
}
