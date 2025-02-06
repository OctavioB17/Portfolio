import { Box, useMediaQuery } from '@mui/material';
import ProjectInfoPagePhone from '../phone/Projects/ProjectInfoPagePhone';
import ProjectInfoPage from './ProjectInfoPage';

const ProjectInfoPageViewHandler = () => {
    const isSmallScreen = useMediaQuery('(max-width:1200px)');

    return (
    <Box>
    {
        isSmallScreen ?
        <ProjectInfoPagePhone/>
        :
        <ProjectInfoPage/>
    }
    </Box>
  )
}

export default ProjectInfoPageViewHandler