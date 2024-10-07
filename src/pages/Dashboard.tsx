import { Row } from 'antd';

import DashBoardLayout from '../layouts/dashboardLayout/DashboardLayout';
import FinancialOverview from '../components/financialOverview/FinancialOverview';
import ProfileInformation from '../components/profileInformation/ProfileInformation';
import { SearchFilter } from '../components/searchFilter/Search';

const Dashboard = () => {
  return (
    <DashBoardLayout>
      {' '}
      <div className="dashboard-container">
        <Row gutter={[16, 16]} className="financial-profile-section">
          <FinancialOverview />
          <ProfileInformation />
        </Row>

        <SearchFilter />

        <div className="campaign-results">
          <p>Search results: 432 Blog post campaigns</p>
        </div>
      </div>
    </DashBoardLayout>
  );
};

export default Dashboard;
