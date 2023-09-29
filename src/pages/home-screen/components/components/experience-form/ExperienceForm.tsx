import { Input, DatePicker, Button } from "antd";

import { Experience, ResumeData } from "../../../../../types/common";
import styles from "./styles.module.css";
import formCommonStyles from "../styles.module.css";
import { Text } from "../../../../../components";
import { FontSize } from "../../../../../constants/components";
import ExperienceItem from "./ExperienceItem";
import { useState } from "react";

type PersonalInfoFormProps = {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
};

const ExperienceForm = ({ data, setData }: PersonalInfoFormProps) => {
  const [tempFormData, setTempFormData] = useState<Experience>({
    company: "xyz",
    title: "Developer",
    startDate: "2022",
    endDate: "2023",
    description: ["asdasdasda"],
  });

  const handleDesignationChange = (val: string) => {
    setTempFormData((prev) => ({
      ...prev,
      title: val,
    }));
  };

  const handleCompanyNameChange = (val: string) => {
    setTempFormData((prev) => ({
      ...prev,
      company: val,
    }));
  };

  const handleStartDateChange = (val: string) => {
    setTempFormData((prev) => ({
      ...prev,
      startDate: val,
    }));
  };

  const handleEndDateChange = (val: string) => {
    setTempFormData((prev) => ({
      ...prev,
      endDate: val,
    }));
  };

  const handleAddNewItem = () => {
    setData((prev) => {
      const updatedData = {...prev};
      updatedData.experience = [...updatedData.experience, tempFormData];
      return updatedData;
    });
  };

  return (
    <div>
      <Text size={FontSize["4xl"]}>Experience Info</Text>

      <div className={styles.listingSection}>
        {data.experience.map((item) => {
          return (
            <ExperienceItem
              key={item.company}
              company={item.company}
              designation={item.title}
              startYear={item.startDate}
              endYear={item.endDate}
            />
          );
        })}
      </div>
      <div className={`${formCommonStyles.field} ${formCommonStyles.stretch}`}>
        <label>Designation</label>
        <Input
          value={tempFormData.title}
          onChange={(e) => handleDesignationChange(e.target.value)}
        />
      </div>
      <div className={`${formCommonStyles.field} ${formCommonStyles.stretch}`}>
        <label>Company</label>
        <Input
          value={tempFormData.company}
          onChange={(e) => handleCompanyNameChange(e.target.value)}
        />
      </div>

      <div className={formCommonStyles.row}>
        <div
          className={`${formCommonStyles.field} ${formCommonStyles.stretch}`}
        >
          <label>Start Date</label>
          <DatePicker
            picker="year"
            onChange={(_, str) => handleStartDateChange(str)}
          />
        </div>
        <div
          className={`${formCommonStyles.field} ${formCommonStyles.stretch}`}
        >
          <label>End Date</label>
          <DatePicker
            picker="year"
            onChange={(_, str) => handleEndDateChange(str)}
          />
        </div>
      </div>

      <div className={formCommonStyles.field}>
        <div className={styles.addButton}>
          <Button onClick={handleAddNewItem}>+ Add</Button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceForm;
