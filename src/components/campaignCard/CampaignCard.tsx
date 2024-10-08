import React from 'react';
import { Button, Row, Col } from 'antd';
import styles from './CampaignCard.module.css';
import { formatBudget, formatDate } from '../../utils';
import saveCampaignIcon from '../../../public/icons/saveCampaign.svg';
import instagramIcon from '../../../public/icons/instagram-fill.svg';
import tiktokIcon from '../../../public/icons/tiktok.svg';
import youtubeIcon from '../../../public/icons/youtube.svg';
import twitterIcon from '../../../public/icons/twitter.svg';
import facebookIcon from '../../../public/icons/facebook.svg';
import { Campaign } from '../../types';

type CampaignCardProps = Campaign & {
  viewMode: 'grid' | 'list';
  isLargeScreen: boolean;
};

const iconMap: { [key: string]: string } = {
  instagram: instagramIcon,
  tiktok: tiktokIcon,
  youtube: youtubeIcon,
  twitter: twitterIcon,
  facebook: facebookIcon,
};

const CampaignCard: React.FC<CampaignCardProps> = ({
  campaignTitle,
  brandName,
  campaignCategory,
  postedDate,
  campaignBudget,
  campaignDescription,
  preferredChannels,
  viewMode,
  isLargeScreen,
}) => {
  const descriptionLimit = viewMode === 'grid' && isLargeScreen ? 110 : 300;
  const truncatedDescription =
    campaignDescription.length > descriptionLimit
      ? campaignDescription.slice(0, descriptionLimit) + '...'
      : campaignDescription;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.tag}>{campaignTitle?.slice(0, 2)}</div>
        <div>
          <div>
            <h3 className={styles.campaignTitle}>{campaignTitle}</h3>
            <div className={styles.postedDaysAgo}>
              Posted {formatDate(postedDate)} ago{' '}
              <div>
                <img src={saveCampaignIcon} alt="save" />
              </div>
            </div>
          </div>
          <p className={styles.productCategoryBox}>
            {brandName} • {campaignCategory}
          </p>
        </div>
      </div>

      <p className={styles.description}>{truncatedDescription}</p>

      <Row>
        <Col span={'100%'}>
          <div className={styles.channelsWrapper}>
            <span>Channels</span>
            <div className={styles.channels}>
              {preferredChannels.map(
                (channel) =>
                  iconMap[channel] && (
                    <img
                      key={channel}
                      src={iconMap[channel]}
                      alt={channel}
                      className={styles.icon}
                    />
                  )
              )}
              {preferredChannels.length > 5 && (
                <span>+ {preferredChannels.length - 5} more</span>
              )}
            </div>
          </div>
        </Col>
        <Col span={'100%'} className={styles.buttomSection}>
          <div className={styles.budgetWrapper}>
            <p>Budget</p>
            <h4>{formatBudget(campaignBudget)}</h4>
          </div>
          <Button type="primary">Apply Now</Button>
        </Col>
      </Row>
    </div>
  );
};

export default CampaignCard;
