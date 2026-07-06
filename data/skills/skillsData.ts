// data/skillsData.ts

export interface Skill {
  name: string
  iconClass: string | null
  imageSrc: string | null
  category: string
}

// Category order is preserved in the UI.
export const skillCategories = [
  'Programming & Scripting',
  'Cloud & Data Warehousing',
  'Databases',
  'DevOps & Orchestration',
  'BI & Visualization',
  'Data Governance & Quality',
] as const

export const skillsData: Skill[] = [
  // Programming & Scripting
  {
    name: 'Python',
    iconClass: 'devicon-python-plain',
    imageSrc: null,
    category: 'Programming & Scripting',
  },
  {
    name: 'Apache Spark',
    iconClass: 'devicon-apachespark-original',
    imageSrc: '/static/images/icons/apache-spark.svg',
    category: 'Programming & Scripting',
  },
  {
    name: 'pandas',
    iconClass: 'devicon-pandas-original',
    imageSrc: null,
    category: 'Programming & Scripting',
  },
  {
    name: 'Bash',
    iconClass: 'devicon-bash-plain',
    imageSrc: null,
    category: 'Programming & Scripting',
  },

  // Cloud & Data Warehousing
  {
    name: 'Microsoft Azure',
    iconClass: 'devicon-azure-plain',
    imageSrc: null,
    category: 'Cloud & Data Warehousing',
  },
  {
    name: 'Snowflake',
    iconClass: null,
    imageSrc: '/static/images/icons/snowflake-icon.svg',
    category: 'Cloud & Data Warehousing',
  },
  {
    name: 'Databricks',
    iconClass: null,
    imageSrc: '/static/images/icons/databricks.png',
    category: 'Cloud & Data Warehousing',
  },

  // Databases
  { name: 'Oracle', iconClass: 'devicon-oracle-original', imageSrc: null, category: 'Databases' },
  {
    name: 'SQL Server',
    iconClass: 'devicon-microsoftsqlserver-plain',
    imageSrc: null,
    category: 'Databases',
  },
  {
    name: 'PostgreSQL',
    iconClass: 'devicon-postgresql-plain',
    imageSrc: null,
    category: 'Databases',
  },
  {
    name: 'Cosmos DB',
    iconClass: null,
    imageSrc: '/static/images/icons/Cosmos_DB.png',
    category: 'Databases',
  },

  // DevOps & Orchestration
  {
    name: 'dbt',
    iconClass: null,
    imageSrc: '/static/images/icons/dbt.png',
    category: 'DevOps & Orchestration',
  },
  {
    name: 'Docker',
    iconClass: 'devicon-docker-plain',
    imageSrc: null,
    category: 'DevOps & Orchestration',
  },
  {
    name: 'Azure DevOps',
    iconClass: 'devicon-azure-plain',
    imageSrc: null,
    category: 'DevOps & Orchestration',
  },
  {
    name: 'GitHub Actions',
    iconClass: 'devicon-github-original',
    imageSrc: null,
    category: 'DevOps & Orchestration',
  },
  {
    name: 'Terraform',
    iconClass: 'devicon-terraform-plain',
    imageSrc: null,
    category: 'DevOps & Orchestration',
  },
  {
    name: 'Airflow',
    iconClass: null,
    imageSrc: '/static/images/icons/airflow.svg',
    category: 'DevOps & Orchestration',
  },

  // BI & Visualization
  {
    name: 'Power BI',
    iconClass: null,
    imageSrc: '/static/images/icons/Power-BI-Logo.png',
    category: 'BI & Visualization',
  },
  {
    name: 'Tableau',
    iconClass: null,
    imageSrc: '/static/images/icons/tableau-software.svg',
    category: 'BI & Visualization',
  },

  // Data Governance & Quality
  {
    name: 'Great Expectations',
    iconClass: null,
    imageSrc: '/static/images/icons/ge.png',
    category: 'Data Governance & Quality',
  },
]

export default skillsData
