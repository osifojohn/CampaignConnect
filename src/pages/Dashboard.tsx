import { Row } from 'antd';
import DashBoardLayout from '../layouts/dashboardLayout/DashboardLayout';
import FinancialOverview from '../components/financialOverview/FinancialOverview';
import ProfileInformation from '../components/profileInformation/ProfileInformation';
import CampaignList from '../components/campaignList/CampaignList';
import { SearchInput } from '../components/searchInput/SearchInput';
import { useState } from 'react';
import CampaignRepository from '../lib/CampaignRepository';
import { Campaign } from '../types';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [campaigns, setCampaigns] = useState<Campaign[]>(
    CampaignRepository.getAllCampaigns()
  );

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleCampaignAdded = () => {
    setCampaigns(CampaignRepository.getAllCampaigns());
  };

  return (
    <DashBoardLayout onCampaignAdded={handleCampaignAdded}>
      <div className="dashboard-container">
        <Row gutter={[16, 16]} className="financial-profile-section">
          <FinancialOverview />
          <ProfileInformation />
        </Row>

        <div className="dashboardSearchContainer">
          <h3>Explore campaigns</h3>
          <SearchInput onSearch={handleSearch} />
        </div>

        <CampaignList campaigns={campaigns} />
      </div>
    </DashBoardLayout>
  );
};

export default Dashboard;
