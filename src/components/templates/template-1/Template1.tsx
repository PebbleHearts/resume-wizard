import styles from './styles.module.css';

const Template1 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nameContainer}>
        Nirmal <span className={styles.surname}>Michel</span>
      </div>
      <div className={styles.designation}>
        Front end developer
      </div>

      <div className={styles.detailSection}>
        <div className={styles.titleSection}>
          PROFILE
        </div>
        <div className={styles.sectionData}>
          Detail-oriented, organised and meticulous employee. Works at a fast pace to meet tight deadlines. Enthusiastic team player ready to contribute to company success
        </div>

        <div className={styles.row}>
          <div className={styles.leftSection}>

            <div className={styles.titleSection}>
              EXPERIENCE
            </div>

            <div className={styles.workItem}>
              <div className={styles.workTitle}>Senior Software Engineer - 2019 - 2030</div>
              <div className={styles.workSubTitle}>Keyvalue Software Systems Pvt Ltd / Kochi</div>
              <div className={styles.workDetails}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare scelerisque nunc. Nulla posuere, enim sit amet porta mattis, velit ante consequat turpis, eu malesuada elit sapien sodales ligula. Suspendisse malesuada vitae odio nec finibus. Suspendisse condimentum elit a erat fermentum pharetra. Curabitur volutpat, sapien a mattis commodo, nibh ante venenatis ipsum, vitae luctus magna nisl at metus.
              </div>
            </div>

            <div className={styles.workItem}>
              <div className={styles.workTitle}>Senior Software Architect - 2030 - 2040</div>
              <div className={styles.workSubTitle}>Nirmal Michel Software Systems Pvt Ltd / Kochi</div>
              <div className={styles.workDetails}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ornare scelerisque nunc. Nulla posuere, enim sit amet porta mattis, velit ante consequat turpis, eu malesuada elit sapien sodales ligula. Suspendisse malesuada vitae odio nec finibus.
              </div>
            </div>

            <div className={styles.skillsSection}>
              <div className={styles.titleSection}>
                SKILLS
              </div>
              <div className={styles.skillsListContainer}>
                <div className={styles.skill}>Javascript</div>
                <div className={styles.skill}>Typescript</div>
                <div className={styles.skill}>NodeJs</div>
                <div className={styles.skill}>React</div>
                <div className={styles.skill}>React Native</div>
                <div className={styles.skill}>Vue.js</div>
              </div>
            </div>

            <div className={styles.referencesSection}>
              <div className={styles.titleSection}>
                REFERENCES
              </div>
              <div className={styles.referenceListContainer}>
                <div className={styles.reference}>
                  <div className={styles.referenceName}>Amritha Joy</div>
                  <div className={styles.referenceSubDetail}>MBA / graduate</div>
                  <div className={styles.referencePhoneNumber}>P: +965876586766</div>
                  <div className={styles.referenceEmail}>E: amal@gmail.com</div>
                </div>
                <div className={styles.reference}>
                  <div className={styles.referenceName}>Amal Michel</div>
                  <div className={styles.referenceSubDetail}>Nursing / graduate</div>
                  <div className={styles.referencePhoneNumber}>P: +687878768768</div>
                  <div className={styles.referenceEmail}>E: amritha@gmail.com</div>
                </div>
              </div>
            </div>

          </div>
          <div className={styles.rightSection}>
            <div className={styles.imageSquare}>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template1;