import { Button } from 'antd';

import styles from './styles.module.css';
import { ResumeData } from '../../../types/common';
import PersonalInfoForm from './components/personal-info-form/PersonalInfoForm';

type EditDetailsFormProps = {
  data: ResumeData;
  setData:  React.Dispatch<React.SetStateAction<ResumeData>>;
}
const EditDetailsForm = ({ data, setData }: EditDetailsFormProps) => {
  return (
    <div className={styles.formContainer}>
      <PersonalInfoForm data={data} setData={setData} />
      <Button className='bg-white'>Click Me</Button>
    </div>
  );
};

export default EditDetailsForm;
