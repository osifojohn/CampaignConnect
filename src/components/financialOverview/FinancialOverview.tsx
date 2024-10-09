import { Card, Col, Row } from 'antd';
import styles from './FinancialOverview.module.css';
import iconOpenOutline from '../../../public/icons/iconOpenOutline.svg';
import ellipesWhite from '../../../public/icons/ellipesWhite.svg';

import { formatCurrency } from '../../utils';
import { FinancialOverViewData } from '../../types';

type FinancialOverviewProps = {
  isLargeScreen: boolean;
  data: FinancialOverViewData;
};

const FinancialOverview: React.FC<FinancialOverviewProps> = ({
  isLargeScreen = false,
  data,
}) => {
  return (
    <Col xs={24} md={isLargeScreen ? 16 : 24}>
      <Card
        title="Financial Overview"
        extra={
          <a href="#" className={styles.viewAllCampaigns}>
            View all campaigns <img src={iconOpenOutline} alt="" />
          </a>
        }
        className={styles.financialOverviewCard}
      >
        <Row gutter={5}>
          <Col span={8} className={styles.financialOverviewItem}>
            <p>Total Income</p>
            <h2>{formatCurrency(data.totalIncome)}</h2>
          </Col>
          <Col span={8} className={styles.financialOverviewItem}>
            <p>Funds in Escrow</p>
            <h2>{data.fundsInEscrow}</h2>
          </Col>
          <Col span={8} className={styles.financialOverviewItem}>
            <p>Avg. Income Monthly</p>
            <h2>{formatCurrency(data.avgIncomeMonthly)}</h2>
          </Col>
        </Row>
        <div className={styles.summary}>
          <div>January Summary:</div>
          <div>
            <div className={styles.summaryName}>Total Fund in Escrow</div>
            <img src={ellipesWhite} className={styles.ellipesWhite} alt="" />
            <span className={styles.summaryTotal}>
              {formatCurrency(data.januarySummary.totalFundInEscrow)}
            </span>
            &nbsp;&nbsp;
            <div className={styles.summaryName}>Total Income</div>
            <img src={ellipesWhite} className={styles.ellipesWhite} alt="" />
            <span className={styles.summaryTotal}>
              {formatCurrency(data.januarySummary.totalIncome)}
            </span>
          </div>
        </div>
      </Card>
    </Col>
  );
};

export default FinancialOverview;
