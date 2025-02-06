import { Box, Link, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { mcfly, eredux, culzoniDigital, portfolio } from '../projects/projectsInfo';
import ProjectBox from '../home/landing/ProjectSection/ProjectBox';
import { technologiesIcon } from './technologiesIcon';
import AppearWrapper from '../animations/AppearWrapper';
import { FaArrowLeft } from "react-icons/fa";
import { Link as LinkRouterDom } from 'react-router-dom'


const projects = {
  mcfly: mcfly,
  eredux: eredux,
  culzoniDigital: culzoniDigital,
  portfolio: portfolio,
};

const ProjectInfoPage: React.FC = (): JSX.Element => {
  const params = useParams();
  const paramValue: string | undefined = params['*'];

  const projectSelected = paramValue ? projects[paramValue as keyof typeof projects] : undefined;

  return (
    <AppearWrapper>
      <LinkRouterDom to={'/projects'}> 
        <FaArrowLeft style={{color: '#172c66', position: 'absolute', left: 20, top: 20, fontSize: '1.5vw'}}/>
      </LinkRouterDom>
      <Box sx={{ width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'secondary.main', fontFamily: 'Proxima-Nova' }}>
        {projectSelected ? (
          <Box sx={{display: 'flex', padding: '5vw', gap: '3vw'}}>
            <Box sx={{bgcolor: 'primary.main', width: '50vw', borderRadius: '10px', padding: '2vw', gap: '1vw', display: 'flex', flexDirection: 'column', }}>
              <Typography variant='h2' sx={{ fontWeight: '600', color: 'typography.main' }}>
                  <span style={{ textDecoration: 'underline', textDecorationColor: '#f582ae' }}>
                      {projectSelected.title}
                  </span>
              </Typography>
              <Box sx={{display: 'flex', color: 'typography.main', fontSize: '1vw'}}>
                {React.createElement(projectSelected.description)}
              </Box>
            </Box>
            <Box sx={{ width: '40vw', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '2vw', justifyContent: 'space-between' }}>
              <ProjectBox strings={projectSelected.photosUrl} slidesPerView={1} spaceBetween={50} sx={{bgcolor: 'primary.main', maxHeight: '21vw'}} photoStyle={{width: '100%'}}/>
              <Box sx={{ width: '40vw', bgcolor: 'primary.main', display: 'flex', flexDirection: 'column', padding: '1vw', borderRadius: '10px' }}>
                <Typography variant='h3' sx={{textDecoration: 'underline', color: 'typography.main', fontWeight: 600}}>
                  <span style={{ textDecoration: 'underline', textDecorationColor: '#f582ae' }}>
                    Technologies used:
                  </span>
                </Typography>
                <List sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', padding: '1vw', gap: '1vw', color: 'typography.main' }}>
                  {
                    projectSelected.technologies.map((technology, index) => (
                      <Box key={index} sx={{display: 'flex', alignItems: 'center'}}>
                        <ListItemIcon sx={{display: 'flex', justifyContent: 'center'}}>
                          {technologiesIcon[technology] ? React.createElement(technologiesIcon[technology], { style: { fontSize: '2vw', color: '#172c66' } }) : null}
                        </ListItemIcon>
                        <ListItem key={index} sx={{fontWeight: '700', fontSize: '1vw'}}>
                          {technology}
                        </ListItem>
                      </Box>
                    ))
                  }
                </List>
              </Box>
              <Box sx={{color: 'typography.main', bgcolor: 'primary.main', padding: '1vw', borderRadius: '10px'}}>
                <Typography variant='h4' sx={{fontWeight: 800}}>
                  URL:
                </Typography>
                <Link href={projectSelected.projectUrl} sx={{color: 'typography.main'}}>
                  <Typography sx={{padding: '1vw', paddingLeft: '2vw', fontSize: '1vw'}}>
                    {projectSelected.projectUrl}
                  </Typography>
                </Link>
              </Box>
              <Box sx={{color: 'typography.main', bgcolor: 'primary.main', padding: '1vw', borderRadius: '10px'}}>
                <Typography variant='h4' sx={{fontWeight: 800}}>
                  GitHub URL:
                </Typography>
                  {
                    projectSelected.gitHubUrl !== "Not public" ?
                    <Link href={projectSelected.gitHubUrl} sx={{color: 'typography.main'}}>
                      <Typography sx={{padding: '1vw', paddingLeft: '2vw', fontSize: '1vw'}}>
                        {projectSelected.gitHubUrl}
                      </Typography>
                    </Link>
                    :
                    <Typography variant='h5' sx={{textDecoration: 'underline', padding: '1vw'}}>
                      Not public
                    </Typography>
                  }
              </Box>
            </Box>
          </Box>
        ) : (
          <h2>Project not found</h2>
        )}
      </Box>
    </AppearWrapper>
  );
};

export default ProjectInfoPage;
