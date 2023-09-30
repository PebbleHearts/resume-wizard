import { Button, Input, Slider } from "antd";

import { ResumeData } from "../../../../../types/common";
// import styles from "./styles.module.css";
import formCommonStyles from "../styles.module.css";
import { Text } from "../../../../../components";
import { FontSize } from "../../../../../constants/components";
import { useState } from "react";

import styles from "./styles.module.css";
import { DeleteOutlined } from "@ant-design/icons";

type PersonalInfoFormProps = {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
};

const SkillsForm = ({ data, setData }: PersonalInfoFormProps) => {
  const [proficiency, setProficiency] = useState(0);
  const [skillName, setSkillName] = useState("");

  const handleAddSkill = () => {
    setData((prev) => {
      const updatedData = { ...prev };
      updatedData.skills.push({ label: skillName, percentage: proficiency });
      return updatedData;
    });
    setProficiency(0);
    setSkillName("");
  };
  const handleDeleteSkillItem = (deleteIndex: number) => {
    setData((prev) => {
      const updatedData = { ...prev };
      updatedData.skills = updatedData.skills.filter(
        (_, index) => index !== deleteIndex
      );
      return updatedData;
    });
  };

  return (
    <div>
      <Text size={FontSize["4xl"]}>Skills</Text>
      <div className={formCommonStyles.field}>
        <label>Skill Name</label>
        <Input
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
        />
      </div>
      <div className={formCommonStyles.field}>
        <label>Proficiency</label>
        <Slider
          min={0}
          max={100}
          step={5}
          value={proficiency}
          onChange={(val) => setProficiency(val)}
        />
        <div className={formCommonStyles.row}>
          <div style={{ width: 50 }}>
            <Input value={proficiency} disabled />
          </div>
        </div>
      </div>

      <div>
        <Button onClick={handleAddSkill}>+ Add</Button>
      </div>

      <div className={styles.skillsListContainer}>
        {data.skills.map((item, itemIndex) => (
          <div key={item.label} className={styles.skillItem}>
            <div>{item.label}</div>
            <div className={styles.skillItemPercentAndCTA}>
              <div>{item.percentage}%</div>

              <Button
                size="small"
                onClick={() => handleDeleteSkillItem(itemIndex)}
              >
                <DeleteOutlined />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsForm;
