import { Button, Row } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useCampaignModal } from '../../contexts/CampaignModalContext';
import { useDashboardContext } from '../../contexts/DashboardContext';
import DashBoardLayout from '../../layouts/dashboardLayout/DashboardLayout';
import FinancialOverview from '../../components/financialOverview/FinancialOverview';
import CampaignList from '../../components/campain/campaignList/CampaignList';
import {
  DesktopSearchInput,
  MobileSearchInput,
} from '../../components/searchInput/SearchInput';

import { FinancialOverViewData, ProfileData } from '../../types';
import { ProfileInformationBigScreen } from '../../components/user/profileInformation/ProfileInformation';

const Dashboard = () => {
  const { toggleCampaignModal } = useCampaignModal();
  const {
    isLargeScreen,
    campaigns,
    isSearching,
    financialData,
    profileData,
    setSearchTerm,
  } = useDashboardContext();

  return (
    <DashBoardLayout>
      <>
        {!isLargeScreen && (
          <div className="smallerScreenToggleCampainBtnWrapper">
            <Button
              onClick={toggleCampaignModal}
              type="primary"
              icon={<PlusOutlined />}
              size="middle"
            >
              Create a New Campaign
            </Button>
          </div>
        )}

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
            data={financialData as FinancialOverViewData}
            isLargeScreen={isLargeScreen}
          />
        )}
        <div className="dashboardSearchContainer">
          {isLargeScreen ? (
            <>
              <h3>Explore campaigns</h3>
              <DesktopSearchInput onSearch={setSearchTerm} />
            </>
          ) : (
            <MobileSearchInput onSearch={setSearchTerm} />
          )}
        </div>
        <CampaignList isSearching={isSearching} campaigns={campaigns} />
      </>
    </DashBoardLayout>
  );
};

export default Dashboard;
