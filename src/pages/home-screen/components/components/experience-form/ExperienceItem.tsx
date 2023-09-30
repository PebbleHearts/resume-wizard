import { Button } from "antd";
import styles from "./styles.module.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

type ExperienceItemProps = {
  company: string;
  designation: string;
  startYear: string;
  endYear: string;
  onEditClick: () => void;
  onDeleteClick: () => void;
};

const ExperienceItem = ({
  company,
  designation,
  startYear,
  endYear,
  onEditClick,
  onDeleteClick,
}: ExperienceItemProps) => {
  return (
    <div className={styles.experienceItem}>
      <div>
        <div>{company}</div>
        <div>{designation}</div>
        <div>{`${startYear} - ${endYear}`}</div>
      </div>
      <div className={styles.experienceItemCtaContainer}>
        <Button onClick={onEditClick}><EditOutlined /></Button>
        <Button onClick={onDeleteClick}><DeleteOutlined /></Button>
      </div>
    </div>
  );
};

export default ExperienceItem;
