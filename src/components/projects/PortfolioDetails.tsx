import React from 'react';
import { Box, Typography, List, ListItem, Divider, useMediaQuery } from '@mui/material';

const PortfolioDetails: React.FC = (): JSX.Element => {
  const isSmallScreen = useMediaQuery('(max-width:1200px)');

  return (
    <Box>
      <Typography sx={{ marginBottom: '2vw', fontSize: isSmallScreen ? '5vw' : '1.2vw' }}>
        The Portfolio application showcases a collection of projects and skills, allowing users to present their work in a visually appealing manner. This application is designed to be user-friendly and responsive, ensuring a seamless experience across devices.
      </Typography>

      <Typography sx={{ marginBottom: '2vw', fontSize: isSmallScreen ? '5vw' : '1.2vw' }}>
        Users can easily navigate through different sections, view project details, and access links to live demos and source code. The application is built with modern web technologies, ensuring fast loading times and a smooth user experience.
      </Typography>

      <Typography sx={{ marginBottom: '2vw', fontSize: isSmallScreen ? '5vw' : '1.2vw' }}>
        The Portfolio application also includes features such as filtering projects by category, searching for specific projects, and a contact form for potential clients to reach out directly.
      </Typography>

      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1vw' }}>
        Key Features:
      </Typography>

      <List sx={{ padding: '1vw' }}>
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5'>
            Project Showcase
          </Typography>
          <Typography sx={{ color: 'gray' }}>
            Display a collection of projects with detailed descriptions.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5'>
            Responsive Design
          </Typography>
          <Typography sx={{ color: 'gray' }}>
            Ensure a seamless experience on both desktop and mobile devices.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5'>
            Project Filtering
          </Typography>
          <Typography sx={{ color: 'gray' }}>
            Filter projects by category for easy navigation.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5'>
            Contact Form
          </Typography>
          <Typography sx={{ color: 'gray' }}>
            Allow potential clients to reach out directly.
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default PortfolioDetails;