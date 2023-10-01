import { Button, DatePicker, Input } from "antd";

import { Education, ResumeData } from "../../../../../types/common";
// import styles from "./styles.module.css";
import formCommonStyles from "../styles.module.css";
import { Text } from "../../../../../components";
import { FontSize } from "../../../../../constants/components";
import { useState } from "react";
import EducationItem from "./EducationItem";

import styles from "./styles.module.css";
import { PlusOutlined } from "@ant-design/icons";

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
    data.educationDetails.length === 0 || isAddingNew || editIndex !== null;

  const handleDeleteItemClick = (deleteIndex: number) => {
    setData((prev) => {
      const updatedData = { ...prev };
      updatedData.educationDetails = updatedData.educationDetails.filter(
        (_, index) => index !== deleteIndex
      );
      return updatedData;
    });
  };

  const handleEducationTypeChange = (val: string) => {
    setTempFormData((prev) => {
      const updatedData = {...prev};
      updatedData.educationType = val
      return updatedData;
    })
  };

  const handleUniversityChange = (val: string) => {
    setTempFormData((prev) => {
      const updatedData = {...prev};
      updatedData.university = val
      return updatedData;
    })
  };

  const handleInfoChange = (val: string) => {
    setTempFormData((prev) => {
      const updatedData = {...prev};
      updatedData.info = val
      return updatedData;
    })
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
      const updatedData = { ...prev };
      updatedData.educationDetails = [...updatedData.educationDetails, tempFormData];
      return updatedData;
    });
    setTempFormData(initialExperienceData);
  };

  const handleSaveExistingItem = () => {
    setData((prev) => {
      const updatedData = { ...prev };
      if (editIndex !== null) {
        updatedData.educationDetails[editIndex] = tempFormData;
      }
      return updatedData;
    });
    setEditIndex(null);
    setTempFormData(initialExperienceData);
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

      {!showAddForm && (
        <div className={styles.addEducationButton}>
          <Button onClick={() => setIsAddingNew(true)}>
            <PlusOutlined /> Add Education
          </Button>
        </div>
      )}

      {showAddForm && (
        <div>
          <div className={formCommonStyles.field}>
            <label>Education Type</label>
            <Input value={tempFormData.educationType} onChange={(e) => handleEducationTypeChange(e.target.value)} />
          </div>
          <div className={formCommonStyles.field}>
            <label>University / College</label>
            <Input value={tempFormData.university}  onChange={(e) => handleUniversityChange(e.target.value)} />
          </div>
          <div className={formCommonStyles.field}>
            <label>Info</label>
            <Input value={tempFormData.info}  onChange={(e) => handleInfoChange(e.target.value)} />
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
              {editIndex === null ? (
                <Button onClick={handleAddNewItem}>+ Add</Button>
              ) : (
                <Button onClick={handleSaveExistingItem}>Save</Button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationForm;
