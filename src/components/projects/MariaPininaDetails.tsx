import React from 'react';
import { Box, Typography, List, ListItem, Divider, useMediaQuery } from '@mui/material';

const MariaPininaDetails: React.FC = (): JSX.Element => {
  const isSmallScreen = useMediaQuery('(max-width:1200px)');

  return (
    <Box>
      <Typography sx={{ marginBottom: '2vw', fontSize: isSmallScreen ? '5vw' : '1.2vw' }}>
        Maria Pinina is not your average online store. It's a full-blown ecommerce platform built to connect users across the globe, allowing anyone to sell and buy anything without middlemen, restrictions, or unnecessary noise. Think of it as a digital shopping mall where sellers and buyers meet, interact, and exchange products. You'll find everything here, from retired yoga robots to punk-style grandma walkers. Yes, it gets weird, and that's the point.
      </Typography>

      <Typography sx={{ marginBottom: '2vw', fontSize: isSmallScreen ? '5vw' : '1.2vw' }}>
        Inspired by platforms like Mercado Libre and Amazon, but with a peer-to-peer-first approach, Maria Pinina gives total control to users. You can create an account, post your product, and sell. No complicated setups or admin bottlenecks. The whole experience was designed to be fast, accessible, and frictionless.
      </Typography>

      <Typography sx={{ marginBottom: '2vw', fontSize: isSmallScreen ? '5vw' : '1.2vw' }}>
        This project represents a huge step in my journey as a full-stack developer. I've dedicated myself to studying modern web technologies through self-learning, lots of reading, and Platzi courses, especially focusing on JavaScript, TypeScript, and Node.js. From that learning process, Maria Pinina was born. A project that reflects not only what I know, but also how I think about building products in 2025.
      </Typography>

      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1vw' }}>
        Tech Stack:
      </Typography>

      <List sx={{padding: '1vw'}}>
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='h5'>
            Frontend
            </Typography>
            <Typography sx={{ color: 'gray' }}>
            ReactJS with TypeScript, using MUI for design consistency and flexibility. Full UI/UX research and design process, ensuring a modern and intuitive visual identity.
            </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='h5'>
            Backend
            </Typography>
            <Typography sx={{ color: 'gray' }}>
            Node.js and TypeScript, implementing Sequelize ORM for efficient and type-safe connection with PostgreSQL.
            </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='h5'>
            Infrastructure
            </Typography>
            <Typography sx={{ color: 'gray' }}>
            AWS hosted solution using EC2 instances, RDS for PostgreSQL, and S3 static bucket for frontend deployment.
            </Typography>
        </ListItem>
        <Divider />
      </List>

      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1vw', marginTop: '2vw' }}>
        Project Highlights:
      </Typography>

      <List sx={{padding: '1vw'}}>
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='h5'>
            Architecture & Design
            </Typography>
            <Typography sx={{ color: 'gray' }}>
            Clean code architecture, solid backend logic, modern and responsive UI, and real-world infrastructure deployment.
            </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='h5'>
            User Experience
            </Typography>
            <Typography sx={{ color: 'gray' }}>
            Fully responsive design ensuring great experience across all devices, from desktops to mobile phones.
            </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='h5'>
            Growth & Evolution
            </Typography>
            <Typography sx={{ color: 'gray' }}>
            Built from scratch as a way to deepen full-stack development skills and create a living system designed to grow and adapt.
            </Typography>
        </ListItem>
      </List>
    </Box>
  );
};

export default MariaPininaDetails;