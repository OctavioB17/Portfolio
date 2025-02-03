import React from 'react';
import { Box, Typography, List, ListItem, Divider, Link } from '@mui/material';

const PortfolioDetails: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Typography sx={{ marginBottom: '2vw', fontSize: '1.2vw' }}>
        This portfolio is a testament to my experience and dedication to web development and JavaScript. Through this platform, I aim to dynamically and vividly showcase my knowledge and skills, as well as the projects that back up my learning with action and experience.
      </Typography>

      <Typography  sx={{ marginBottom: '2vw', fontSize: '1.2vw' }}>
        I have integrated subtle animations using React-spring, and everything is exclusively built from the Front-End with React, ensuring all information and interactions are client-side. The design features an almost neo-brutalist style, using color palettes inspired by the author Mackenzie Child, derived from his website Happy Hues.
      </Typography>

      <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '1vw' }}>
        Key Features:
      </Typography>

      <List>
      <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            Dynamic Showcasing
          </Typography>
          <Typography sx={{ color: 'grey' }}>
            The portfolio dynamically and visually presents my skills and knowledge.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            Project Highlights
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Each project demonstrates practical applications of my learning, providing tangible evidence of my experience.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            Front-End Focus
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            The entire application is built using React, with all interactions and information handled on the client side.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            Animations with React-spring
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Subtle animations enhance the user experience, making the interface more engaging.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            Neo-Brutalist Design
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            The design incorporates bold, harmonious colors inspired by Mackenzie Child's <Link>Happy Hues</Link>.
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ margin: '2vw 0' }} />

      <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '1vw' }}>
        Technologies Used:
      </Typography>
      <List>
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            React
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            For building the interactive user interface.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            React-spring
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            For incorporating animations.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            Material-UI
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            For implementing the design and component structure.
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default PortfolioDetails;