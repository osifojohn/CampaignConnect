import React, { useState } from 'react';
import { Menu, Avatar, Typography, Dropdown, List, Button } from 'antd';
import styles from '../styles/SidebarMenu.module.css';

import homeIcon from '../../public/icons/fluent_home-16-regular.png';
import compassIcon from '../../public/icons/compass.svg';
import messageIcon from '../../public/icons/fluent_chat-mail-20-regular.svg';
import earningIcon from '../../public/icons/earning.svg';
import settingsIcon from '../../public/icons/galaSettings0.svg';

import techreviewIcon from '../../public/icons/techreview.svg';
import beautyblendIcon from '../../public/icons/beautyblend.svg';
import wanderlustIcon from '../../public/icons/wanderlust.svg';
import fitnessIcon from '../../public/icons/fitness.svg';
import homeharmonyIcon from '../../public/icons/homeharmony.svg';

import AvartarIcon from '../../public/icons/profile.svg';
import dropDownIcon from '../../public/icons/code.svg';
import arrowRightIcon from '../../public/icons/arrow-right.svg';

const { Text } = Typography;

const renderIcon = (src: string, alt: string, size = '16px') => (
  <img src={src} alt={alt} style={{ width: size, height: size }} />
);

const menuItems = [
  { key: '1', icon: homeIcon, label: 'Dashboard' },
  { key: '2', icon: compassIcon, label: 'Campaigns' },
  { key: '3', icon: messageIcon, label: 'Messages' },
  { key: '4', icon: earningIcon, label: 'Earning History' },
  { key: '5', icon: settingsIcon, label: 'Settings' },
];

const campaignData = [
  { title: 'TechGuru Tech Review Show', icon: techreviewIcon },
  { title: 'BeautyBlend Makeup Campaign', icon: beautyblendIcon },
  { title: 'Wanderlust Adventure Campaign', icon: wanderlustIcon },
  { title: 'Fitness Fusion Workout Plan', icon: fitnessIcon },
  { title: 'Home Harmony DIY Campaign', icon: homeharmonyIcon },
];

const profileMenu = (
  <Menu
    items={[
      { label: 'Profile', key: 'profile' },
      { label: 'Log out', key: 'logout' },
    ]}
  />
);

const SidebarMenu: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState('1');
  return (
    <div className={styles.sidebar}>
      {/* Fixed Logo and Profile Section */}
      <div className={styles.logoProfileSectionWrapper}>
        {/* Logo Section */}
        <div className={styles.logoSection}>
          <Typography.Title level={4} className={styles.title}>
            Micro-Influx
          </Typography.Title>
        </div>

        {/* Profile Section */}
        <div className={styles.profileSection}>
          <img src={AvartarIcon} className={styles.avatar} />
          <div className={styles.profileInfo}>
            <Dropdown overlay={profileMenu} trigger={['click']}>
              <div className={styles.profileNameContainer}>
                <Text strong className={styles.profileName}>
                  Olivia Jacobs
                </Text>
                {renderIcon(dropDownIcon, 'dropdown icon', '10px')}
              </div>
            </Dropdown>
            <Text type="secondary" className={styles.influencerType}>
              Lifestyle Influencer
            </Text>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className={styles.scrollableContent}>
        {/* Menu Section */}
        <Menu
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={(e) => setSelectedKey(e.key)}
          className={styles.menu}
        >
          {menuItems.map((item) => (
            <Menu.Item
              key={item.key}
              icon={renderIcon(item.icon, item.label, '18px')}
            >
              {item.label}
            </Menu.Item>
          ))}
        </Menu>

        {/* Campaign Shortcuts Section */}
        <div>
          <div className={styles.campaignShortcuts}>
            <Text strong>Campaign Shortcuts</Text>
            <Button type="link" size="small">
              View all
            </Button>
          </div>
          <List
            itemLayout="horizontal"
            dataSource={campaignData}
            renderItem={(item) => (
              <List.Item className={styles.listItem}>
                <List.Item.Meta
                  avatar={<Avatar src={item.icon} />}
                  title={
                    <a href="" className={styles.listItemTitle}>
                      {item.title}
                    </a>
                  }
                />
                {renderIcon(arrowRightIcon, '', '12px')}
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
