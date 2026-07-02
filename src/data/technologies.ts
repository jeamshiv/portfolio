export interface Technology {
  name: string
  image: string
}

const ICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

const react: Technology = { name: 'React', image: `${ICON}/react/react-original.svg` }
const nextjs: Technology = { name: 'Next.js', image: `${ICON}/nextjs/nextjs-original.svg` }
const reactNative: Technology = { name: 'React Native', image: `${ICON}/react/react-original.svg` }
const nodejs: Technology = { name: 'Node.js', image: `${ICON}/nodejs/nodejs-original.svg` }
const javascript: Technology = { name: 'JavaScript', image: `${ICON}/javascript/javascript-original.svg` }
const tailwind: Technology = { name: 'Tailwind CSS', image: `${ICON}/tailwindcss/tailwindcss-original.svg` }
const bootstrap: Technology = { name: 'Bootstrap', image: `${ICON}/bootstrap/bootstrap-original.svg` }
const antdesign: Technology = { name: 'Ant Design', image: `${ICON}/antdesign/antdesign-original.svg` }
const mysql: Technology = { name: 'MySQL', image: `${ICON}/mysql/mysql-original.svg` }
const mongodb: Technology = { name: 'MongoDB', image: `${ICON}/mongodb/mongodb-original.svg` }
const graphql: Technology = { name: 'GraphQL', image: `${ICON}/graphql/graphql-plain.svg` }
const git: Technology = { name: 'Git', image: `${ICON}/git/git-original.svg` }
const aws: Technology = { name: 'AWS', image: `${ICON}/amazonwebservices/amazonwebservices-original-wordmark.svg` }

// Vertical columns render as a staggered "diamond": each column is centered
// vertically, so the 1 → 3 → 5 → 3 → 1 heights fan out symmetrically.
export const technologyColumns: Technology[][] = [
  [react],
  [nextjs, reactNative, javascript],
  [nodejs, tailwind, mongodb, mysql, graphql],
  [bootstrap, antdesign, git],
  [aws],
]
