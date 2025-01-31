import React from 'react';
import { Box, Typography, List, ListItem, Divider } from '@mui/material';

const McFlyDetails: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Typography sx={{ marginBottom: '2vw', fontSize: '1.3vw' }}>
        At McFly, we crafted a portfolio-style website for one of my clients, designed to showcase professional photographs and facilitate their editing, uploading, and management. The application is user-friendly and visually appealing, featuring a neo-brutalist design with bold yet harmonious colors.
      </Typography>

      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1vw' }}>
        Key Features:
      </Typography>

      <List>
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h6' sx={{ fontWeight: 600, fontSize: '1.3vw' }}>
            Intuitive Photo Display
          </Typography>
          <Typography sx={{ padding: '1vw', fontSize: '1.2rem' }}>
            The primary function of McFly is to display photos in a friendly and innovative manner. Photos are presented as if they were Polaroids, complete with titles and descriptions. The homepage features a compilation of all uploaded photos in a masonry layout that preserves the original dimensions of each photo.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h6' sx={{ fontWeight: 600, fontSize: '1.3vw' }}>
            Admin Panel
          </Typography>
          <Typography sx={{ padding: '1vw', fontSize: '1.2rem' }}>
            The application includes a comprehensive admin panel with multiple functionalities.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h6' sx={{ fontWeight: 600, fontSize: '1.3vw' }}>
            Photo Information Table
          </Typography>
          <Typography sx={{ padding: '1vw', fontSize: '1.2rem' }}>
            This table displays detailed information about each photo and provides options to perform actions such as deleting photos.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h6' sx={{ fontWeight: 600, fontSize: '1.3vw' }}>
            Photo Upload Panel
          </Typography>
          <Typography sx={{ padding: '1vw', fontSize: '1.2rem' }}>
            This intuitive panel allows users to upload photos by simply dragging and dropping them, then adding a title and description. Once uploaded, the photos are instantly reflected on the homepage.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h6' sx={{ fontWeight: 600, fontSize: '1.3vw' }}>
            Photo Editing Panel
          </Typography>
          <Typography sx={{ padding: '1vw', fontSize: '1.2rem' }}>
            One of the most unique features is the photo editing panel, which is customized to allow clients to edit their photos before uploading them. This panel includes options for cropping, adjusting intensities, grayscale conversion, saturation, hue adjustments, highlighting colors, rotating, and applying filters. After editing, clients can download the edited photos and then upload them to the portfolio.
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ margin: '2vw 0' }} />

      <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1vw', fontSize: '1.8vw' }}>
        Technical Implementation:
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1vw' }}>
        The project was built with a robust back-end using Node.js with Express, and Sequelize ORM for SQL database management. The front-end was developed with the React framework, ensuring a smooth and interactive user experience. The entire infrastructure is hosted on AWS, leveraging cloud services for scalability and reliability.
      </Typography>

      <Typography variant="body1" sx={{ marginTop: '2vw', fontSize: '1vw' }}>
        Through McFly, we have provided a comprehensive platform for photographers to showcase their work, streamline their workflow, and enhance their online presence with a visually stunning and functionally rich portfolio.
      </Typography>
    </Box>
  );
};

export default McFlyDetails;