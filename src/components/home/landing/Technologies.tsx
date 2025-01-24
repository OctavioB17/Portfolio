import { Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import CodeIcon from '../../visual/CodeIcon'
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import { GiSpring } from "react-icons/gi";
import { GoGear } from "react-icons/go";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { CiDatabase } from "react-icons/ci";
import { SiJsonwebtokens } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";


const Technologies: React.FC = (): JSX.Element => {
  return (
    <Box sx={{width: '100vw', bgcolor: 'secondary.main', padding: '5vw'}}>
      <Typography variant='h2' sx={{color: 'terciary.main', fontWeight: '600', textDecoration: 'underline', display: 'inline'}}>
        <Typography variant='h2' sx={{fontWeight: 600, color: 'quaternary.main', display: 'inline'}}>Core competencies</Typography>
      </Typography>
      <Box sx={{paddingLeft: '3vw', paddingTop: '3vw', paddingBottom: '1vw', display: 'flex', flexDirection: 'column', gap: '1vw'}}>
        <Box sx={{display: 'flex', alignItems: 'center', gap: '2vw'}}>
            <CodeIcon sx={{ fontSize: '2.2vw' }}/>
            <Typography variant='h3' sx={{fontWeight: '600'}}>Front-End development</Typography>
        </Box>
        <Typography variant='h5' sx={{width: '75vw'}}>
            I specialize in creating dynamic and interactive user interfaces with a strong focus on performance and user experience. Here are the technologies and tools I use:
        </Typography>
        <List sx={{paddingLeft: '5vw'}}>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '1vw'}}>
                        <FaReact style={{fontSize: '2vw'}} />
                        <Typography variant='h5'>
                            React
                        </Typography>
                    </Box>
                    <ListItemText sx={{width: '70vw'}} secondary="Proficient in using all the commonly used hooks such as useState, useEffect, useContext, useReducer, and useRef. Experienced in creating custom hooks to encapsulate and reuse logic across multiple components. Building reusable components and managing state effectively to ensure a seamless user experience.."/>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '1vw'}}>
                        <SiRedux style={{fontSize: '2vw'}} />
                        <Typography variant='h5'>
                            Redux
                        </Typography>
                    </Box>
                    <ListItemText sx={{width: '70vw'}} secondary="Utilizing thunk for handling asynchronous actions and side effects in Redux. Skilled in using dispatch to trigger state updates and manage complex state scenarios. Implementing reducers and actions to keep state predictable and maintainable. Ensuring that state management is efficient, scalable, and easy to debug."/>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '1vw'}}>
                        <FaHtml5 style={{fontSize: '2vw'}} />
                        <Typography variant='h5'>
                            HTML5
                        </Typography>
                    </Box>
                    <ListItemText sx={{width: '70vw'}} secondary="Crafting semantic HTML5 structures that improve accessibility and SEO. Creating responsive designs using media queries, Flexbox, and Grid Layout to ensure optimal viewing experiences across various devices and screen sizes. Utilizing modern HTML features to enhance web application functionality and user experience."/>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '1vw'}}>
                        <FaCss3 style={{fontSize: '2vw'}} />
                        <Typography variant='h5'>
                            CSS3
                        </Typography>
                    </Box>
                    <ListItemText sx={{width: '70vw'}} secondary="Proficient in writing clean, modular, and maintainable CSS. Using advanced CSS techniques like Flexbox and Grid Layout to build complex layouts with ease. Ensuring cross-browser compatibility and performance optimization for smoother user experiences."/>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '1vw'}}>
                        <IoLogoJavascript style={{fontSize: '2vw'}} />
                        <Typography variant='h5'>
                            JavaScript (ES6+)
                        </Typography>
                    </Box>
                    <ListItemText sx={{width: '70vw'}} secondary="Leveraging modern JavaScript features and best practices for robust and efficient code. Utilizing ES6+ features such as arrow functions, destructuring, spread/rest operators, and async/await for cleaner and more readable code. Ensuring code maintainability and scalability by adhering to industry standards and best practices."/>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '1vw'}}>
                        <FaSass style={{fontSize: '2vw'}} />
                        <Typography variant='h5'>
                            SASS
                        </Typography>
                    </Box>
                    <ListItemText sx={{width: '70vw'}} secondary="Enhancing CSS with features such as variables, nested rules, and mixins for a more efficient and organized styling process. Leveraging SASS to create reusable and scalable stylesheets, reducing code duplication and improving maintainability. Implementing SASS functions and conditionals to manage design tokens and create dynamic styles."/>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '1vw'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path fill="#172c66" fill-rule="evenodd" d="M24 5.601V1.592a.344.344 0 0 0-.514-.298l-2.64 1.508a.688.688 0 0 0-.346.597v4.009c0 .264.285.43.514.298l2.64-1.508A.688.688 0 0 0 24 5.6ZM.515 1.295l7.643 4.383a.688.688 0 0 0 .684 0l7.643-4.383a.344.344 0 0 1 .515.298v12.03c0 .235-.12.453-.319.58l-4.65 2.953 3.11 1.832c.22.13.495.127.713-.009l4.61-2.878a.344.344 0 0 0 .161-.292v-4.085c0-.254.14-.486.362-.606l2.507-1.346a.344.344 0 0 1 .506.303v7.531c0 .244-.13.47-.34.593l-7.834 4.592a.688.688 0 0 1-.71-.009l-5.953-3.681A.344.344 0 0 1 9 18.808v-3.624c0-.115.057-.222.153-.286l4.04-2.694a.688.688 0 0 0 .307-.572v-4.39a.137.137 0 0 0-.208-.117l-4.44 2.664a.688.688 0 0 1-.705.002L3.645 7.123a.138.138 0 0 0-.208.118v7.933a.344.344 0 0 1-.52.295L.5 14.019C.19 13.833 0 13.497 0 13.135V1.593c0-.264.286-.43.515-.298Z" clip-rule="evenodd"/></svg>
                        <Typography variant='h5'>
                            Material-UI
                        </Typography>
                    </Box>
                    <ListItemText sx={{width: '70vw'}} secondary="Building consistent, responsive, and visually appealing user interfaces following Material Design principles. Customizing Material-UI components to match brand guidelines and application requirements. Utilizing theming capabilities to maintain a coherent design language across the application."/>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '1vw'}}>
                        <GiSpring style={{fontSize: '2vw'}} />
                        <Typography variant='h5'>
                            React-spring
                        </Typography>
                    </Box>
                    <ListItemText sx={{width: '70vw'}} secondary="Implementing advanced animations and transitions to enhance user interactions and engagement. Creating fluid and natural animations that improve the overall user experience. Leveraging React-spring's powerful animation primitives to build complex interactive elements and visual effects."/>
                </ListItemAvatar>
            </ListItem>
        </List>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: '1vw', paddingLeft: '3vw', paddingRight: '5vw'}}>
        <Box sx={{display: 'flex', alignItems: 'center', gap: '2vw'}}>
            <GoGear style={{ fontSize: '3vw' }}/>
            <Typography variant='h3' sx={{fontWeight: '600'}}>Back-End development</Typography>
        </Box>
        <Typography variant='h5' sx={{width: '75vw'}}>
            I have extensive experience in developing robust back-end systems that ensure the smooth operation of web applications. Here are the technologies and tools I use:
        </Typography>
        <List sx={{paddingLeft: '5vw'}}>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '1vw'}}>
                        <FaNodeJs style={{fontSize: '2vw'}} />
                        <Typography variant='h5'>
                            Node.js
                        </Typography>
                    </Box>
                    <ListItemText sx={{width: '70vw'}} secondary="Developing scalable and efficient server-side applications. Following the Model-View-Controller (MVC) architecture to organize and structure code effectively. Designing and implementing APIs that adhere to REST principles, ensuring smooth communication between client and server. Handling asynchronous operations efficiently with Promises and async/await."/>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '1vw'}}>
                        <SiExpress style={{fontSize: '2vw'}} />
                        <Typography variant='h5'>
                            Express.js
                        </Typography>
                    </Box>
                    <ListItemText sx={{width: '70vw'}} secondary="Building fast, unopinionated, and flexible web applications. Handling routing, middleware, and server-side logic with ease. Creating RESTful APIs: Implementing RESTful endpoints with CRUD operations (Create, Read, Update, Delete) to manage resources efficiently. Using middleware to handle authentication, authorization, logging, and error handling seamlessly."/>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '1vw'}}>
                        <SiTypescript  style={{fontSize: '2vw'}} />
                        <Typography variant='h5'>
                            TypeScript
                        </Typography>
                    </Box>
                    <ListItemText sx={{width: '70vw'}} secondary="Writing strongly-typed back-end (and front-end too) code to catch errors at compile time and improve code quality. Enhancing maintainability and readability of the server-side codebase by using TypeScript."/>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '1vw'}}>
                        <CiDatabase style={{fontSize: '2vw'}} />
                        <Typography variant='h5'>
                            SQL
                        </Typography>
                    </Box>
                    <ListItemText sx={{width: '70vw'}} secondary="Managing relational databases with Sequelize ORM for a smooth integration with Node.js. Designing schemas, writing complex queries, joins, and transactions to manage data relationships and integrity."/>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '1vw'}}>
                        <SiJsonwebtokens style={{fontSize: '2vw'}} />
                        <Typography variant='h5'>
                            JWT (JSON Web Tokens)
                        </Typography>
                    </Box>
                    <ListItemText sx={{width: '70vw'}} secondary="Implementing secure authentication mechanisms. Ensuring proper authorization to protect sensitive resources and operations."/>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '1vw'}}>
                        <FaAws style={{fontSize: '2vw'}} />
                        <Typography variant='h5'>
                            Infrastructure with AWS
                        </Typography>
                    </Box>
                    <ListItemText sx={{width: '70vw'}} secondary="Utilizing AWS services such as S3, EC2, VPC, and Route 53 for robust cloud infrastructure. Managing networks, domains, and routing to ensure high availability and scalability."/>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '1vw'}}>
                        <FaDocker style={{fontSize: '2vw'}} />
                        <Typography variant='h5'>
                            Docker
                        </Typography>
                    </Box>
                    <ListItemText sx={{width: '70vw'}} secondary="Containerizing applications for consistent environments across development, testing, and production. Automating deployment processes with Docker to ensure smooth CI/CD workflows."/>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar sx={{display: 'flex', flexDirection: 'column', gap: '0.5vw'}}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap: '1vw'}}>
                        <FaLinux style={{fontSize: '2vw'}} />
                        <Typography variant='h5'>
                            Linux
                        </Typography>
                    </Box>
                    <ListItemText sx={{width: '70vw'}} secondary="Hosting servers and databases on Linux for enhanced security and performance. Managing server configurations, deployments, and maintenance tasks efficiently."/>
                </ListItemAvatar>
            </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Technologies