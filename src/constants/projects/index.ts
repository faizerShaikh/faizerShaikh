import { ProjectInterface } from "@/interfaces";

export const projectsData: ProjectInterface[] = [
  {
    id: 1,
    name: "ITSM (Information Technology Service Management)",
    projectDescription:
      "Information Technology Service Management (ITSM) is a comprehensive approach to designing, delivering, managing, and improving the way IT services are utilized within an organization. It encompasses various practices, processes, policies, and tools aimed at ensuring that IT services meet the needs of the business and its users efficiently and effectively.",
    features: [
      {
        name: "Incident Management",
        description:
          "Promptly resolves disruptions to IT services, restoring normal operations swiftly to minimize business impact.",
      },
      {
        name: "Request Management",
        description:
          "Facilitates users' service requests efficiently, providing timely responses to fulfill their needs and enhance user satisfaction.",
      },
      {
        name: "Problem Management",
        description:
          "Identifies and addresses underlying causes of recurring incidents, preventing their recurrence and enhancing overall service stability.",
      },
    ],
    images: [
      "/images/projects/itsm/1.jpg",
      "/images/projects/itsm/2.jpg",
      "/images/projects/itsm/3.jpg",
    ],
    role: "Frontend Developer",
    responsibilites: [
      "Collaborated with the development team to design and implement user interfaces using ReactJS, ensuring a seamless and intuitive user experience for IT service management.",
      "Integrated frontend components with backend systems developed in Django, enabling efficient data exchange and functionality across the application.",
      "Conducted thorough testing and debugging of frontend features to ensure compatibility, performance, and reliability across various browsers and devices.",
      "Worked closely with stakeholders to gather requirements and feedback, incorporating user-centric design principles to optimize workflows and enhance user satisfaction.",
    ],
    techStack: ["ReactJS", "Django", "PostgreSQL"],
  },
  {
    id: 2,
    name: "CMS (Change Management System)",
    projectDescription:
      "The Dynamic Change Management System developed for managing updates and improvements to change requests in a structured approach to ensure seamless transitions and minimal disruptions to users. Utilizing dynamic flows, User role management, SharePoint integration, and Active Directory for user management, the system streamlines the change management process, enhancing efficiency and reliability.",
    features: [
      {
        name: "Dynamic Flows for Change Management",
        description:
          "Flexible flow configurations adapt to the specific requirements of each change, allowing for comprehensive tracking and monitoring.",
      },
      {
        name: "User Role Management",
        description:
          "Role-based access control assigns specific permissions and responsibilities to users at each stage of the change management process.",
      },
      {
        name: "SharePoint Integration",
        description:
          "Seamless integration with SharePoint enables centralized storage and management of files and documents associated with change requests. Access controls within SharePoint ensure that relevant documents are securely shared with authorized users based on their roles and permissions.",
      },
      {
        name: "Active Directory Integration",
        description:
          "Integration with Active Directory simplifies user management by synchronizing user accounts and authentication across the system.",
      },
    ],
    images: [
      "/images/projects/cms/1.jpg",
      "/images/projects/cms/2.jpg",
      "/images/projects/cms/3.jpg",
      "/images/projects/cms/4.jpg",
      "/images/projects/cms/5.jpg",
    ],
    role: "Full Stack Developer",
    responsibilites: [
      "Took ownership of both frontend and backend development tasks using ReactJS for the frontend and Express.js for the backend, ensuring seamless integration and functionality across the application.",
      "Implemented database solutions using MsSQL, including schema design, query optimization, and data manipulation, to support the storage and retrieval of information related to change requests and user management.",
      "Integrated the Change Management System with external systems such as SharePoint and Active Directory, leveraging APIs and protocols to facilitate data exchange and streamline user management processes.",
    ],
    techStack: ["ReactJS", "Express.js", "MsSQL"],
  },
  {
    id: 3,
    name: "SNO (Supply Network Operations)",
    projectDescription:
      "SNO is a Next.js and Express.js-based web application designed as a centralized solution for e-commerce supply chain management. It optimizes inventory tracking across multiple warehouses, streamlines order fulfillment processes, and provides real-time data for informed decision-making. With SNO, businesses gain enhanced inventory management, leading to accelerated product movement, efficient resource allocation, and an enhanced customer experience.",
    features: [
      {
        name: "Centralized Inventory Management",
        description:
          "SNO offers a unified platform to manage inventory across numerous warehouses, ensuring consistent tracking and control.",
      },
      {
        name: "Optimized Order Fulfillment",
        description:
          "The system automates order processing and fulfillment workflows, minimizing delays and enhancing efficiency.",
      },
      {
        name: "Real-time Inventory Insights",
        description:
          "With SNO, businesses gain access to real-time data on inventory levels and movements, enabling informed decision-making.",
      },
      {
        name: "Multi-location Inventory Visibility",
        description:
          "SNO provides visibility into inventory across various locations, facilitating effective stock monitoring and distribution.",
      },
      {
        name: "Resource Allocation Efficiency",
        description:
          "By optimizing inventory management, SNO helps businesses allocate resources effectively, minimizing waste and maximizing operational efficiency.",
      },
      {
        name: "Enhanced Customer Experience",
        description:
          "Through faster order processing and optimized inventory management, SNO contributes to an improved customer experience, fostering loyalty and satisfaction.",
      },
      {
        name: "Scalable Solution",
        description:
          "SNO is designed to accommodate the evolving needs of growing businesses, offering scalability and flexibility.",
      },
      {
        name: "User-friendly Interface",
        description:
          "The platform features an intuitive interface, making it easy for users to navigate and manage inventory, orders, and supply chain operations efficiently.",
      },
    ],
    images: [
      "/images/projects/cms/1.jpg",
      "/images/projects/cms/2.jpg",
      "/images/projects/cms/3.jpg",
      "/images/projects/cms/4.jpg",
      "/images/projects/cms/5.jpg",
    ],
    role: "Full Stack Developer",
    responsibilites: [
      "Led the development of both frontend and backend components using Next.js for the frontend and Express.js for the backend, ensuring seamless integration and functionality across the application.",
      "Implemented and maintained the MySQL database solution, including schema design, query optimization, and data manipulation, to support efficient inventory tracking and order management.",
      "Implemented key features such as centralized inventory management, optimized order fulfillment workflows, real-time inventory insights, and multi-location inventory visibility, ensuring that the application meets the requirements of e-commerce supply chain management.",
    ],
    techStack: ["Next.s", "Express.js", "MySQL"],
  },
  {
    id: 4,
    name: "360 Assessment Tool",
    projectDescription:
      "Empowered data-driven performance management with a secure, multi-tenant employee evaluation application. Built with Next.js, NestJS, and PostgreSQL, the application utilizes isolated schemas for each tenant, guaranteeing data privacy. The application is used to ensure the performance of employees by surveying them. It takes a response from stakeholders. It has features like dynamic survey form generation, custom questionnaire builder, employee management, etc. Based on all collected responses it generates reports in multiple forms like Excel, and PDF with chart visualizations (Bar Chart, Radar Chart, Heat Map, etc). It supports multiple options to fill surveys which include filling a survey for one user or for multiple users.",
    features: [
      {
        name: "Multi-tenant Architecture",
        description:
          "Utilizes isolated schemas for each tenant, ensuring data privacy and security.",
      },
      {
        name: "Dynamic Survey Form Generation",
        description:
          "Generates dynamic survey forms tailored to specific evaluation needs.",
      },
      {
        name: "Custom Questionnaire Builder",
        description:
          "Allows administrators to create custom questionnaires for employee evaluations.",
      },
      {
        name: "Employee Management",
        description:
          "Facilitates the management of employee profiles, roles, and permissions.",
      },
      {
        name: "Report Generation",
        description:
          "Generates comprehensive reports in various formats (Excel, PDF) with visualizations such as Bar Charts, Radar Charts, Heat Maps, etc., based on collected survey responses.",
      },
      {
        name: "Flexible Survey Options",
        description:
          "Supports multiple survey options, including filling surveys for individual users or multiple users.",
      },
    ],
    images: [
      "/images/projects/360-assessment-tool/1.jpg",
      "/images/projects/360-assessment-tool/2.jpg",
      "/images/projects/360-assessment-tool/3.jpg",
      "/images/projects/360-assessment-tool/4.jpg",
      "/images/projects/360-assessment-tool/5.jpg",
      "/images/projects/360-assessment-tool/6.jpg",
      "/images/projects/360-assessment-tool/7.jpg",
      "/images/projects/360-assessment-tool/8.jpg",
    ],
    role: "Full Stack Developer & Technical Lead",
    responsibilites: [
      "Led the development of both frontend and backend components using Next.js for the frontend and NestJS for the backend, ensuring seamless integration and functionality across the application.",
      "Managed the PostgreSQL database solution, including schema design, query optimization, and data manipulation, to support secure storage and retrieval of employee evaluation data across multiple tenants.",
      "Designed and implemented the multi-tenant architecture, utilizing isolated schemas for each tenant to guarantee data privacy and security. Implemented features such as dynamic survey form generation, custom questionnaire builder, and flexible survey options to meet the diverse needs of users.",
      "Provided technical guidance and leadership to the development team, ensuring adherence to best practices, code quality standards, and project milestones. Mentored junior developers, conducted code reviews, and resolved technical challenges to drive project success.",
      "Orchestrated the integration of Docker and Redis for containerization and caching, respectively, optimizing application performance and scalability. Managed deployment processes to ensure smooth and efficient rollout of new features and updates.",
    ],
    techStack: ["Next.js", "NestJS", "PostgresSQL", "Docker", "Redis"],
  },
  {
    id: 5,
    name: "Emergency Response Process (ERP) application",
    projectDescription:
      "Streamlined client incident and job management with a custom-built Emergency Response Process (ERP) application. This web-based CRM solution, leveraging Angular and NestJS, utilizes a microservice architecture and MongoDB for efficient data management. Main Key features Include Manage calls (receive, transfer, conference), incidents, quotes, jobs, invoices, and user roles seamlessly. The application powers to create and manage user roles with granular permissions on the fly, ensuring data security and access control. Automate tasks with features like custom form builders, customizable email templates, PDF generation, Excel exports, bulk imports, and automated email notifications.",
    features: [
      {
        name: "Microservice Architecture",
        description:
          "Utilizes a microservice architecture for scalability, flexibility, and efficient data management.",
      },
      {
        name: "Call Management",
        description:
          "Manage calls seamlessly, including receiving, transferring, and conferencing.",
      },
      {
        name: "Incident and Job Management",
        description:
          "Efficiently manage incidents, quotes, jobs, and invoices for streamlined client incident and job management.",
      },
      {
        name: "User Role Management",
        description:
          "Create and manage user roles with granular permissions on the fly, ensuring data security and access control.",
      },
      {
        name: "Task Automation",
        description:
          "Automate tasks with features like custom form builders, customizable email templates, PDF generation, Excel exports, bulk imports, and automated email notifications.",
      },
    ],
    images: [
      "/images/projects/360-assessment-tool/1.jpg",
      "/images/projects/360-assessment-tool/2.jpg",
      "/images/projects/360-assessment-tool/3.jpg",
      "/images/projects/360-assessment-tool/4.jpg",
      "/images/projects/360-assessment-tool/5.jpg",
      "/images/projects/360-assessment-tool/6.jpg",
      "/images/projects/360-assessment-tool/7.jpg",
      "/images/projects/360-assessment-tool/8.jpg",
    ],
    role: "Full Stack Developer & Technical Lead",
    responsibilites: [
      "Led the development of both frontend and backend components using Angular for the frontend and NestJS for the backend, ensuring seamless integration and functionality across the application.",
      "Designed and implemented the microservice architecture, leveraging technologies such as MongoDB for efficient data management, Docker for containerization, and Redis for caching, to achieve scalability, flexibility, and optimal performance.",
      "Managed the MongoDB database solution, including schema design, query optimization, and data manipulation, to support efficient storage and retrieval of client incident and job management data.",
      "Implemented key features such as call management, incident and job management, user role management, and task automation, ensuring that the application meets the requirements of streamlined client incident and job management.",
    ],
    techStack: ["Angular", "NestJS", "MongoDB", "Docker", "Redis"],
  },
];
