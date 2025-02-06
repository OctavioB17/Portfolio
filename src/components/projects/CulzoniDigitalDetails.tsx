import React from 'react';
import { Box, Typography, List, ListItem, Divider, useMediaQuery } from '@mui/material';

const CulzoniDigitalDetails: React.FC = (): JSX.Element => {
  const isSmallScreen = useMediaQuery('(max-width:1200px)');

  return (
    <Box>
      <Typography sx={{ marginBottom: '2vw', fontSize: isSmallScreen ? '5vw' : '1.2vw' }}>
        Culzoni Digital is a web application developed for Culzoni S.A., designed as an ERP system to efficiently and automatically manage sales from the Mercado Libre platform. This application handles stock management, pricing, sales, shipping, and invoicing. The primary promise of this system is to automate the sales process, tailoring it to the specific needs of the company and its digital sales unit.
      </Typography>

      <Typography sx={{ marginBottom: '2vw', fontSize: isSmallScreen ? '5vw' : '1.2vw' }}>
        The system is connected to Mercado Libre via its webhook, utilizing socket.io for real-time communication. When the sales platform sends the sales number to the system, it registers it and queries the Mercado Libre API for the items in the sale, the shipping details, and the customer's billing information. All this information is then compiled and entered via API into the TANGO system (the company's main ERP), which updates the universal stock for all sales units.
      </Typography>

      <Typography sx={{ marginBottom: '2vw', fontSize: isSmallScreen ? '5vw' : '1.2vw' }}>
        Once this information is entered, the Tango order number is registered, and when the shipping label is downloaded to be affixed to the product, it contains the number that the shipping manager will input into the system to generate the shipment record. Finally, although these tasks do not necessarily occur sequentially, as it is possible to invoice without shipping or vice versa, the purchase is invoiced. Upon invoicing, a request is sent via API to load this invoice into the sale details so that the buyer can view it at any time.
      </Typography>

      <Typography sx={{ marginBottom: '2vw', fontSize: isSmallScreen ? '5vw' : '1.2vw' }}>
        Additionally, the system includes an extensive table to view all Mercado Libre listings, allowing users to change any details, from system codes to prices and stock. This application (at least its first version) was developed in four months using technologies such as React, TypeScript, Node.js, Express.js, MySQL, AWS (EC2, S3, networking services like Route 53 and DNS), Docker, JWT, and Material-UI.
      </Typography>

      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1vw' }}>
        Key Features:
      </Typography>

      <List sx={{padding: '1vw'}}>
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='h5'>
            Stock Management
            </Typography>
            <Typography sx={{ color: 'gray' }}>
            Efficiently handle the stock across various sales units.
            </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='h5'>
            Pricing
            </Typography>
            <Typography sx={{ color: 'gray' }}>
            Maintain up-to-date pricing information for all products.
            </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='h5'>
            Sales and Shipping
            </Typography>
            <Typography sx={{ color: 'gray' }}>
            Automate sales processing and shipping label generation.
            </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='h5'>
            Invoicing
            </Typography>
            <Typography sx={{ color: 'gray' }}>
            Automate the invoicing process and integrate with the TANGO ERP.
            </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='h5'>
            Real-Time Communication
            </Typography>
            <Typography sx={{ color: 'gray' }}>
            Use socket.io for real-time updates and communication.
            </Typography>
        </ListItem>
        <Divider />
        <ListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            <Typography variant='h5'>
            Extensive Listings Table
            </Typography>
            <Typography sx={{ color: 'gray' }}>
            View and edit details of all Mercado Libre listings.
            </Typography>
        </ListItem>
        </List>
    </Box>
  );
};

export default CulzoniDigitalDetails;
