import { ResumeData } from '../../../types/common';
import styles from './styles.module.css';

type TemplateProps = {
  data: ResumeData;
}
const Template1 = ({ data }: TemplateProps) => {
  const { personalInfo, profile, experience, skills, educationDetails, references } = data;
  return (
    <div className={styles.container}>
      <div className={styles.nameContainer}>
        {personalInfo?.firstName} <span className={styles.surname}>{personalInfo?.surname}</span>
      </div>
      <div className={styles.designation}>
        Front end developer
      </div>

      <div className={styles.detailSection}>
        <div className={styles.titleSection}>
          PROFILE
        </div>
        <div className={styles.sectionData}>
          {profile?.description}
        </div>

        <div className={styles.row}>
          <div className={styles.leftSection}>

            <div className={styles.titleSection}>
              EXPERIENCE
            </div>

            {experience?.map((item) => (
              <div className={styles.workItem}>
                <div className={styles.workTitle}>{item.title} - {item.startDate} - {item.endDate}</div>
                <div className={styles.workSubTitle}>{item.company}</div>
                <div className={styles.workDetails}>
                  <div>
                    {item.description.map((descItem) => (
                      <div className={styles.workDescriptionItem}>
                        <div className={styles.workDescriptionItemIndicator}>&#8226;</div>
                        <div>{descItem}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className={styles.skillsSection}>
              <div className={styles.titleSection}>
                SKILLS
              </div>
              <div className={styles.skillsListContainer}>
                {skills?.map((item) => (
                  <div className={styles.skill}>{item.label}</div>
                ))}
              </div>
            </div>

            <div className={styles.referencesSection}>
              <div className={styles.titleSection}>
                REFERENCES
              </div>
              <div className={styles.referenceListContainer}>
                {references?.map((item) => (
                  <div className={styles.reference}>
                    <div className={styles.referenceName}>{item.name}</div>
                    <div className={styles.referenceSubDetail}>{item.detail}</div>
                    <div className={styles.referencePhoneNumber}>P: {item.phoneNumber}</div>
                    <div className={styles.referenceEmail}>E: {item.email}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
          <div className={styles.rightSection}>

            <div className={styles.imageSquare}>
            </div>
            <div className={styles.personalInfoSection}>
              <div className={styles.personalInfoItem}>
                <div className={styles.icon}>&#9742;</div>
                <div>P: {personalInfo?.phoneNumber}</div>
              </div>
              <div className={styles.personalInfoItem}>
                <div className={styles.icon}>&#9742;</div>
                <div>E: {personalInfo?.email}</div>
              </div>
            </div>

            <div className={styles.educationSection}>
              <div className={styles.titleSection}>
                Education
              </div>
              <div className={styles.educationsListListContainer}>
                {educationDetails?.map((item) => (
                  <div className={styles.educationItem}>
                    <div className={styles.educationItemTimeline}>{item.startDate} - {item.endDate}</div>
                    <div className={styles.educationItemType}>{item.educationType}</div>
                    <div className={styles.educationItemUniversity}>{item.university}</div>
                    {item.info && ( <div className={styles.educationItemInfo}>{item.info}</div>)}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;