import { Button } from "antd";
import styles from "./styles.module.css";
import { EditOutlined } from "@ant-design/icons";

type ExperienceItemProps = {
  company: string;
  designation: string;
  startYear: string;
  endYear: string;
};

const ExperienceItem = ({
  company,
  designation,
  startYear,
  endYear,
}: ExperienceItemProps) => {
  return (
    <div className={styles.experienceItem}>
      <div>
        <div>{company}</div>
        <div>{designation}</div>
        <div>{`${startYear} - ${endYear}`}</div>
      </div>
      <div>
        <Button><EditOutlined /></Button>
      </div>
    </div>
  );
};

export default ExperienceItem;
