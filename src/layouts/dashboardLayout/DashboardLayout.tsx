import React, { useState } from 'react';
import { Layout, Drawer } from 'antd';
import { useMediaQuery } from 'react-responsive';
import SidebarMenu from '../../components/sidebarMenu/SidebarMenu';
import styles from './DashBoardLayout.module.css';
import {
  DesktopHeader,
  MobileHeader,
} from '../../components/customHeader/CustomHeader';

const { Header, Content, Sider } = Layout;

const DashBoardLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1024 });

  const getDrawerWidth = () => {
    if (isMobile) return '80%';
    if (isTablet) return 250;
    return 326;
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <Layout className={styles.layout}>
      {/* Sidebar for non-mobile screens */}
      {!isMobile ? (
        <Sider width={326} theme="light" className={styles.sider}>
          <SidebarMenu />
        </Sider>
      ) : (
        <Drawer
          title="Menu"
          placement="left"
          onClose={() => setDrawerVisible(false)}
          open={drawerVisible}
          width={getDrawerWidth()}
        >
          <SidebarMenu />
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
            <DesktopHeader />
          )}
        </Header>

        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashBoardLayout;
