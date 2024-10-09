import React from 'react';
import { Layout, Avatar, Button } from 'antd';
import { MenuOutlined, PlusOutlined } from '@ant-design/icons';
import styles from './CustomHeader.module.css';
import {
  ellipesRedIcon,
  messageIcon,
  notificationIcon,
} from '../../assets/icons';

const { Header } = Layout;

interface MobileHeaderProps {
  onClick: () => void;
}

interface DesktopHeaderProps {
  onClick: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({ onClick }) => {
  return (
    <Header className={styles.mobileHeader}>
      <div className={styles.profileSection}>
        <Avatar src="https://randomuser.me/api/portraits/women/90.jpg" />
      </div>
      <div className={styles.logo}>Micro-Influx</div>
      <Button
        className={styles.menuButton}
        icon={<MenuOutlined />}
        onClick={onClick}
      />
    </Header>
  );
};

export const DesktopHeader: React.FC<DesktopHeaderProps> = ({ onClick }) => {
  return (
    <div className={styles.dashboardHeader}>
      <h1>Dashboard</h1>
      <div className={styles.dashboardHeaderRightSection}>
        <Button
          onClick={onClick}
          type="primary"
          icon={<PlusOutlined />}
          size="large"
        >
          Create a New Campaign
        </Button>
        <div>
          <div className={styles.iconsWrapper}>
            <img src={messageIcon} alt="" />
            <img
              src={ellipesRedIcon}
              alt=""
              className={styles.ellipesMessage}
            />
          </div>
          <div className={styles.iconsWrapper}>
            <img src={notificationIcon} alt="" />
            <img
              src={ellipesRedIcon}
              alt=""
              className={styles.ellipesNotification}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
