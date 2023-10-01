export type Experience = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
};

export type Education = {
  startDate: string;
  endDate: string;
  university: string;
  info: string;
  educationType: string;
};

export type ResumeData = {
  personalInfo: {
    firstName: string;
    surname: string;
    phoneNumber: string;
    email: string;
  };
  profile: {
    description: string;
  };
  experience: Experience[];
  educationDetails: Education[];
  skills: { label: string; percentage: number }[];
  references: {
    name: string;
    detail: string;
    phoneNumber: string;
    email: string;
  }[];
};
