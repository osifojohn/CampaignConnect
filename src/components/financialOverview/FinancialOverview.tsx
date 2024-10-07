import { Card, Col, Row } from 'antd';
import styles from './FinancialOverview.module.css';

import iconOpenOutline from '../../../public/icons/iconOpenOutline.svg';
import ellipesWhite from '../../../public/icons/ellipesWhite.svg';

const FinancialOverview: React.FC = () => {
  return (
    <>
      <Col xs={24} md={16}>
        <Card
          title="Financial Overview"
          extra={
            <a href="#" className={styles.viewAllCampains}>
              View all campaigns <img src={iconOpenOutline} alt="" />
            </a>
          }
          className={styles.financialOverviewCard}
        >
          <Row gutter={5}>
            <Col span={8} className={styles.finantialOverviewItem}>
              <p>Total Income</p>
              <h2>$62,932</h2>
            </Col>
            <Col span={8} className={styles.finantialOverviewItem}>
              <p>Funds in Escrow</p>
              <h2>$62,231</h2>
            </Col>
            <Col span={8} className={styles.finantialOverviewItem}>
              <p>Avg. Income Monthly</p>
              <h2>$3,542</h2>
            </Col>
          </Row>
          <div className={styles.summary}>
            <div>January Summary:</div>
            <div>
              <div className={styles.summaryName}>Total Fund in Escrow</div>
              <img src={ellipesWhite} className={styles.ellipesWhite} alt="" />
              <span className={styles.summaryTotal}>
                {' '}
                $350
              </span> &nbsp;&nbsp;{' '}
              <div className={styles.summaryName}>Total Income</div>{' '}
              <img src={ellipesWhite} className={styles.ellipesWhite} alt="" />
              <span className={styles.summaryTotal}>$850</span>
            </div>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default FinancialOverview;
