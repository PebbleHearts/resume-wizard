import { Input, DatePicker, Button } from "antd";

import { Experience, ResumeData } from "../../../../../types/common";
import styles from "./styles.module.css";
import formCommonStyles from "../styles.module.css";
import { Text } from "../../../../../components";
import { FontSize } from "../../../../../constants/components";
import ExperienceItem from "./ExperienceItem";
import { useState } from "react";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

type PersonalInfoFormProps = {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
};

const initialExperienceData = {
  company: "",
  title: "",
  startDate: "",
  endDate: "",
  description: [],
};

const ExperienceForm = ({ data, setData }: PersonalInfoFormProps) => {
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [tempFormData, setTempFormData] = useState<Experience>(
    initialExperienceData
  );
  const [tempDescription, setTempDescription] = useState<string>("");

  const showAddForm =
    data.experience.length === 0 || isAddingNew || editIndex !== null;

  const handleEditItemClick = (editIndex: number) => {
    setEditIndex(editIndex);
    setTempFormData(data.experience[editIndex]);
  };

  const handleDeleteItemClick = (deleteIndex: number) => {
    setData((prev) => {
      const updatedData = { ...prev };
      updatedData.experience = updatedData.experience.filter(
        (_, index) => index !== deleteIndex
      );
      return updatedData;
    });
  };

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
      const updatedData = { ...prev };
      updatedData.experience = [...updatedData.experience, tempFormData];
      return updatedData;
    });
    setTempFormData(initialExperienceData);
  };

  const handleSaveExistingItem = () => {
    setData((prev) => {
      const updatedData = { ...prev };
      if (editIndex !== null) {
        updatedData.experience[editIndex] = tempFormData;
      }
      return updatedData;
    });
    setEditIndex(null);
    setTempFormData(initialExperienceData);
  };

  const handleDeleteExperienceDescriptionItem = (descIndex: number) => {
    setTempFormData((prev) => {
      const updatedData = { ...prev };
      updatedData.description = updatedData.description.filter(
        (_, i) => i !== descIndex
      );
      return updatedData;
    });
  };

  const handleAddExperienceDescriptionItem = () => {
    setTempFormData((prev) => {
      const updatedData = { ...prev };
      if (tempDescription) {
        updatedData.description.push(tempDescription);
      }
      return updatedData;
    });
    setTempDescription("");
  };

  return (
    <div>
      <Text size={FontSize["4xl"]}>Experience Info</Text>

      <div className={styles.listingSection}>
        {data.experience.map((item, index) => {
          return (
            <ExperienceItem
              key={item.company}
              company={item.company}
              designation={item.title}
              startYear={item.startDate}
              endYear={item.endDate}
              onEditClick={() => handleEditItemClick(index)}
              onDeleteClick={() => handleDeleteItemClick(index)}
            />
          );
        })}
      </div>

      {!showAddForm && (
        <div className={styles.addExperienceButton}>
          <Button onClick={() => setIsAddingNew(true)}>
            <PlusOutlined /> Add Experience
          </Button>
        </div>
      )}

      {showAddForm && (
        <div>
          <div
            className={`${formCommonStyles.field} ${formCommonStyles.stretch}`}
          >
            <label>Designation</label>
            <Input
              value={tempFormData.title}
              onChange={(e) => handleDesignationChange(e.target.value)}
            />
          </div>
          <div
            className={`${formCommonStyles.field} ${formCommonStyles.stretch}`}
          >
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
            <label>Description</label>
            <div className={formCommonStyles.row}>
              <Input.TextArea
                onChange={(e) => setTempDescription(e.target.value)}
                value={tempDescription}
              />
              <Button onClick={handleAddExperienceDescriptionItem}>
                <PlusOutlined />
              </Button>
            </div>
            <div>
              {tempFormData.description.map((desc, descIndex) => (
                <div key={desc} className={styles.descriptionItem}>
                  <div>{desc}</div>
                  <Button
                    size="small"
                    onClick={() =>
                      handleDeleteExperienceDescriptionItem(descIndex)
                    }
                  >
                    <DeleteOutlined />
                  </Button>
                </div>
              ))}
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

export default ExperienceForm;
