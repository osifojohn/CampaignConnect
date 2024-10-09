import React, { useState } from 'react';
import { Layout, Drawer } from 'antd';
import { useMediaQuery } from 'react-responsive';
import SidebarMenu from '../../components/sidebarMenu/SidebarMenu';
import styles from './DashBoardLayout.module.css';
import {
  DesktopHeader,
  MobileHeader,
} from '../../components/customHeader/CustomHeader';
import CreateCampaignForm from '../../components/campain/createCampaignForm/CreateCampaignForm';

const { Header, Content, Sider } = Layout;

const DashBoardLayout: React.FC<{
  children: React.ReactNode;
  onCampaignAdded: () => void;
  isLargeScreen: boolean;
}> = ({ children, onCampaignAdded, isLargeScreen }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [campaignModalVisible, setCampaignModalVisible] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);
  const toggleCampaignModal = () =>
    setCampaignModalVisible(!campaignModalVisible);

  const getDrawerWidth = () => {
    if (isMobile) return '80%';
    if (isTablet) return 250;
    return 326;
  };

  return (
    <Layout className={styles.layout}>
      {/* Sidebar for non-mobile screens */}
      {!isMobile ? (
        <Sider width={326} theme="light" className={styles.sider}>
          <SidebarMenu isLargeScreen={isLargeScreen} />
        </Sider>
      ) : (
        <Drawer
          title="Menu"
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          width={getDrawerWidth()}
        >
          <SidebarMenu isLargeScreen={isLargeScreen} />
        </Drawer>
      )}

      <Layout
        className={
          !isMobile ? styles.contentLayout : styles.mobileContentLayout
        }
      >
        <Header
          className={
            !isMobile
              ? styles.header
              : `${styles.header} ${styles.mobileHeader}`
          }
        >
          {isMobile ? (
            <MobileHeader onClick={toggleDrawer} />
          ) : (
            <DesktopHeader onClick={toggleCampaignModal} />
          )}
        </Header>

        <Content className={styles.content}>{children}</Content>

        <CreateCampaignForm
          visible={campaignModalVisible}
          onClose={toggleCampaignModal}
          onCampaignAdded={onCampaignAdded}
        />
      </Layout>
    </Layout>
  );
};

export default DashBoardLayout;
