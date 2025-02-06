import React from 'react';
import { Box, Typography, List, ListItem, Divider, useMediaQuery } from '@mui/material';

const McFlyDetails: React.FC = (): JSX.Element => {
  const isSmallScreen = useMediaQuery('(max-width:1200px)');

  return (
    <Box>
      <Typography sx={{ marginBottom: '2vw', fontSize: isSmallScreen ? '5vw' : '1.2vw' }}>
        McFly is a comprehensive photography portfolio application that allows users to upload, edit, and manage their photos seamlessly. The application features an advanced photo editing section where users can adjust brightness, contrast, saturation, and apply various filters to enhance their images.
      </Typography>

      <Typography sx={{ marginBottom: '2vw', fontSize: isSmallScreen ? '5vw' : '1.2vw' }}>
        Users can create albums, organize their photos, and share them with friends and family. The application also supports multiple file formats and provides a user-friendly interface for easy navigation.
      </Typography>

      <Typography sx={{ marginBottom: '2vw', fontSize: isSmallScreen ? '5vw' : '1.2vw' }}>
        McFly was developed using modern web technologies, ensuring a responsive design that works well on both desktop and mobile devices. The application is built with React, TypeScript, and utilizes a robust backend to handle user data and photo storage.
      </Typography>

      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1vw' }}>
        Key Features:
      </Typography>

      <List sx={{ padding: '1vw' }}>
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5'>
            Photo Upload
          </Typography>
          <Typography sx={{ color: 'gray' }}>
            Easily upload photos from your device.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5'>
            Advanced Editing
          </Typography>
          <Typography sx={{ color: 'gray' }}>
            Edit photos with various tools and filters.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5'>
            Album Creation
          </Typography>
          <Typography sx={{ color: 'gray' }}>
            Organize your photos into albums for easy access.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5'>
            User-Friendly Interface
          </Typography>
          <Typography sx={{ color: 'gray' }}>
            Navigate through your photos effortlessly.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5'>
            Responsive Design
          </Typography>
          <Typography sx={{ color: 'gray' }}>
            Works seamlessly on both desktop and mobile devices.
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ margin: '2vw 0' }} />

      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '3vw' }}>
        Technical Implementation:
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '5vw' }}>
        The project was built with a robust back-end using Node.js with Express, and Sequelize ORM for SQL database management. The front-end was developed with the React framework, ensuring a smooth and interactive user experience. The entire infrastructure is hosted on AWS, leveraging cloud services for scalability and reliability.
      </Typography>

      <Typography variant="body1" sx={{ marginTop: '2vw', fontSize: '5vw' }}>
        Through McFly, we have provided a comprehensive platform for photographers to showcase their work, streamline their workflow, and enhance their online presence with a visually stunning and functionally rich portfolio.
      </Typography>
    </Box>
  );
};

export default McFlyDetails;