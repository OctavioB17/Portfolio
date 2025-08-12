import { Box, useMediaQuery } from '@mui/material'
import React from 'react'
import ExperiencesBox from './ExperiencesBox'
import DHCertificate from '../../../../assets/images/WorkAndStudies/1702561702906.jpg'
import DHLogo from '../../../../assets/images/WorkAndStudies/3daea5ec-e5b0-451a-a27e-2b039506c9ca_DigitalHouse_Logo_Black.avif'
import LogoPlatzi from '../../../../assets/images/WorkAndStudies/LOGO-PLATZI-2023.svg.png'
import ExperiencesBoxPhone from '../../../phone/WorkAndStudies/ExperiencesBoxPhone'
import DiplomaNode from '../../../../assets/images/WorkAndStudies/diploma-fundamentos-node-1.png'
import DiplomaExpress from '../../../../assets/images/WorkAndStudies/diploma-backend-nodejs-1.png'
import DiplomaPostgres from '../../../../assets/images/WorkAndStudies/diploma-backend-nodejs-postgres-1.png'
import DiplomaPassport from '../../../../assets/images/WorkAndStudies/diploma-passport-1.png'

const Studies: React.FC = (): JSX.Element => {
  
  const isSmallScreen = useMediaQuery('(max-width:1200px)');

  const dhCertificate: React.FC = () => (
    <Box component='img' src={DHCertificate} sx={{width: isSmallScreen ? '95vw' : '50vw'}}/>
  );

  const nodeCertificate: React.FC = () => (
    <Box component='img' src={DiplomaNode} sx={{width: isSmallScreen ? '95vw' : '50vw'}}/>
  );

  const expressCertificate: React.FC = () => (
    <Box component='img' src={DiplomaExpress} sx={{width: isSmallScreen ? '95vw' : '50vw'}}/>
  );

  const postgresCertificate: React.FC = () => (
    <Box component='img' src={DiplomaPostgres} sx={{width: isSmallScreen ? '95vw' : '50vw'}}/>
  );

  const passportCertificate: React.FC = () => (
    <Box component='img' src={DiplomaPassport} sx={{width: isSmallScreen ? '95vw' : '50vw'}}/>
  );

  const dhDescription: string = 'At Digital House, with 1,568 hours of training, I acquired knowledge in various areas of application development. Here, I learned Front-End development (HTML, CSS, JavaScript) with a strong focus on React and Redux. On the Back-End side, I gained proficiency in Java with the Spring Boot framework. I also mastered several design patterns such as Singleton, Factory, Observer, Strategy, MVC, Proxy, and more. In addition to programming, I delved into security, learning about JWT (JSON Web Tokens), Spring Security, and the use of ORMs (Object-Relational Mappers) to handle databases more efficiently. In the field of infrastructure, I became adept at using AWS (Amazon Web Services) to create cloud servers, utilizing Linux, managing virtual machines, and using Docker to create and deploy images. Regarding databases, I learned SQL with MySQL, gaining the ability to design, query, and maintain relational databases effectively. I also explored UI/UX design, using Figma to create application mockups, and complemented this with Design Thinking methodologies to solve real and complex problems as a team. Furthermore, I embraced agile methodologies, specifically SCRUM and Kanban, to enhance teamwork and project management. Throughout my training, I developed numerous soft skills such as effective communication, time management, and team management for agile teams, ensuring a well-rounded approach to both technical and interpersonal aspects of software development.'
  const platziDescription: string = "Platzi is a leading Latin American online education platform where I'm actively pursuing my professional development as a software developer. My learning journey encompasses a comprehensive curriculum including Express.js, authentication with Passport.js, ORMs like Sequelize, and advanced security practices with JWT tokens. I'm mastering PostgreSQL for database management and diving deep into JavaScript's full potential, exploring multiple paradigms (OOP, imperative programming) and cross-platform development. The courses that i'm doing also covers UI/UX design principles and modern frameworks like Nest.js. This continuous learning path is equipping me with the skills to build robust, secure, and scalable applications while staying current with industry best practices.";

  return (
    <Box>
      {
        isSmallScreen ?
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2vw' }}>
          <ExperiencesBoxPhone photo={DHLogo} institution='Digital House' title='Professional Developer' date='02/01/2022 - 11/01/2023' description={dhDescription} certificates={[{ image: dhCertificate, title: 'Digital House' }]}/>
          <ExperiencesBoxPhone photo={LogoPlatzi} institution='Platzi' title='' date='02/01/2022 - 11/01/2023' description={platziDescription} certificates={[
            { image: nodeCertificate, title: 'Fundamentals of Node.js' },
            { image: expressCertificate, title: 'Backend with Node.js. Express.js' },
            { image: postgresCertificate, title: 'Backend with Node.js and Postgres' },
            { image: passportCertificate, title: 'Authentication with Passport.js' }
          ]}/>
        </Box>
        :
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1vw' }}>
          <ExperiencesBox photo={DHLogo} institution='Digital House' title='Professional Developer' date='02/01/2022 - 11/01/2023' description={dhDescription} certificates={[{ image: dhCertificate, title: 'Digital House' }]}/>
          <ExperiencesBox photo={LogoPlatzi} institution='Platzi' title='' date='16/01/2024 - Now' description={platziDescription} certificates={[
            { image: nodeCertificate, title: 'Fundamentals of Node.js' },
            { image: expressCertificate, title: 'Backend with Node.js. Express.js' },
            { image: postgresCertificate, title: 'Backend with Node.js and Postgres' },
            { image: passportCertificate, title: 'Authentication with Passport.js' }
          ]}/>
        </Box>
      }
    </Box>
  )
}

export default Studies