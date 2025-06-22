// data/resumeData.ts
// We are defining the icons we will use here.
// You can browse all available icons at https://lucide.dev/
import { Briefcase, Building, GraduationCap, Code2 } from 'lucide-react'

export const resumeData = [
  {
    year: '2023',
    title: 'Lead Cloud & DevOps Engineer, Innovate Inc.',
    icon: Briefcase,
    description: [
      'Led a team to architect and implement a scalable, multi-cloud infrastructure on AWS and Azure, reducing operational costs by 30%.',
      'Developed and maintained CI/CD pipelines using Jenkins, GitLab CI, and GitHub Actions, improving deployment frequency by 200%.',
      'Automated infrastructure provisioning and configuration management using Terraform and Ansible.',
    ],
  },
  {
    year: '2021',
    title: 'Senior Software Engineer, Tech Solutions LLC',
    icon: Building,
    description: [
      'Developed backend services using Node.js and Python, serving over 1 million daily active users.',
      'Designed and implemented microservices architecture, improving system modularity and scalability.',
      'Mentored junior developers in best practices for code quality, testing, and system design.',
    ],
  },
  {
    year: '2020',
    title: 'Software Development Intern, Data Analytics Co.',
    icon: Code2,
    description: [
      'Contributed to the development of a data processing pipeline using Python and Pandas.',
      'Wrote unit and integration tests to ensure software reliability and quality.',
    ],
  },
  {
    year: '2019',
    title: 'Master of Science in Computer Science',
    icon: GraduationCap,
    description: ['Specialized in Distributed Systems and Machine Learning at the University of Example.'],
  },
]

export default resumeData