export type ResumeData = {
  personalInfo?: {
    firstName: string;
    surname: string;
    phoneNumber: string;
    email: string;
  };
  profile?: {
    description: string;
  }
  experience?: {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string[]
  }[];
  educationDetails: { startDate: string, endDate: string, university: string, info: string, educationType: string }[]
  skills?: { label: string, percentage: number }[];
  references?: { name: string; detail: string; phoneNumber: string; email: string }[]
}