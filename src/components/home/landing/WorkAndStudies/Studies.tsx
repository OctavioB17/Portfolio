import { Box, useMediaQuery, Typography, Divider } from '@mui/material'
import React from 'react'
import ExperiencesBox from './ExperiencesBox'
import DHCertificate from '../../../../assets/images/WorkAndStudies/1702561702906.jpg'
import DHLogo from '../../../../assets/images/WorkAndStudies/3daea5ec-e5b0-451a-a27e-2b039506c9ca_DigitalHouse_Logo_Black.avif'
import ExperiencesBoxPhone from '../../../phone/WorkAndStudies/ExperiencesBoxPhone'

const Studies: React.FC = (): JSX.Element => {
  
  const isSmallScreen = useMediaQuery('(max-width:1200px)');

  const dhCertificate: React.FC = (): JSX.Element => {
    return (
      <Box component='img' src={DHCertificate} sx={{width: isSmallScreen ? '95vw' : '50vw'}}/>
    )
  }

  const dhDescription: string = 'At Digital House, with 1,568 hours of training, I acquired knowledge in various areas of application development. Here, I learned Front-End development (HTML, CSS, JavaScript) with a strong focus on React and Redux. On the Back-End side, I gained proficiency in Java with the Spring Boot framework. I also mastered several design patterns such as Singleton, Factory, Observer, Strategy, MVC, Proxy, and more. In addition to programming, I delved into security, learning about JWT (JSON Web Tokens), Spring Security, and the use of ORMs (Object-Relational Mappers) to handle databases more efficiently. In the field of infrastructure, I became adept at using AWS (Amazon Web Services) to create cloud servers, utilizing Linux, managing virtual machines, and using Docker to create and deploy images. Regarding databases, I learned SQL with MySQL, gaining the ability to design, query, and maintain relational databases effectively. I also explored UI/UX design, using Figma to create application mockups, and complemented this with Design Thinking methodologies to solve real and complex problems as a team. Furthermore, I embraced agile methodologies, specifically SCRUM and Kanban, to enhance teamwork and project management. Throughout my training, I developed numerous soft skills such as effective communication, time management, and team management for agile teams, ensuring a well-rounded approach to both technical and interpersonal aspects of software development.'

  const renderDescription = () => {
    return (
      <Box sx={{ padding: '2vw' }}>
        <Typography variant="body1" sx={{ marginBottom: '1vw' }}>
          {dhDescription.split('. ').map((sentence, index) => (
            <Box key={index}>
              <Typography variant="body1" sx={{ marginBottom: '0.5vw' }}>
                {sentence.trim() + (index < dhDescription.split('. ').length - 1 ? '.' : '')}
              </Typography>
              <Divider sx={{ margin: '1vw 0' }} />
            </Box>
          ))}
        </Typography>
      </Box>
    );
  };

  return (
    <Box>
      {
        isSmallScreen ?
        <ExperiencesBoxPhone photo={DHLogo} institution='Digital House' title='Professional Developer' date='02/01/2022 - 11/01/2023' description={renderDescription()} certificate={dhCertificate}/>
        :
        <ExperiencesBox photo={DHLogo} institution='Digital House' title='Professional Developer' date='02/01/2022 - 11/01/2023' description={dhDescription} certificate={dhCertificate}/>
      }
    </Box>
  )
}

export default Studies