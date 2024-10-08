import { Row } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';

import DashBoardLayout from '../layouts/dashboardLayout/DashboardLayout';
import FinancialOverview from '../components/financialOverview/FinancialOverview';
import ProfileInformation from '../components/profileInformation/ProfileInformation';
import CampaignList from '../components/campaignList/CampaignList';
import CampaignRepository from '../lib/CampaignRepository';
import { Campaign } from '../types';
import {
  DesktopSearchInput,
  MobileSearchInput,
} from '../components/searchInput/SearchInput';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [campaigns, setCampaigns] = useState<Campaign[]>(
    CampaignRepository.getAllCampaigns()
  );
  const isScreenSizeGreaterThan1000 = useMediaQuery({
    query: '(min-width: 1000px)',
  });
  const [isLargeScreen, setIsLargeScreen] = useState(
    isScreenSizeGreaterThan1000
  );

  const [campaignUpdated, setCampaignUpdated] = useState(false);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleCampaignAdded = () => {
    setCampaigns(CampaignRepository.getAllCampaigns());
    setCampaignUpdated(true);
  };

  useEffect(() => {
    setIsLargeScreen(isScreenSizeGreaterThan1000);
  }, [isScreenSizeGreaterThan1000]);

  useEffect(() => {
    if (searchTerm) {
      setCampaigns(CampaignRepository.searchCampaignsByTitle(searchTerm));
    } else {
      setCampaigns(CampaignRepository.getAllCampaigns());
    }
  }, [searchTerm]);

  useEffect(() => {
    if (campaignUpdated) {
      setCampaigns(CampaignRepository.getAllCampaigns());
      setCampaignUpdated(false);
    }
  }, [campaignUpdated]);

  return (
    <DashBoardLayout onCampaignAdded={handleCampaignAdded}>
      <>
        {isLargeScreen ? (
          <Row gutter={[16, 16]} className="financial-profile-section">
            <FinancialOverview isLargeScreen={isLargeScreen} />
            <ProfileInformation />
          </Row>
        ) : (
          <FinancialOverview isLargeScreen={isLargeScreen} />
        )}

        <div className="dashboardSearchContainer">
          {isLargeScreen ? (
            <>
              <h3>Explore campaigns</h3>
              <DesktopSearchInput
                searchTerm={searchTerm}
                onSearch={handleSearch}
              />
            </>
          ) : (
            <MobileSearchInput
              searchTerm={searchTerm}
              onSearch={handleSearch}
            />
          )}
        </div>

        <CampaignList campaigns={campaigns} />
      </>
    </DashBoardLayout>
  );
};

export default Dashboard;
