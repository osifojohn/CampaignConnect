import React from 'react';
import { Select, Space } from 'antd';
import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import styles from './SortComponent.module.css';

const { Option } = Select;

interface SortComponentProps {
  category: string;
  onCategoryChange: (value: string) => void;
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

export const SortComponent: React.FC<SortComponentProps> = ({
  category,
  onCategoryChange,
  viewMode,
  onViewModeChange,
}) => {
  return (
    <div className={styles.sortContainer}>
      <Select
        defaultValue={category}
        className={styles.selectInput}
        onChange={onCategoryChange}
      >
        <Option value="Category">Category</Option>
        <Option value="Date">Date</Option>
      </Select>
      <Space>
        <AppstoreOutlined
          onClick={() => onViewModeChange('grid')}
          className={`${styles.icon} ${
            viewMode === 'grid' ? styles.activeIcon : ''
          }`}
        />
        <BarsOutlined
          onClick={() => onViewModeChange('list')}
          className={`${styles.icon} ${
            viewMode === 'list' ? styles.activeIcon : ''
          }`}
        />
      </Space>
    </div>
  );
};
