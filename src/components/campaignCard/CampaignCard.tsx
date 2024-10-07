import React from 'react';
import { Button, Row, Col } from 'antd';
import styles from './CampaignCard.module.css';

import saveCampaignIcon from '../../../public/icons/saveCampaign.svg';
import instagramIcon from '../../../public/icons/instagram-fill.svg';
import tiktokIcon from '../../../public/icons/tiktok.svg';
import youtubeIcon from '../../../public/icons/youtube.svg';
import twitterIcon from '../../../public/icons/twitter.svg';
import facebookIcon from '../../../public/icons/facebook.svg';

interface CampaignCardProps {
  title: string;
  company: string;
  type: string;
  postedDays: string;
  budget: string;
  channels: string[];
}

const CampaignCard: React.FC<CampaignCardProps> = ({
  title,
  company,
  type,
  postedDays,
  budget,
  channels,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.tag}>{title?.slice(0, 2)}</div>
        <div>
          <div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.postedDaysAgo}>
              Posted {postedDays} ago{' '}
              <div>
                <img src={saveCampaignIcon} alt="save" />
              </div>
            </div>
          </div>
          <p className={styles.productCategoryBox}>
            {company} • {type}
          </p>
        </div>
      </div>

      <p className={styles.description}>
        Aliquam massa donec proin sit duis magna eu maecenas. Ultricies id
        mattis lobortis proin congue proin elementum. Sed ac porttitor metus
        ante et suspesstn ....
      </p>

      <Row>
        <Col span={'100%'}>
          <div className={styles.channelsWrapper}>
            <span>Channels</span>
            <div className={styles.channels}>
              <img src={instagramIcon} alt="" className={styles.icon} />
              <img src={tiktokIcon} alt="" className={styles.icon} />
              <img src={youtubeIcon} alt="" className={styles.icon} />
              <img src={twitterIcon} alt="" className={styles.icon} />
              <img src={facebookIcon} alt="" className={styles.icon} />
              <span>+ {channels?.length - 3} more</span>
            </div>
          </div>
        </Col>
        <Col span={'100%'} className={styles.buttomSection}>
          <div className={styles.budgetWrapper}>
            <p>Budget</p>
            <h4>{budget}</h4>
          </div>
          <Button type="primary">Apply Now</Button>
        </Col>
      </Row>
    </div>
  );
};

export default CampaignCard;
