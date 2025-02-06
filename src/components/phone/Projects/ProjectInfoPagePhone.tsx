import { Box, Link, ListItem, ListItemIcon, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { Link as LinkRouterDom } from 'react-router-dom'
import AppearWrapper from '../../animations/AppearWrapper';
import ProjectBox from '../../home/landing/ProjectSection/ProjectBox';
import { mcfly, eredux, culzoniDigital, portfolio } from '../../projects/projectsInfo';
import { technologiesIcon } from '../../projects/technologiesIcon';
import Grid from '@mui/material/Grid2'  ;


const projects = {
  mcfly: mcfly,
  eredux: eredux,
  culzoniDigital: culzoniDigital,
  portfolio: portfolio,
};

const ProjectInfoPagePhone: React.FC = (): JSX.Element => {
  const params = useParams();
  const paramValue: string | undefined = params['*'];

  const projectSelected = paramValue ? projects[paramValue as keyof typeof projects] : undefined;

  return (
    <AppearWrapper>
      <LinkRouterDom to={'/projects'}> 
        <Box sx={{padding: '1vw', width: '100vw', bgcolor: 'secondary.main'}}>
        <FaArrowLeft style={{color: '#172c66', fontSize: '7vw'}}/>
        </Box>
      </LinkRouterDom>
      <Box sx={{ width: '100vw', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: 'secondary.main', fontFamily: 'Proxima-Nova' }}>
        {projectSelected ? (
          <Box sx={{display: 'flex', flexDirection: 'column'}}>
            <Box sx={{paddingTop: '10vw'}}>
                <ProjectBox strings={projectSelected.photosUrl} slidesPerView={1} spaceBetween={50} sx={{bgcolor: 'primary.main', borderTop: '10px solid #fef6e4', borderRadius: 0}} photoStyle={{width: '100vw'}}/>
            </Box>
            <Box sx={{bgcolor: 'primary.main', width: '100vw', padding: '2vw', gap: '1vw', display: 'flex', flexDirection: 'column'}}>
              <Typography sx={{ fontWeight: '600', color: 'typography.main', fontSize: '13vw' }}>
                  <span style={{ textDecoration: 'underline', textDecorationColor: '#f582ae' }}>
                      {projectSelected.title}
                  </span>
              </Typography>
              <Box sx={{display: 'flex', color: 'typography.main'}}>
                {React.createElement(projectSelected.description)}
              </Box>
            </Box>
              <Box sx={{ width: '100vw', bgcolor: 'primary.main', display: 'flex', flexDirection: 'column', padding: '1vw' }}>
                <Typography sx={{textDecoration: 'underline', color: 'typography.main', fontWeight: 600, paddingLeft: '2vw', fontSize: '10vw'}}>
                  <span style={{ textDecoration: 'underline', textDecorationColor: '#f582ae' }}>
                    Technologies used:
                  </span>
                </Typography>
                <Grid container spacing={0} sx={{ padding: '1vw', color: 'typography.main' }}>
                    {projectSelected.technologies.map((technology, index) => (
                        <Grid size={6} key={index} sx={{ display: 'flex', alignItems: 'center', paddingBottom: '6vw' }}>
                        <ListItemIcon sx={{ display: 'flex', justifyContent: 'center' }}>
                            {technologiesIcon[technology] ? React.createElement(technologiesIcon[technology], { style: { fontSize: '7vw', color: '#172c66' } }) : null}
                        </ListItemIcon>
                        <ListItem sx={{ fontWeight: '700', fontSize: '4vw', paddingLeft: 0 }}>
                            {technology}
                        </ListItem>
                        </Grid>
                    ))}
                </Grid>
              </Box>
              <Box sx={{color: 'typography.main', bgcolor: 'primary.main', padding: '1vw'}}>
                <Typography variant='h4' sx={{fontWeight: 800}}>
                  URL:
                </Typography>
                <Link href={projectSelected.projectUrl} sx={{color: 'typography.main'}}>
                  <Typography sx={{padding: '1vw', paddingLeft: '2vw', fontSize: '6vw'}}>
                    {projectSelected.projectUrl}
                  </Typography>
                </Link>
              </Box>
              <Box sx={{color: 'typography.main', bgcolor: 'primary.main', padding: '1vw'}}>
                <Typography variant='h4' sx={{fontWeight: 800}}>
                  GitHub URL:
                </Typography>
                  {
                    projectSelected.gitHubUrl !== "Not public" ?
                    <Link href={projectSelected.gitHubUrl} sx={{color: 'typography.main'}}>
                      <Typography sx={{padding: '1vw', paddingLeft: '2vw', fontSize: '4vw'}}>
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
        ) : (
          <Typography variant='h2'>Project not found</Typography>
        )}
      </Box>
    </AppearWrapper>
  );
};

export default ProjectInfoPagePhone;