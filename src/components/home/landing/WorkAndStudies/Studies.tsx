import { Box } from '@mui/material'
import React from 'react'
import ExperiencesBox from './ExperiencesBox'
import DHCertificate from '../../../../assets/images/WorkAndStudies/1702561702906.jpg'
import DHLogo from '../../../../assets/images/WorkAndStudies/3daea5ec-e5b0-451a-a27e-2b039506c9ca_DigitalHouse_Logo_Black.avif'
import LogoPlatzi from '../../../../assets/images/WorkAndStudies/LOGO-PLATZI-2023.svg.png'
import DiplomaNode from '../../../../assets/images/WorkAndStudies/diploma-fundamentos-node-1.png'
import DiplomaExpress from '../../../../assets/images/WorkAndStudies/diploma-backend-nodejs-1.png'
import DiplomaPostgres from '../../../../assets/images/WorkAndStudies/diploma-backend-nodejs-postgres-1.png'
import DiplomaPassport from '../../../../assets/images/WorkAndStudies/diploma-passport-1.png'

const certificateImage = (src: string, alt: string): React.FC => () => (
  <Box
    component="img"
    src={src}
    alt={alt}
    sx={{
      display: 'block',
      width: 'min(82vw, 960px)',
      maxHeight: '72vh',
      objectFit: 'contain',
      borderRadius: '8px',
      bgcolor: '#fff',
    }}
  />
)

const dhCertificate = certificateImage(DHCertificate, 'Digital House Professional Developer certificate')
const nodeCertificate = certificateImage(DiplomaNode, 'Platzi Fundamentals of Node.js certificate')
const expressCertificate = certificateImage(DiplomaExpress, 'Platzi Backend with Node.js and Express certificate')
const postgresCertificate = certificateImage(DiplomaPostgres, 'Platzi Backend with Node.js and PostgreSQL certificate')
const passportCertificate = certificateImage(DiplomaPassport, 'Platzi Authentication with Passport.js certificate')

const Studies: React.FC = (): JSX.Element => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
    <ExperiencesBox
      photo={DHLogo}
      institution="Digital House"
      title="Professional Developer"
      date="January 2022 – November 2023"
      description="A 1,568-hour program spanning full-stack development, cloud infrastructure, relational data, application security and collaborative product design."
      technologies={['React', 'Redux', 'Java', 'Spring Boot', 'MySQL', 'AWS', 'Docker', 'Linux', 'JWT', 'HTML5', 'CSS3']}
      certificates={[{ image: dhCertificate, title: 'Digital House certificate' }]}
    />
    <ExperiencesBox
      photo={LogoPlatzi}
      institution="Platzi"
      title="Backend development coursework"
      date="January 2024 – Present"
      description="Ongoing coursework in JavaScript, Node.js and backend development, including Express, authentication, PostgreSQL, Sequelize and NestJS."
      technologies={['JavaScript', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'JWT', 'NestJS']}
      certificates={[
        { image: nodeCertificate, title: 'Fundamentals of Node.js' },
        { image: expressCertificate, title: 'Backend with Node.js and Express' },
        { image: postgresCertificate, title: 'Backend with Node.js and PostgreSQL' },
        { image: passportCertificate, title: 'Authentication with Passport.js' },
      ]}
    />
  </Box>
)

export default Studies
