import { Button, DatePicker, Input, Slider } from "antd";

import { Education, ResumeData } from "../../../../../types/common";
// import styles from "./styles.module.css";
import formCommonStyles from "../styles.module.css";
import { Text } from "../../../../../components";
import { FontSize } from "../../../../../constants/components";
import { useState } from "react";
import EducationItem from "./EducationItem";

import styles from "./styles.module.css";
import { DeleteOutlined } from "@ant-design/icons";

type PersonalInfoFormProps = {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
};

const initialExperienceData: Education = {
  educationType: "",
  university: "",
  info: "",
  startDate: "",
  endDate: "",
};

const EducationForm = ({ data, setData }: PersonalInfoFormProps) => {
  const [tempFormData, setTempFormData] = useState<Education>(
    initialExperienceData
  );
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleEditItemClick = (editIndex: number) => {
    setEditIndex(editIndex);
  };

  const showAddForm =
    data.experience.length === 0 || isAddingNew || editIndex !== null;

  const handleDeleteItemClick = (deleteIndex: number) => {
    setData((prev) => {
      const updatedData = { ...prev };
      updatedData.experience = updatedData.experience.filter(
        (_, index) => index !== deleteIndex
      );
      return updatedData;
    });
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

  return (
    <div>
      <Text size={FontSize["4xl"]}>Education</Text>

      <div className={styles.listingSection}>
        {data.educationDetails.map((item, index) => {
          return (
            <EducationItem
              key={item.educationType}
              educationType={item.educationType}
              university={item.university}
              info={item.info}
              startYear={item.startDate}
              endYear={item.endDate}
              onEditClick={() => handleEditItemClick(index)}
              onDeleteClick={() => handleDeleteItemClick(index)}
            />
          );
        })}
      </div>

      {showAddForm && (
        <div>
          <div className={formCommonStyles.field}>
            <label>Education Type</label>
            <Input />
          </div>
          <div className={formCommonStyles.field}>
            <label>University / College</label>
            <Input />
          </div>
          <div className={formCommonStyles.field}>
            <label>Info</label>
            <Input />
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
        </div>
      )}
    </div>
  );
};

export default EducationForm;
