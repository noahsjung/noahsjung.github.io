import weddell from '../images/weddell.png';
import giantShoulders from '../images/giantShoulders.png';
import luxrobo from '../images/luxrobo.png';
import risd from '../images/risd.png';

const experienceData = [
  {
    id: 1,
    company: 'Weddell Co.',
    year: '2019',
    months: 'July - October',
    location: 'Pangyo, Korea',
    role: 'Product Designer',
    descriptions: [
      'Designed a baby product suggestion platform with a designer, PM, and engineers.',
      'Interviewed and surveyed potential users to gain insights into mom’s communities and their pain points of getting parenting information.',
      'Designed app architecture, wireframes, and final screens.',
      'Designed usability tests to confirm previous hypotheses, find out about user behaviors, and the effectiveness of the original design.',
      'Planned and designed for future design updates (new features, information architectures, wireframes, and prototypes)'
    ],
    logo: weddell
  },
  {
    id: 2,
    company: 'Giant Shoulders',
    year: '2018',
    months: 'June - Septmeber',
    location: 'Providence, RI',
    role: 'Design Intern',
    descriptions: [
      'Designed user-flows, wireframes, and final screens for voice recording business productivity app, “Retriever.”',
      'Generated data visualizations, animations, mockups, and presentation slides for clients and business partners.'
    ],
    logo: giantShoulders
  },
  {
    id: 3,
    company: 'Luxrobo',
    year: '2017',
    months: 'June - September',
    location: 'Seoul, Korea',
    role: 'Design Intern',
    descriptions: [
      'Generated rapid prototypes and ideas to help users easily learn how to code and build DIY robots using the company’s modular devices.',
      'Developed a brand design guide with the design team.',
      'Showcased and explained the company’s products to future clients at an exhibition'
    ],
    logo: luxrobo
  },
  {
    id: 4,
    company: 'RISD ISE Office',
    year: '2017 - 2018',
    months: 'Febuary - May',
    location: 'Providence, RI',
    role: 'Project Assistant',
    descriptions: [
      'Collaborated in staff meetings and professional development trainings to make RISD community more inclusive and safer.',
      'Coordinated administrative coordinator and cultural programmers with hosting and developing cultural programs.'
    ],
    logo: risd
  }
];

export default experienceData;
