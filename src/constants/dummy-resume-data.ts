import { ResumeData } from "../types/common";

export const DUMMY_RESUME_DATA: ResumeData = {
  personalInfo: {
    firstName: 'Nirmal',
    surname: 'Michel',
    email: 'nirmalmichelp@gmail.com',
    phoneNumber: '+91 9447152445'    
  },
  profile: {
    description: 'Detail-oriented, organised and meticulous employee. Works at a fast pace to meet tight deadlines. Enthusiastic team player ready to contribute to company success'
  },
  experience: [
    {
      title: 'Software Engineer Trainee',
      company: 'Ust Global',
      description: [
        'Learned about html css',
        'Learned about java spring boot and Angular js'
      ],
      startDate: '2019',
      endDate: '2023'
    },
    {
      title: 'Senior Software Engineer',
      company: 'Keyvalue Software Systems Pvt Ltd / Kochi',
      description: [
        'Manged a lot of task',
        'Worked with React and React native at the same time. Had to manage a small front end team. Working in splitting and assinging tasks.'
      ],
      startDate: '2019',
      endDate: '2023'
    },
    {
      title: 'Software Engineer Trainee',
      company: 'Ust Global',
      description: [
        'Learned about html css',
        'Learned about java spring boot and Angular js'
      ],
      startDate: '2019',
      endDate: '2023'
    },
    {
      title: 'Senior Software Engineer',
      company: 'Keyvalue Software Systems Pvt Ltd / Kochi',
      description: [
        'Manged a lot of task',
        'Worked with React and React native at the same time. Had to manage a small front end team. Working in splitting and assinging tasks.'
      ],
      startDate: '2019',
      endDate: '2023'
    }
  ],
  educationDetails: [
    {
      startDate: '2015',
      endDate: '2019',
      educationType: 'B.Tech',
      university: 'Christ College of Engineering, IJK',
      info: ''
    },
    {
      startDate: '2013',
      endDate: '2015',
      educationType: '+2',
      university: "St. Antony's H.S.S, Mala",
      info: ''
    }
  ],
  skills: [{ label: 'Javascript', percentage: 90 }, { label: 'Dart', percentage: 30 }, { label: 'React', percentage: 95 }, { label: 'React Native', percentage: 70 }],
  references: [
    { name: 'Amritha Joy', detail: 'MBA / graduate', phoneNumber: '+96 5876586766', email: ' amrithak@gmail.com' },
    { name: 'Amal Michel', detail: 'Nursing / graduate', phoneNumber: '+96 5276549766', email: ' amalmichel@gmail.com' }
  ]
}