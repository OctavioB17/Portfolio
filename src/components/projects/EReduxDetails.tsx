import React from 'react';
import { Box, Typography, List, ListItem, Divider } from '@mui/material';

const EReduxDetails: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Typography sx={{ marginBottom: '2vw', fontSize: '1.2vw' }}>
        E-Redux is one of my projects that I developed to practice and master Redux. This application is a simple e-commerce platform where users can simulate a purchase and add items to a shopping cart, which is the main attraction. The data loading and display across pages that are not directly connected occur through Redux and Redux Thunk, providing a modern and secure way to transmit information on the Front-End.
      </Typography>

      <Typography sx={{ marginBottom: '2vw', fontSize: '1.2vw' }}>
        The visual aspect and components in React are powered by Material-UI, which provided me with a quick and easy way to build the interface and its functionality. This project allowed me to delve deep into state management with Redux and enhance my skills in creating responsive and interactive web applications.
      </Typography>

      <Typography variant='h3' sx={{ marginBottom: '2vw', fontWeight: 600}}>
        Key Features:
      </Typography>

      <List>
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5'>
            Shopping Cart Simulation
          </Typography>
          <Typography sx={{ color: 'grey' }}>
            Users can simulate a purchase by adding items to a shopping cart, experiencing a complete e-commerce flow.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5'>
            State Management with Redux
          </Typography>
          <Typography sx={{ color: 'grey' }}>
            Data is loaded and managed across different pages using Redux and Redux Thunk, ensuring a robust and secure data flow.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5'>
            Material-UI Components
          </Typography>
          <Typography sx={{ color: 'grey' }}>
            The interface and functionality are built with Material-UI, offering a sleek and efficient design solution.
          </Typography>
        </ListItem>
      </List>

      <Divider sx={{ margin: '2vw 0' }} />

      <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '1vw' }}>
        Technical Implementation:
      </Typography>
      <List>
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5'>
            Front-End
          </Typography>
          <Typography sx={{ color: 'grey' }}>
            React, TypeScript, Material-UI
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5'>
            State Management
          </Typography>
          <Typography sx={{ color: 'grey' }}>
            Redux, Redux Thunk
          </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
          <Typography variant='h5'>
            Security
          </Typography>
          <Typography sx={{ color: 'grey' }}>
            Secure data transmission and state management
          </Typography>
        </ListItem>
      </List>

      <Typography sx={{ marginTop: '2vw', fontSize: '1.2vw' }}>
        Through E-Redux, I was able to create a functional and engaging e-commerce application while honing my skills in state management and front-end development.
      </Typography>
    </Box>
  );
};

export default EReduxDetails;
