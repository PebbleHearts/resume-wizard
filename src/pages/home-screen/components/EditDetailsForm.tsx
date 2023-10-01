import { useState } from "react";
import { Button } from "antd";

import styles from "./styles.module.css";
import { ResumeData } from "../../../types/common";
import PersonalInfoForm from "./components/personal-info-form/PersonalInfoForm";
import ExperienceForm from "./components/experience-form/ExperienceForm";
import SkillsForm from "./components/skills-form/SkillsForm";
import EducationForm from "./components/education-form/EducationForm";

type EditDetailsFormProps = {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
};

const formKeyArray = [PersonalInfoForm, ExperienceForm, SkillsForm, EducationForm];

const EditDetailsForm = ({ data, setData }: EditDetailsFormProps) => {
  const [step, setStep] = useState<number>(0);

  const CurrentForm = formKeyArray[step];
  return (
    <div className={styles.formContainer}>
      <CurrentForm data={data} setData={setData} />
      <Button
        className="bg-white"
        onClick={() =>
          setStep((prev) => {
            return prev + 1 >= formKeyArray.length ? prev : prev + 1;
          })
        }
      >
        Next
      </Button>
    </div>
  );
};

export default EditDetailsForm;
