import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";

import { Text } from "../..";
import { FontSize } from "../../../constants/components";
import { ResumeData } from "../../../types/common";
import styles from "./styles.module.css";

type TemplateProps = {
  data: ResumeData;
};
const Template1 = ({ data }: TemplateProps) => {
  const {
    personalInfo,
    profile,
    experience,
    skills,
    educationDetails,
    references,
  } = data;
  return (
    <div className={styles.container}>
      <Text size={FontSize["5xl"]} className={styles.nameContainer}>
        {personalInfo?.firstName}{" "}
        <span className={styles.surname}>{personalInfo?.surname}</span>
      </Text>
      <Text size={FontSize.lg} className={styles.designation}>
        Front end developer
      </Text>

      <div className={styles.detailSection}>
        <Text size={FontSize.base} className={styles.titleSection}>
          PROFILE
        </Text>
        <Text size={FontSize.lg} className={styles.description}>
          {profile?.description}
        </Text>

        <div className={styles.row}>
          <div className={styles.leftSection}>
            <Text size={FontSize.base} className={styles.titleSection}>
              EXPERIENCE
            </Text>

            {experience?.map((item) => (
              <div key={item.title} className={styles.workItem}>
                <Text size={FontSize.xl}>
                  {item.title} - {item.startDate} - {item.endDate}
                </Text>
                <Text size={FontSize.lg} className={styles.workSubTitle}>
                  {item.company}
                </Text>
                <div className={styles.workDetails}>
                  <div>
                    {item.description.map((descItem) => (
                      <Text
                        key={descItem}
                        size={FontSize.base}
                        className={styles.workDescriptionItem}
                      >
                        <div className={styles.workDescriptionItemIndicator}>
                          &#8226;
                        </div>
                        <div>{descItem}</div>
                      </Text>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className={styles.skillsSection}>
              <Text size={FontSize.base} className={styles.titleSection}>
                SKILLS
              </Text>
              <div className={styles.skillsListContainer}>
                {skills?.map((item) => (
                  <>
                    <Text
                      key={item.label}
                      size={FontSize.base}
                      className={styles.skill}
                    >
                      {item.label}
                    </Text>
                  </>
                ))}
              </div>
            </div>

            <div className={styles.referencesSection}>
              <Text size={FontSize.base} className={styles.titleSection}>
                REFERENCES
              </Text>
              <div className={styles.referenceListContainer}>
                {references?.map((item) => (
                  <div key={item.name} className={styles.reference}>
                    <Text size={FontSize.xl}>{item.name}</Text>
                    <Text size={FontSize.lg} className={styles.detail}>
                      {item.detail}
                    </Text>
                    <Text size={FontSize.base}>P: {item.phoneNumber}</Text>
                    <Text size={FontSize.base}>E: {item.email}</Text>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.rightSection}>
            <div className={styles.imageSquare}></div>
            <div className={styles.personalInfoSection}>
              <div className={styles.personalInfoItem}>
                <div className={styles.icon}>
                  <PhoneIcon style={{ fontSize: 16 }} />
                </div>
                <div>{personalInfo?.phoneNumber}</div>
              </div>
              <div className={styles.personalInfoItem}>
                <div className={styles.icon}>
                  <MailIcon style={{ fontSize: 16 }} />
                </div>
                <div>{personalInfo?.email}</div>
              </div>
            </div>

            <div className={styles.educationSection}>
              <Text size={FontSize.base} className={styles.titleSection}>
                EDUCATION
              </Text>
              <div className={styles.educationsListListContainer}>
                {educationDetails?.map((item) => (
                  <div
                    key={`${item.educationType}-${item.university}`}
                    className={styles.educationItem}
                  >
                    <Text
                      size={FontSize.lg}
                      className={styles.educationItemTimeline}
                    >
                      {item.startDate} - {item.endDate}
                    </Text>
                    <Text
                      size={FontSize.lg}
                      className={styles.educationItemType}
                    >
                      {item.educationType}
                    </Text>
                    <Text
                      size={FontSize.lg}
                      className={styles.educationItemType}
                    >
                      {item.university}
                    </Text>
                    {item.info && (
                      <Text
                        size={FontSize.base}
                        className={styles.educationItemInfo}
                      >
                        {item.info}
                      </Text>
                    )}
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
