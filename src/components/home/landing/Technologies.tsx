import { Box, List, ListItem, ListItemAvatar, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import CodeIcon from '../../visual/CodeIcon'
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import { GiSpring } from "react-icons/gi";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { CiDatabase } from "react-icons/ci";
import { SiJsonwebtokens } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import SettingsIcon from '@mui/icons-material/Settings';

const Technologies: React.FC = (): JSX.Element => {

  const isSmallScreen = useMediaQuery('(max-width:1200px)');
  
  return (
    <Box sx={{width: '100vw', bgcolor: 'secondary.main', padding: isSmallScreen ? '1VW' : '5vw' }}>
      <Typography variant={isSmallScreen ? 'h3' : 'h2'} sx={{color: 'button.main', fontWeight: '600', textDecoration: 'underline', display: 'flex', padding: isSmallScreen ? '3vw' : ''}}>
        <span style={{fontWeight: 600, color: '#172c66', display: 'inline'}}>Core competencies</span>
      </Typography>
      <Box sx={{paddingLeft: '3vw', paddingTop: '3vw', paddingBottom: '1vw', display: 'flex', flexDirection: 'column', gap: '1vw'}}>
        <Box sx={{display: 'flex', alignItems: 'center', gap: isSmallScreen ? '8vw' : '2vw'}}>
            <CodeIcon sx={{ fontSize: isSmallScreen ? '10vw' : '2.2vw' }}/>
            <Typography variant={isSmallScreen ? 'h4' : 'h3'} sx={{fontWeight: '600'}}>Front-End development</Typography>
        </Box>
        <Typography variant='h5' sx={{width: isSmallScreen ? '95vw' : '75vw'}}>
            I specialize in creating dynamic and interactive user interfaces with a strong focus on performance and user experience. Here are the technologies and tools I use:
        </Typography>
        <List sx={{paddingLeft: isSmallScreen? '' : '5vw'}}>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: isSmallScreen ? '3vw' : '1vw'}}>
                        <FaReact style={{fontSize: isSmallScreen ? '2.3rem' : '2vw'}} />
                        <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                            React
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{width: isSmallScreen ? '90vw' : '70vw', color: '#484848'}}>Proficient in using all the commonly used hooks such as useState, useEffect, useContext, useReducer, and useRef. Experienced in creating custom hooks to encapsulate and reuse logic across multiple components. Building reusable components and managing state effectively to ensure a seamless user experience.. </Typography>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: isSmallScreen ? '3vw' : '1vw'}}>
                        <SiRedux style={{fontSize: isSmallScreen ? '2.3rem' : '2vw'}} />
                        <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                            Redux
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{width: isSmallScreen ? '90vw' : '70vw', color: '#484848'}}>Utilizing thunk for handling asynchronous actions and side effects in Redux. Skilled in using dispatch to trigger state updates and manage complex state scenarios. Implementing reducers and actions to keep state predictable and maintainable. Ensuring that state management is efficient, scalable, and easy to debug.</Typography>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: isSmallScreen ? '3vw' : '1vw'}}>
                        <FaHtml5 style={{fontSize: isSmallScreen ? '2.3rem' : '2vw'}} />
                        <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                            HTML5
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{width: isSmallScreen ? '90vw' : '70vw', color: '#484848'}}>Crafting semantic HTML5 structures that improve accessibility and SEO. Creating responsive designs using media queries, Flexbox, and Grid Layout to ensure optimal viewing experiences across various devices and screen sizes. Utilizing modern HTML features to enhance web application functionality and user experience.</Typography>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: isSmallScreen ? '3vw' : '1vw'}}>
                        <FaCss3 style={{fontSize: isSmallScreen ? '2.3rem' : '2vw'}} />
                        <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                            CSS3
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{width: isSmallScreen ? '90vw' : '70vw', color: '#484848'}}>Proficient in writing clean, modular, and maintainable CSS. Using advanced CSS techniques like Flexbox and Grid Layout to build complex layouts with ease. Ensuring cross-browser compatibility and performance optimization for smoother user experiences. </Typography>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: isSmallScreen ? '3vw' : '1vw'}}>
                        <IoLogoJavascript style={{fontSize: isSmallScreen ? '2.3rem' : '2vw'}} />
                        <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                            JavaScript (ES6+)
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{width: isSmallScreen ? '90vw' : '70vw', color: '#484848'}}>Leveraging modern JavaScript features and best practices for robust and efficient code. Utilizing ES6+ features such as arrow functions, destructuring, spread/rest operators, and async/await for cleaner and more readable code. Ensuring code maintainability and scalability by adhering to industry standards and best practices.</Typography>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: isSmallScreen ? '3vw' : '1vw'}}>
                        <FaSass style={{fontSize: isSmallScreen ? '2.3rem' : '2vw'}} />
                        <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                            SASS
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{width: isSmallScreen ? '90vw' : '70vw', color: '#484848'}}>Enhancing CSS with features such as variables, nested rules, and mixins for a more efficient and organized styling process. Leveraging SASS to create reusable and scalable stylesheets, reducing code duplication and improving maintainability. Implementing SASS functions and conditionals to manage design tokens and create dynamic styles. </Typography>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: isSmallScreen ? '3vw' : '1vw'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#172c66" fillRule="evenodd" d="M24 5.601V1.592a.344.344 0 0 0-.514-.298l-2.64 1.508a.688.688 0 0 0-.346.597v4.009c0 .264.285.43.514.298l2.64-1.508A.688.688 0 0 0 24 5.6ZM.515 1.295l7.643 4.383a.688.688 0 0 0 .684 0l7.643-4.383a.344.344 0 0 1 .515.298v12.03c0 .235-.12.453-.319.58l-4.65 2.953 3.11 1.832c.22.13.495.127.713-.009l4.61-2.878a.344.344 0 0 0 .161-.292v-4.085c0-.254.14-.486.362-.606l2.507-1.346a.344.344 0 0 1 .506.303v7.531c0 .244-.13.47-.34.593l-7.834 4.592a.688.688 0 0 1-.71-.009l-5.953-3.681A.344.344 0 0 1 9 18.808v-3.624c0-.115.057-.222.153-.286l4.04-2.694a.688.688 0 0 0 .307-.572v-4.39a.137.137 0 0 0-.208-.117l-4.44 2.664a.688.688 0 0 1-.705.002L3.645 7.123a.138.138 0 0 0-.208.118v7.933a.344.344 0 0 1-.52.295L.5 14.019C.19 13.833 0 13.497 0 13.135V1.593c0-.264.286-.43.515-.298Z" clipRule="evenodd"/></svg>
                        <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                            Material-UI
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{width: isSmallScreen ? '90vw' : '70vw', color: '#484848'}}>Building consistent, responsive, and visually appealing user interfaces following Material Design principles. Customizing Material-UI components to match brand guidelines and application requirements. Utilizing theming capabilities to maintain a coherent design language across the application.</Typography>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: isSmallScreen ? '3vw' : '1vw'}}>
                        <GiSpring style={{fontSize: isSmallScreen ? '2.3rem' : '2vw'}} />
                        <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                            React-spring
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{width: isSmallScreen ? '90vw' : '70vw', color: '#484848'}}>Implementing advanced animations and transitions to enhance user interactions and engagement. Creating fluid and natural animations that improve the overall user experience. Leveraging React-spring's powerful animation primitives to build complex interactive elements and visual effects.</Typography>
                </ListItemAvatar>
            </ListItem>
        </List>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '1vw', paddingLeft: '3vw', paddingRight: '5vw'}}>
        <Box sx={{display: 'flex', alignItems: 'center', gap: isSmallScreen ? '5vw' : '2vw'}}>
            <SettingsIcon style={{ fontSize: isSmallScreen ? '15vw' : '2.2vw' }}/>
            <Typography variant={isSmallScreen ? 'h4' : 'h3'} sx={{fontWeight: '600'}}>Back-End development</Typography>
        </Box>
        <Typography variant='h5' sx={{width: isSmallScreen ? '95vw' : '75vw'}}>
            I have extensive experience in developing robust back-end systems that ensure the smooth operation of web applications. Here are the technologies and tools I use:
        </Typography>
        <List sx={{paddingLeft: isSmallScreen? '' : '5vw'}}>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: isSmallScreen ? '3vw' : '1vw'}}>
                        <FaNodeJs style={{fontSize: isSmallScreen ? '2.3rem' : '2vw'}} />
                        <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                            Node.js
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{width: isSmallScreen ? '90vw' : '70vw', color: '#484848'}}>Developing scalable and efficient server-side applications. Following the Model-View-Controller (MVC) architecture to organize and structure code effectively. Designing and implementing APIs that adhere to REST principles, ensuring smooth communication between client and server. Handling asynchronous operations efficiently with Promises and async/await.</Typography>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: isSmallScreen ? '3vw' : '1vw'}}>
                        <SiExpress style={{fontSize: isSmallScreen ? '2.3rem' : '2vw'}} />
                        <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                            Express.js
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{width: isSmallScreen ? '90vw' : '70vw', color: '#484848'}}>Building fast, unopinionated, and flexible web applications. Handling routing, middleware, and server-side logic with ease. Creating RESTful APIs: Implementing RESTful endpoints with CRUD operations (Create, Read, Update, Delete) to manage resources efficiently. Using middleware to handle authentication, authorization, logging, and error handling seamlessly.</Typography>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: isSmallScreen ? '3vw' : '1vw'}}>
                        <SiTypescript  style={{fontSize: isSmallScreen ? '2.3rem' : '2vw'}} />
                        <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                            TypeScript
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{width: isSmallScreen ? '90vw' : '70vw', color: '#484848'}}>Writing strongly-typed back-end (and front-end too) code to catch errors at compile time and improve code quality. Enhancing maintainability and readability of the server-side codebase by using TypeScript.</Typography>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: isSmallScreen ? '3vw' : '1vw'}}>
                        <CiDatabase style={{fontSize: isSmallScreen ? '2.3rem' : '2vw'}} />
                        <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                            SQL
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{width: isSmallScreen ? '90vw' : '70vw', color: '#484848'}}>Managing relational databases with Sequelize ORM for a smooth integration with Node.js. Designing schemas, writing complex queries, joins, and transactions to manage data relationships and integrity.</Typography>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: isSmallScreen ? '3vw' : '1vw'}}>
                        <SiJsonwebtokens style={{fontSize: isSmallScreen ? '2.3rem' : '2vw'}} />
                        <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                            { isSmallScreen ? 'JWT' :  'JWT (JSON Web Tokens)'}
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{width: isSmallScreen ? '90vw' : '70vw', color: '#484848'}}>Implementing secure authentication mechanisms. Ensuring proper authorization to protect sensitive resources and operations.</Typography>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: isSmallScreen ? '3vw' : '1vw'}}>
                        <FaAws style={{fontSize: isSmallScreen ? '2.3rem' : '2vw'}} />
                        <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                            { isSmallScreen ? 'AWS' : 'Infrastructure with AWS'}
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{width: isSmallScreen ? '90vw' : '70vw', color: '#484848'}}>Utilizing AWS services such as S3, EC2, VPC, and Route 53 for robust cloud infrastructure. Managing networks, domains, and routing to ensure high availability and scalability.</Typography>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: isSmallScreen ? '3vw' : '1vw'}}>
                        <FaDocker style={{fontSize: isSmallScreen ? '2.3rem' : '2vw'}} />
                        <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                            Docker
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{width: isSmallScreen ? '90vw' : '70vw', color: '#484848'}}>Containerizing applications for consistent environments across development, testing, and production. Automating deployment processes with Docker to ensure smooth CI/CD workflows.</Typography>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: isSmallScreen ? '3vw' : '1vw'}}>
                        <FaLinux style={{fontSize: isSmallScreen ? '2.3rem' : '2vw'}} />
                        <Typography variant='h4' sx={{textDecoration: 'underline'}}>
                            Linux
                        </Typography>
                    </Box>
                    <Typography variant='h6' sx={{width: isSmallScreen ? '90vw' : '70vw', color: '#484848'}}>Hosting servers and databases on Linux for enhanced security and performance. Managing server configurations, deployments, and maintenance tasks efficiently.</Typography>
                </ListItemAvatar>
            </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Technologies