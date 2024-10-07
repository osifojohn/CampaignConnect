import React from 'react';
import { Card, Col, Progress } from 'antd';

import iconOpenOutline from '../../../public/icons/iconOpenOutline.svg';
import AvartarIcon from '../../../public/icons/profile.svg';

import styles from './ProfileInformation.module.css';

const ProfileInformation: React.FC = () => {
  return (
    <>
      <Col xs={24} md={8}>
        <Card
          title="Profile Information"
          extra={
            <a href="#">
              <img src={iconOpenOutline} alt="" />
            </a>
          }
          className={styles.profileInfoCard}
        >
          <div className={styles.profileDetails}>
            <div>
              <img src={AvartarIcon} className={styles.avatar} />
            </div>
            <div>
              <div>Olivia Jacobs Jacobs</div>

              <Progress percent={70} />
            </div>
          </div>
          <p className={styles.instructions}>
            Complete your profile with details showcasing your skills and
            personality. Stand out and attract more opportunities.
          </p>
        </Card>
      </Col>
    </>
  );
};

export default ProfileInformation;
