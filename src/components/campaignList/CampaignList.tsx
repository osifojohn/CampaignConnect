import React, { useEffect, useState } from 'react';
import { List } from 'antd';
import { useMediaQuery } from 'react-responsive';

import styles from './CampaignList.module.css';
import CampaignCard from '../campaignCard/CampaignCard';
import { SortComponent } from '../sortComponent/SortComponent';
import { Campaign } from '../../types';

interface CampaignListProps {
  campaigns: Campaign[];
}

const CampaignList: React.FC<CampaignListProps> = ({ campaigns }) => {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1000px)' });
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    setViewMode(isLargeScreen ? 'grid' : 'list');
  }, [isLargeScreen]);

  const [category, setCategory] = useState<string>('Category');

  return (
    <>
      <div className={styles.sortContainer}>
        <div>
          <h3>Search results:</h3> <p>{campaigns.length} Blog post campaigns</p>
        </div>
        {isLargeScreen ? (
          <SortComponent
            category={category}
            onCategoryChange={setCategory}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
          />
        ) : null}
      </div>

      <List
        className={viewMode === 'list' ? styles.listWrapper : ''}
        grid={
          viewMode === 'grid'
            ? {
                gutter: 16,
                xs: 1,
                sm: 1,
                md: 1,
                lg: 2,
                xl: 3,
                xxl: 4,
              }
            : undefined
        }
        dataSource={campaigns}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <CampaignCard
              {...item}
              viewMode={viewMode}
              isLargeScreen={isLargeScreen}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default CampaignList;
