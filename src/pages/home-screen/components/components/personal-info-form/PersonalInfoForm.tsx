import { Input } from "antd";

import { ResumeData } from "../../../../../types/common";
// import styles from "./styles.module.css";
import formCommonStyles from "../styles.module.css";
import { Text } from "../../../../../components";
import { FontSize } from "../../../../../constants/components";

type PersonalInfoFormProps = {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
};

const PersonalInfoForm = ({ data, setData }: PersonalInfoFormProps) => {
  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      let updatedResumeData = { ...prev };
      updatedResumeData.personalInfo.firstName = e.target.value;
      return updatedResumeData;
    });
  };
  const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      let updatedResumeData = { ...prev };
      updatedResumeData.personalInfo.surname = e.target.value;
      return updatedResumeData;
    });
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      let updatedResumeData = { ...prev };
      updatedResumeData.personalInfo.email = e.target.value;
      return updatedResumeData;
    });
  };
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => {
      let updatedResumeData = { ...prev };
      updatedResumeData.personalInfo.phoneNumber = e.target.value;
      return updatedResumeData;
    });
  };

  return (
    <div>
      <Text size={FontSize["4xl"]}>Personal Info</Text>
      <div className={formCommonStyles.row}>
        <div
          className={`${formCommonStyles.field} ${formCommonStyles.stretch}`}
        >
          <label>First Name</label>
          <Input
            value={data.personalInfo?.firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div
          className={`${formCommonStyles.field} ${formCommonStyles.stretch}`}
        >
          <label>Surname</label>
          <Input
            value={data.personalInfo?.surname}
            onChange={handleSurnameChange}
          />
        </div>
      </div>
      <div className={`${formCommonStyles.field} ${formCommonStyles.stretch}`}>
        <label>Email</label>
        <Input value={data.personalInfo?.email} onChange={handleEmailChange} />
      </div>
      <div className={`${formCommonStyles.field} ${formCommonStyles.stretch}`}>
        <label>Phone Number</label>
        <Input
          value={data.personalInfo?.phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
    </div>
  );
};

export default PersonalInfoForm;
