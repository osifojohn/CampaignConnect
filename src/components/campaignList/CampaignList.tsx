import React, { useState } from 'react';
import { List } from 'antd';

import styles from './CampaignList.module.css';

import CampaignCard from '../campaignCard/CampaignCard';
import { SortComponent } from '../sortComponent/SortComponent';

const campaigns = [
  {
    title: 'Epic Social Buzz',
    company: 'Samsung',
    type: 'Product Review',
    postedDays: '2 days',
    budget: '$1000 - $2000',
    channels: ['facebook', 'twitter', 'youtube', 'instagram'],
  },
  {
    title: 'Connect & Trend',
    company: 'Samsung',
    type: 'Product Review',
    postedDays: '2 days',
    budget: '$1000 - $2000',
    channels: ['facebook', 'twitter', 'youtube', 'instagram'],
  },

  {
    title: 'Epic Social Buzz',
    company: 'Samsung',
    type: 'Product Review',
    postedDays: '2 days',
    budget: '$1000 - $2000',
    channels: ['facebook', 'twitter', 'youtube', 'instagram'],
  },
  {
    title: 'Connect & Trend',
    company: 'Samsung',
    type: 'Product Review',
    postedDays: '2 days',
    budget: '$1000 - $2000',
    channels: ['facebook', 'twitter', 'youtube', 'instagram'],
  },

  {
    title: 'Epic Social Buzz',
    company: 'Samsung',
    type: 'Product Review',
    postedDays: '2 days',
    budget: '$1000 - $2000',
    channels: ['facebook', 'twitter', 'youtube', 'instagram'],
  },
  {
    title: 'Connect & Trend',
    company: 'Samsung',
    type: 'Product Review',
    postedDays: '2 days',
    budget: '$1000 - $2000',
    channels: ['facebook', 'twitter', 'youtube', 'instagram'],
  },
];

const CampaignList: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [category, setCategory] = useState<string>('Category');

  return (
    <>
      <div className={styles.sortContainer}>
        <div>
          <h3>Search results:</h3> <p>432 Blog post campaigns</p>
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
          <List.Item key={item.title}>
            <CampaignCard {...item} />
          </List.Item>
        )}
      />
    </>
  );
};

export default CampaignList;
