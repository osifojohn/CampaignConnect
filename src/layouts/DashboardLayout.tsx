import React, { useState } from 'react';
import { Layout, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import SidebarMenu from '../components/SidebarMenu';
import styles from '../styles/DashBoardLayout.module.css';

const { Header, Content, Sider } = Layout;

const DashBoardLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <Layout className={styles.layout}>
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
          width={250}
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
          {isMobile && (
            <Button icon={<MenuOutlined />} onClick={toggleDrawer} />
          )}
        </Header>

        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DashBoardLayout;
