import { Row } from 'antd';

import DashBoardLayout from '../layouts/dashboardLayout/DashboardLayout';
import FinancialOverview from '../components/financialOverview/FinancialOverview';
import ProfileInformation from '../components/profileInformation/ProfileInformation';

import CampaignList from '../components/campaignList/CampaignList';
import { SearchInput } from '../components/searchInput/SearchInput';
import { useState } from 'react';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <DashBoardLayout>
      <div className="dashboard-container">
        <Row gutter={[16, 16]} className="financial-profile-section">
          <FinancialOverview />
          <ProfileInformation />
        </Row>

        <div className="dashboardSearchContainer">
          <h3>Explore campains</h3>
          <SearchInput onSearch={handleSearch} />
        </div>

        <CampaignList />
      </div>
    </DashBoardLayout>
  );
};

export default Dashboard;
