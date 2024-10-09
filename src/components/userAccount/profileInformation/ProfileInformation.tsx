import React from 'react';
import { Button, Card, Col, Progress } from 'antd';
import styles from './ProfileInformation.module.css';
import { ProfileData } from '../../../types';
import { iconOpenOutline } from '../../../assets/icons';
import UserRepository from '../../../lib/UserRepository';

type ProfileInformationProps = {
  data: ProfileData;
};

const ProfileInformationBigScreen: React.FC<ProfileInformationProps> = ({
  data,
}) => {
  return (
    <Col xs={24} md={8}>
      <Card
        title="Profile Information"
        extra={
          <a href={data.profileLink}>
            <img src={iconOpenOutline} alt="Open Profile" />
          </a>
        }
        className={styles.profileInfoCard}
      >
        <div className={styles.profileDetails}>
          <div>
            <img
              src={data.profileImage}
              className={styles.avatar}
              alt="Avatar"
            />
          </div>
          <div>
            <div>{data.name}</div>
            <Progress percent={data.profileCompletion} />
          </div>
        </div>
        <p className={styles.instructions}>{data.instructions}</p>
      </Card>
    </Col>
  );
};

const ProfileInformationSmallerScreen: React.FC = () => {
  const data = UserRepository.getUserProfile();

  return (
    <Card className={styles.smallerProfileCard}>
      <Progress
        type="circle"
        percent={data?.profileCompletion}
        format={(percent) => (
          <>
            <span className={styles.percentNumber}>{percent}%</span>
            <span className={styles.percentText}> Complete</span>
          </>
        )}
        strokeColor="#001529"
        size={66}
      />
      <h2 className={styles.profileTitle}>Profile Information</h2>
      <p className={styles.profileDescription}>{data?.instructions}</p>
      <Button type="primary" className={styles.completeProfileButton}>
        Complete my Profile
      </Button>
    </Card>
  );
};

export { ProfileInformationBigScreen, ProfileInformationSmallerScreen };
