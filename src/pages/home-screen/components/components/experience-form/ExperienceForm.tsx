import { Input, DatePicker } from "antd";

import { ResumeData } from "../../../../../types/common";
// import styles from "./styles.module.css";
import formCommonStyles from "../styles.module.css";
import { Text } from "../../../../../components";
import { FontSize } from "../../../../../constants/components";

type PersonalInfoFormProps = {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
};

const ExperienceForm = ({ }: PersonalInfoFormProps) => {

  return (
    <div>
      <Text size={FontSize["4xl"]}>Experience Info</Text>
      <div className={`${formCommonStyles.field} ${formCommonStyles.stretch}`}>
        <label>Designation</label>
        <Input value=""/>
      </div>
      <div className={`${formCommonStyles.field} ${formCommonStyles.stretch}`}>
        <label>Company</label>
        <Input value=""/>
      </div>

      <div className={formCommonStyles.row}>
        <div className={`${formCommonStyles.field} ${formCommonStyles.stretch}`}>
          <label>Start Date</label>
          <DatePicker picker="year" onChange={(val, str) => console.log(val, str)} />
        </div>
        <div className={`${formCommonStyles.field} ${formCommonStyles.stretch}`}>
          <label>End Date</label>
          <DatePicker picker="year" onChange={(val, str) => console.log(val, str)} />
        </div>
      </div>
    </div>
  );
};

export default ExperienceForm;
