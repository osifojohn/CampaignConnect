import React, { useState } from 'react';
import { List, Typography } from 'antd';

import { SearchComponent } from '../searchComponent/SearchComponent';
import { SortComponent } from '../sortComponent/SortComponent';

const { Text } = Typography;

interface Campaign {
  id: number;
  name: string;
}

const campaigns: Campaign[] = [
  { id: 1, name: 'Campaign 1' },
  { id: 2, name: 'Campaign 2' },
];

export const SearchFilter: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [category, setCategory] = useState<string>('Category');

  const filteredCampaigns = campaigns.filter((campaign) =>
    campaign.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <SearchComponent onSearch={setSearchTerm} />

      <SortComponent
        category={category}
        onCategoryChange={setCategory}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
      />

      <List
        grid={viewMode === 'grid' ? { gutter: 16, column: 4 } : undefined}
        dataSource={filteredCampaigns}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <Text>{item.name}</Text>
          </List.Item>
        )}
      />
    </div>
  );
};
