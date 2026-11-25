const projectAssets = import.meta.glob<string>([
  '../../assets/images/Projects/**/*.{avif,jpg,jpeg,png,svg,webp}',
  '../../assets/images/Projects/**/*-optimized.gif',
  '!../../assets/images/Projects/**/.frames/**',
  '!../../assets/images/Projects/McFly/**',
  '!../../assets/images/Projects/Vun/vun-contact-desktop.png',
], { eager: true, import: 'default' })
const culzoniOriginalGif = (id: string) => `/portfolio-originals/culzoni-${id}.gif`
const culzoniOriginalGifs = ['124334', '124555', '124821', '125339', '125448'].map(culzoniOriginalGif)
const portfolioOriginalGif = (id: string) => `/portfolio-originals/portfolio-${id}.gif`
const asset = (filename: string) => {
  const portfolioFile = filename.toLowerCase().endsWith('.gif')
    ? filename.replace(/\.gif$/i, '-optimized.gif')
    : filename
  return Object.entries(projectAssets).find(([path]) => path.endsWith(portfolioFile))?.[1] ?? ''
}
const assetsForProject = (folder: string) => Object.entries(projectAssets)
  .filter(([path]) => path.includes(`/Projects/${folder}/`))
  .sort(([a], [b]) => Number(!a.toLowerCase().endsWith('.gif')) - Number(!b.toLowerCase().endsWith('.gif')) || a.localeCompare(b, 'es'))
  .map(([, url]) => url)
const visualOnlyNotice = 'Visual preview of the original frontend. Servers and project features are unavailable.'

export interface ProjectHighlight {
  title: string
  description: string
}

export interface ProjectCardData {
  title: string
  slug: string
  eyebrow: string
  description: string
  overview: string[]
  highlights: ProjectHighlight[]
  technologies: string[]
  strings?: string[]
  previewStrings?: string[]
  coverString?: string
  status?: string
  coverColor: string
  coverTextColor: string
  projectUrl?: string
  previewNote: string
  gitHubUrl?: string
}

export const projectCards: ProjectCardData[] = [
  {
    title: 'Vértice Ecuador',
    slug: 'vertice-ecuador',
    projectUrl: 'https://vertice-ecuador-preview.vercel.app',
    previewNote: 'Non-confidential Ecuadorian version of the original frontend. Its backend and features are not connected.',
    eyebrow: 'Ecuadorian news website',
    description: 'An Ecuador-focused news site with national coverage, regional sections, photo stories and a responsive editorial layout.',
    overview: [
      'Vértice Ecuador is an editorial website for readers following the country and its regions. This is the local Ecuadorian version from before the confidentiality adaptation.',
      'The homepage brings a lead story, compact recent-news cards, topic selections, a credited photo journal and a newsletter feature together. The wider site also includes search, category and article pages, author profiles and photo credits.',
    ],
    highlights: [
      { title: 'Distinctive newsroom identity', description: 'A Vértice Ecuador wordmark, an editorial color palette and a clear content hierarchy.' },
      { title: 'Regional navigation', description: 'Bring Quito, the Coast, the Highlands, the Amazon and Galápagos into the experience.' },
      { title: 'Non-repeating homepage', description: 'Give the lead story, recent articles and topic cards separate roles across the page.' },
      { title: 'Photo journal', description: 'Show Ecuadorian photography with visible source and license credits.' },
      { title: 'Responsive case study', description: 'Present desktop, mobile and section-by-section views, with a looping walkthrough of the full homepage.' },
    ],
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Material UI 7', 'Framer Motion', 'NestJS 11', 'PostgreSQL', 'Prisma', 'Redis', 'AWS S3'],
    strings: ['vertice-home-desktop.png', 'vertice-home-mobile.png', 'vertice-home-tablet.png', 'vertice-creditos-fotograficos.png', 'vertice-home-scroll.gif'].map(asset),
    previewStrings: [asset('vertice-home-scroll.gif')],
    coverString: asset('vertice-home-scroll.gif'),
    status: 'Completed visual project',
    coverColor: '#f4ead9',
    coverTextColor: '#16434a',
  },
  {
    title: 'VÜN',
    slug: 'vun',
    projectUrl: 'https://vun-site-visual-preview.vercel.app',
    previewNote: visualOnlyNotice,
    eyebrow: 'Audiovisual website',
    description: 'A completed one-page website for VÜN Audiovisual, focused on documentary branded content and full-service production.',
    overview: [
      'A one-page website for VÜN Audiovisual, a Buenos Aires production company focused on documentary branded content and full-service audiovisual production.',
      'The original frontend presents its production process, services, work and FAQ. The contact link opens the company email address.',
    ],
    highlights: [
      { title: 'Six production services', description: 'Present documentary brand films, social media content, product work, events, photography and postproduction.' },
      { title: 'End-to-end process', description: 'Explain briefing, preproduction, filming, postproduction and delivery in a single story.' },
      { title: 'Motion-led presentation', description: 'Use GSAP, ScrollTrigger and Lenis to shape the one-page browsing experience.' },
      { title: 'Search foundation', description: 'Prepare metadata, structured data, sitemap, robots rules and FAQ content for search and answer engines.' },
      { title: 'Published frontend', description: 'Present the original services, process and work in a responsive one-page site.' },
    ],
    technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'GSAP', 'Vercel'],
    strings: ['vun-front-desktop.png', 'vun-home-mobile.png', 'vun-home-scroll.gif'].map(asset),
    previewStrings: [asset('vun-front-desktop.png')],
    coverString: asset('vun-front-desktop.png'),
    status: 'Completed client project',
    coverColor: '#244b35',
    coverTextColor: '#fff8ec',
  },
  {
    title: 'Maina Outbound',
    slug: 'mainaOutbound',
    projectUrl: 'https://maina-site-visual-preview.vercel.app',
    previewNote: 'Preview of the original frontend. The server and external services are not connected. Demo access: demo@maina.preview / Maina-Preview-2026.',
    eyebrow: 'B2B prospecting workspace',
    description: 'A completed B2B prospecting workspace project for Maina Agency, bringing campaign planning, company and lead data, and outreach integrations into one workflow.',
    overview: [
      'A completed client project for Maina Agency: a B2B prospecting workspace that connects campaign planning with company and lead records, source data and outreach workflows.',
      'The codebase combines a Next.js workspace with a NestJS API, PostgreSQL and Prisma, Redis-backed jobs, AI tooling, WhatsApp channel support and CRM connections. Its interfaces cover campaigns, companies, conversations, Google Sheets and provider setup. The demo account opens the original frontend; data and connected services require the API, which is not connected here.',
    ],
    highlights: [
      { title: 'Campaign and company workspace', description: 'Organize prospecting campaigns alongside company and lead records.' },
      { title: 'Source data', description: 'Connect Google Sheets and preserve row identity as data moves through a campaign.' },
      { title: 'AI-assisted workflows', description: 'Use configurable AI flows and queued jobs to support prospecting and conversations.' },
      { title: 'CRM and channel connections', description: 'Bring HubSpot and WhatsApp configuration into the workspace.' },
      { title: 'Client delivery', description: 'A completed client engagement focused on the prospecting product and its supporting system.' },
    ],
    technologies: ['Next.js 16', 'React 19', 'NestJS 12', 'TypeScript', 'Prisma', 'PostgreSQL', 'Redis', 'OpenAI Agents', 'WhatsApp', 'HubSpot', 'Google Sheets'],
    strings: ['maina-login-desktop.png', 'maina-company-workspace.png', 'maina-login-mobile.png', 'maina-company-mobile.png', 'maina-login-flow.gif'].map(asset),
    previewStrings: [asset('maina-login-desktop.png'), asset('maina-company-workspace.png'), asset('maina-login-flow.gif')],
    coverString: asset('maina-login-flow.gif'),
    status: 'Completed client project',
    coverColor: '#5362a8',
    coverTextColor: '#fff8ec',
  },
  {
    title: 'Dialo.ar',
    slug: 'dialoar',
    projectUrl: 'https://dialo.ar/es',
    previewNote: 'The original site is live at dialo.ar/es.',
    eyebrow: 'Conversational commerce',
    description: 'A multi-company platform for WhatsApp sales and support assistants, connected to product discovery and commerce workflows.',
    overview: [
      'A multi-company conversational commerce platform for creating intelligent WhatsApp sales and support assistants. The product combines a business dashboard with catalog discovery, customer conversations and commerce workflows.',
      'AI-assisted conversations connect to product catalogs, payments, shipping and commerce services. The architecture includes a TypeScript frontend and API, persistent conversation data, queues and real-time communication, with tool integrations for commerce operations.',
    ],
    highlights: [
      { title: 'Multi-company workspace', description: 'A business dashboard for configuring assistants and their commerce context.' },
      { title: 'Product discovery', description: 'Assistants can help customers find products from a connected catalog.' },
      { title: 'Commerce conversations', description: 'WhatsApp sales and support flows connect customer questions with product, payment and shipping steps.' },
      { title: 'Tool integrations', description: 'A service-oriented architecture connects AI workflows to business tools and commerce operations.' },
    ],
    technologies: ['Next.js 15', 'React 19', 'TypeScript', 'Material UI', 'Redux Toolkit', 'NestJS', 'PostgreSQL', 'Prisma', 'OpenAI API', 'Auth0', 'WhatsApp', 'Twilio', 'Mercado Pago', 'Socket.IO', 'AWS S3'],
    strings: assetsForProject('Dialoar'),
    previewStrings: [asset('dialoar-home-desktop.png'), asset('dialoar-overview.gif')],
    coverString: asset('dialoar-home-desktop.png'),
    status: 'Completed product project',
    coverColor: '#237b83',
    coverTextColor: '#fff8ec',
  },
  {
    title: 'Culzoni Digital',
    slug: 'culzoniDigital',
    previewNote: visualOnlyNotice,
    eyebrow: 'Sales operations ERP',
    description: 'A hybrid ERP that connects Mercado Libre sales with stock, pricing, shipping and invoicing workflows in Tango.',
    overview: [
      'Culzoni Digital is a web application developed for Culzoni S.A. as an ERP for its Mercado Libre sales. It brings stock, pricing, sales, shipping and invoicing together for the company’s digital sales unit.',
      'When a Mercado Libre webhook reports a sale, the system requests the order items, shipping details and customer billing information through the Mercado Libre API. It sends that information to Tango, the company’s main ERP, which updates shared stock across sales units.',
      'The Tango order number is used to register a shipment when the shipping label is scanned. Shipping and invoicing can happen independently; once an invoice is created, its details are sent back to the Mercado Libre sale so the buyer can view it.',
      'A listings table lets the team edit product system codes, prices and stock. The first version was built in four months: Java and Spring Boot handle ERP workflows, while Express and Socket.IO support API operations and real-time communication.',
    ],
    highlights: [
      { title: 'Stock across sales units', description: 'Update shared inventory as online sales are processed.' },
      { title: 'Order and shipping flow', description: 'Receive sales events, retrieve order details and create shipment records for the operations team.' },
      { title: 'Independent invoicing and shipping', description: 'Coordinate invoices with Tango and return invoice details to the Mercado Libre sale, whether shipping is already complete or not.' },
      { title: 'Listing management', description: 'Review and edit listing data, including product codes, prices and stock.' },
      { title: 'Real-time operations', description: 'Use Socket.IO notifications alongside Mercado Libre API workflows and the operations dashboard.' },
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Material UI', 'Node.js', 'Express', 'Socket.IO', 'Java', 'Spring Boot', 'MySQL', 'JWT', 'Docker', 'AWS EC2', 'AWS S3', 'AWS Route 53', 'Linux'],
    strings: [...culzoniOriginalGifs, ...assetsForProject('Culzoni').filter((url) => !url.toLowerCase().endsWith('.gif'))],
    previewStrings: [culzoniOriginalGif('125448')],
    coverString: culzoniOriginalGif('125448'),
    status: 'Completed client project',
    coverColor: '#f1c4a7',
    coverTextColor: '#172c66',
  },
  {
    title: 'E-Redux',
    slug: 'eredux',
    previewNote: 'The frontend repository is no longer available. This page keeps the existing screenshots and GIFs and has no live site link.',
    eyebrow: 'E-commerce learning project',
    description: 'A frontend e-commerce exercise focused on product browsing, a simulated cart and shared state with Redux.',
    overview: [
      'E-Redux is a small e-commerce application built to practice state management in React. Visitors can browse products and simulate a purchase by adding items to a shopping cart.',
      'Redux and Redux Thunk coordinate data loading and cart state across pages that are not directly connected. Material UI supplies the interface components; the purchase flow is a simulation rather than a live checkout.',
    ],
    highlights: [
      { title: 'Product browsing', description: 'Move between pages and view product information in a simple storefront.' },
      { title: 'Cart simulation', description: 'Add items to a shared cart and walk through a purchase scenario.' },
      { title: 'Shared application state', description: 'Use Redux and Redux Thunk to handle cart state and asynchronous data loading across pages.' },
      { title: 'Responsive interface', description: 'Build the storefront from reusable React and Material UI components.' },
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Redux', 'Redux Thunk', 'Material UI', 'AWS'],
    strings: assetsForProject('ERedux'),
    coverString: asset('1701862737080.gif'),
    status: 'Completed learning project',
    coverColor: '#24233a',
    coverTextColor: '#fff8ec',
  },
  {
    title: 'Portfolio',
    slug: 'portfolio',
    previewNote: 'These case studies show only the visual part of each project. Their servers and features are unavailable.',
    eyebrow: 'Personal website',
    description: 'A responsive portfolio for presenting selected projects, technology, work experience and studies.',
    overview: [
      'This portfolio brings project work, technology experience, employment and studies together in a responsive site. The catalogue links to dedicated project pages, while the home page brings the CV and contact links into view.',
      'The current iteration adds a consistent project catalogue and case-study template, recognizable technology marks and a clearer layout for the experience and studies sections.',
    ],
    highlights: [
      { title: 'Project catalogue', description: 'Browse a consistent set of project cards and open a dedicated page for each case study.' },
      { title: 'Skills and experience', description: 'See technologies, work history and coursework in one connected view.' },
      { title: 'Responsive presentation', description: 'Adapt the layout for desktop and mobile while keeping the content hierarchy intact.' },
      { title: 'Portfolio navigation', description: 'Move between the home page and individual project case studies, with direct CV and contact links.' },
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'React Spring', 'Material UI', 'AWS'],
    strings: ['091328', '092129', '092226'].map(portfolioOriginalGif),
    coverString: portfolioOriginalGif('091328'),
    status: 'Completed personal project',
    coverColor: '#f582ae',
    coverTextColor: '#172c66',
    projectUrl: 'https://octavio-portfolio-six.vercel.app',
    gitHubUrl: 'https://github.com/OctavioB17/Portfolio',
  },
  {
    title: 'Maria Pinina',
    slug: 'mariaPinina',
    projectUrl: 'https://maria-pinina-visual-preview.vercel.app',
    previewNote: 'Preview of the original frontend with 20 illustrative listings. The backend is not connected; sign-in and checkout are unavailable.',
    eyebrow: 'Peer-to-peer marketplace',
    description: 'A peer-to-peer marketplace frontend where people can create listings and buy directly from other users.',
    overview: [
      'Maria Pinina is a peer-to-peer marketplace for people to create accounts, publish products and buy directly from other users. Its tone is intentionally playful: the catalogue is open to everything from retired yoga robots to punk-style grandma walkers.',
      'Inspired by Mercado Libre and Amazon, the project focuses on a seller-led flow without complicated setup. The responsive frontend uses React, TypeScript and Material UI; the Node.js and TypeScript backend uses Sequelize with PostgreSQL. AWS EC2, RDS and S3 support deployment, data and frontend hosting.',
      'Built as a full-stack learning project, Maria Pinina also includes a deliberate UI/UX research and design process and reflects a system intended to evolve over time.',
    ],
    highlights: [
      { title: 'Seller-led listings', description: 'Let users create an account and publish products in a shared online catalogue.' },
      { title: 'Peer-to-peer marketplace', description: 'Give buyers and sellers a direct, simple path to find and list products.' },
      { title: 'Research-led UI/UX', description: 'Shape a responsive interface around an intentional research and design process.' },
      { title: 'TypeScript full stack', description: 'Use TypeScript with React on the frontend and Node.js, Sequelize and PostgreSQL on the backend.' },
      { title: 'AWS infrastructure', description: 'Use EC2, RDS and S3 for application hosting, database and frontend delivery.' },
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Material UI', 'Node.js', 'Express', 'Sequelize', 'PostgreSQL', 'JWT', 'Docker', 'AWS EC2', 'AWS RDS', 'AWS S3', 'Linux'],
    strings: ['maria-pinina-products-grid.png', 'maria-pinina-product-detail.png', 'maria-pinina-home-desktop.png', 'maria-pinina-home-mobile.png', 'maria-pinina-scroll.gif'].map(asset),
    coverString: asset('maria-pinina-products-grid.png'),
    status: 'Completed personal project',
    coverColor: '#b8dfd8',
    coverTextColor: '#172c66',
    gitHubUrl: 'https://github.com/OctavioB17/MariaPininaFront',
  },
]
