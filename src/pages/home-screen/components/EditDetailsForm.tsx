import { useState } from "react";
import { Button } from "antd";

import styles from "./styles.module.css";
import { ResumeData } from "../../../types/common";
import PersonalInfoForm from "./components/personal-info-form/PersonalInfoForm";
import ExperienceForm from "./components/experience-form/ExperienceForm";

type EditDetailsFormProps = {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
};

enum FormKeys {
  PersonalInfo = 'PERSONAL_INFO',
  Experience = 'EXPERIENCE',
}

const formKeyMap = {
  [FormKeys.PersonalInfo]: PersonalInfoForm,
  [FormKeys.Experience]: ExperienceForm,
};
const EditDetailsForm = ({ data, setData }: EditDetailsFormProps) => {
  const [step, setStep] = useState<FormKeys>(FormKeys.PersonalInfo);

  const CurrentForm = formKeyMap[step];
  return (
    <div className={styles.formContainer}>
      <CurrentForm data={data} setData={setData} />
      <Button className="bg-white" onClick={() => setStep(FormKeys.Experience)}>Next</Button>
    </div>
  );
};

export default EditDetailsForm;
