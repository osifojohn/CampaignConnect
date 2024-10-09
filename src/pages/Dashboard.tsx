import { useMediaQuery } from 'react-responsive';
import { useState, useEffect } from 'react';
import { Row } from 'antd';
import DashBoardLayout from '../layouts/dashboardLayout/DashboardLayout';
import FinancialOverview from '../components/financialOverview/FinancialOverview';
import CampaignList from '../components/campain/campaignList/CampaignList';
import CampaignRepository from '../lib/CampaignRepository';
import FinancialRepository from '../lib/FinancialRepository';
import UserRepository from '../lib/UserRepository';
import { Campaign, FinancialOverViewData, ProfileData } from '../types';
import {
  DesktopSearchInput,
  MobileSearchInput,
} from '../components/searchInput/SearchInput';
import useDebounce from '../hooks/useDebounce';
import { ProfileInformationBigScreen } from '../components/userAccount/profileInformation/ProfileInformation';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
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
  const [isSearching, setIsSearching] = useState(false);

  const profileData = UserRepository.getUserProfile();
  const financialData = FinancialRepository.getFinancialData();

  const handleSearch = (value: string) => setSearchTerm(value);

  const handleCampaignAdded = () => {
    setCampaigns(CampaignRepository.getAllCampaigns());
    setCampaignUpdated(true);
  };

  useEffect(() => {
    setIsLargeScreen(isScreenSizeGreaterThan1000);
  }, [isScreenSizeGreaterThan1000]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setCampaigns(
        CampaignRepository.searchCampaignsByTitle(debouncedSearchTerm.trim())
      );
      setIsSearching(true);
    } else {
      setIsSearching(false);
      setCampaigns(CampaignRepository.getAllCampaigns());
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (campaignUpdated) {
      setCampaigns(CampaignRepository.getAllCampaigns());
      setCampaignUpdated(false);
    }
  }, [campaignUpdated]);

  return (
    <DashBoardLayout
      isLargeScreen={isLargeScreen}
      onCampaignAdded={handleCampaignAdded}
    >
      <>
        {isLargeScreen ? (
          <Row gutter={[16, 16]}>
            <FinancialOverview
              data={financialData as FinancialOverViewData}
              isLargeScreen={isLargeScreen}
            />
            <ProfileInformationBigScreen data={profileData as ProfileData} />
          </Row>
        ) : (
          <FinancialOverview
            isLargeScreen={isLargeScreen}
            data={financialData as FinancialOverViewData}
          />
        )}

        <div className="dashboardSearchContainer">
          {isLargeScreen ? (
            <>
              <h3>Explore campaigns</h3>
              <DesktopSearchInput onSearch={handleSearch} />
            </>
          ) : (
            <MobileSearchInput onSearch={handleSearch} />
          )}
        </div>

        <CampaignList isSearching={isSearching} campaigns={campaigns} />
      </>
    </DashBoardLayout>
  );
};

export default Dashboard;
