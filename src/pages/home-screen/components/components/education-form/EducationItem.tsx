import { Button } from "antd";
import styles from "./styles.module.css";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

type EducationItemProps = {
  educationType: string;
  university: string;
  info: string;
  startYear: string;
  endYear: string;
  onEditClick: () => void;
  onDeleteClick: () => void;
};

const EducationItem = ({
  educationType,
  university,
  info,
  startYear,
  endYear,
  onEditClick,
  onDeleteClick,
}: EducationItemProps) => {
  return (
    <div className={styles.educationItem}>
      <div>
        <div>{educationType}</div>
        <div>{university}</div>
        <div>{info}</div>
        <div>{`${startYear} - ${endYear}`}</div>
      </div>
      <div className={styles.educationItemCtaContainer}>
        <Button onClick={onEditClick}><EditOutlined /></Button>
        <Button onClick={onDeleteClick}><DeleteOutlined /></Button>
      </div>
    </div>
  );
};

export default EducationItem;
