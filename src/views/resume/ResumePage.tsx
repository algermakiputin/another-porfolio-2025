import React from 'react';
import {
  Container,
  Typography,
  Box,
  Link,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import PageHeader from '../../components/template/PageHeader/PageHeader';

const Resume = () => {
  return (
    <Box>
      <PageHeader title='Online Resume' hideButton={true} />
      <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Header */}
        <Box textAlign="center" mb={4}>
          <Typography variant="h3" component="h1" fontWeight="bold">
            Alger Makiputin
          </Typography>
          <Typography variant="body1" mt={1}>
            📧 algerapudmakiputin@gmail.com | 📱 09560887535 | 📍 Makati City, Philippines
          </Typography>
          <Link
            href="https://www.linkedin.com/in/alger-makiputin"
            target="_blank"
            rel="noopener"
            underline="hover"
          >
            LinkedIn Profile
          </Link>
        </Box>

        {/* Education */}
        <Section title="Education">
          <Typography variant="h6">Holy Child College of Davao – Davao City</Typography>
          <Typography>Bachelor of Science in Information Technology (2015–2019)</Typography>
        </Section>

        {/* Work Experience */}
        <Section title="Work Experience">
          <Job
            company="Accenture Inc. – Makati City"
            title="Software Engineering Team Lead"
            dates="Mar 2022 – Present"
            bullets={[
              'Developed new features and ensured seamless integration of components.',
              'Integrated Eckoh IVR phone payment system for membership renewals.',
              'Refactored legacy code, reducing complexity by over 40%.',
              'Contributed to architecture planning and API integrations.',
              'Automated migration of 300,000+ orders using Lambda Step Function.',
              'Enhanced Android/iOS mobile apps; developed RESTful APIs.',
              'Promoted from Senior Software Engineer to Team Lead.',
            ]}
          />
          <Job
            company="POSLite – Davao City"
            title="Full Stack Software Developer"
            dates="2018 – 2022"
            bullets={[
              'Built Inventory Management Software using PHP (CodeIgniter).',
              'Worked with clients to optimize and extend system features.',
              'Delivered support and continuous feature development.',
              'Helped businesses improve accuracy and increase sales.',
            ]}
          />
          <Job
            company="JT Innovators – Davao City"
            title="Intern Web Developer"
            dates="May – Aug 2018"
            bullets={[
              'Developed and configured WordPress websites.',
              'Converted PSD designs into responsive WordPress themes.',
            ]}
          />
        </Section>

        {/* Skills */}
        <Section title="Skills">
          <BulletList items={[
            'Fullstack JavaScript: ReactJS, Angular, TypeScript, VueJS, jQuery, NodeJS, Express',
            'Fullstack PHP: Laravel, CodeIgniter, HTML5, CSS3, Bootstrap',
            'DevOps: Git/GitHub, Docker',
            'Cloud: AWS (Certified Cloud Practitioner)',
            'Databases: SQL, NoSQL',
            'API: RESTful, GraphQL',
            'Soft Skills: Problem Solving, Adaptability, Self-Motivation',
            'Agile: Collaboration, Flexibility, Analytical Thinking',
          ]} />
        </Section>

        {/* Awards */}
        <Section title="Awards">
          <BulletList items={[
            'Excellence in Systems Software Development – April 2019.',
            'Excellence in Community Service Award – April 2019',
          ]} />
        </Section>
      </Container>
    </Box>
  );
};

const Section = ({ title, children } : any) => (
  <Box mb={4}>
    <Typography variant="h5" fontWeight="medium" gutterBottom>
      {title}
    </Typography>
    <Divider sx={{ mb: 2 }} />
    {children}
  </Box>
);

const Job = ({ company, title, dates, bullets } : any) => (
  <Box mb={3}>
    <Typography variant="h6" fontWeight="bold">{company}</Typography>
    <Typography variant="subtitle2" fontStyle="italic">{title} ({dates})</Typography>
    <BulletList items={bullets} />
  </Box>
);

const BulletList = ({ items } : any) => (
  <List dense>
    {items.map((item: any, idx: any) => (
      <ListItem key={idx} sx={{ pl: 2 }}>
        <ListItemText primary={item} />
      </ListItem>
    ))}
  </List>
);

export default Resume;
