import React, { useState } from 'react';
import { List } from 'antd';

import styles from './CampaignList.module.css';

import CampaignCard from '../campaignCard/CampaignCard';
import { SortComponent } from '../sortComponent/SortComponent';
import { Campaign } from '../../types';

// Define props interface
interface CampaignListProps {
  campaigns: Campaign[]; // Accept campaigns as props
}

const CampaignList: React.FC<CampaignListProps> = ({ campaigns }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [category, setCategory] = useState<string>('Category');

  return (
    <>
      <div className={styles.sortContainer}>
        <div>
          <h3>Search results:</h3> <p>{campaigns.length} Blog post campaigns</p>
        </div>
        <SortComponent
          category={category}
          onCategoryChange={setCategory}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
      </div>

      <List
        className={viewMode === 'list' ? styles.listWrapper : ''}
        grid={
          viewMode === 'grid'
            ? {
                gutter: 16,
                xs: 1, // 1 column on extra small screens (mobile)
                sm: 1, // 1 columns on small screens (tablet)
                md: 1, // 1 columns on medium screens
                lg: 2, // 2 columns on large screens (desktop)
                xl: 3, // 3 columns on extra large screens (large desktop)
                xxl: 4, // 4 columns on extra large screens (larger desktop)
              }
            : undefined
        }
        dataSource={campaigns}
        renderItem={(item) => (
          <List.Item key={item.id}>
            {' '}
            {/* Use id instead of title for keys */}
            <CampaignCard {...item} />
          </List.Item>
        )}
      />
    </>
  );
};

export default CampaignList;
