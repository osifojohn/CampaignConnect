import React from 'react';
import { Modal, Form, Input, Button, Select, Checkbox, Space } from 'antd';
import {
  InstagramOutlined,
  YoutubeOutlined,
  TwitterOutlined,
  FacebookOutlined,
} from '@ant-design/icons';
import styles from './CreateCampaign.module.css';

import instagramLightIcon from '../../../public/icons/instagramLight.svg';
import youtubeLightIcon from '../../../public/icons/youtubeLight.svg';
import twitterLightIcon from '../../../public/icons/twitterLight.png';
import facebookLightIcon from '../../../public/icons/facebookLight.svg';
import tiktokLightIcon from '../../../public/icons/tiktokLight.svg';

const { TextArea } = Input;
const { Option } = Select;

interface CreateCampaignProps {
  visible: boolean;
  onClose: () => void;
}

const CreateCampaign: React.FC<CreateCampaignProps> = ({
  visible,
  onClose,
}) => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Form values:', values);
    onClose();
    form.resetFields();
  };

  return (
    <Modal
      title={<div className={styles.modalTitle}>Create Campaign</div>}
      visible={visible}
      onCancel={onClose}
      footer={null}
      centered
      width={600}
      className={styles.modal}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label={<div className={styles.label}>Campaign Title</div>}
          name="campaignTitle"
          rules={[
            { required: true, message: 'Please enter your campaign title' },
          ]}
        >
          <Input
            placeholder="Enter your campaign title here"
            className={styles.inputField}
          />
        </Form.Item>

        <Form.Item
          label={<div className={styles.label}>Brand Name</div>}
          name="brandName"
          rules={[{ required: true, message: 'Please enter your brand name' }]}
        >
          <Input
            placeholder="Enter your brand name here"
            className={styles.inputField}
          />
        </Form.Item>

        <Form.Item
          label={<div className={styles.label}>Campaign Category</div>}
          name="campaignCategory"
          rules={[
            { required: true, message: 'Please select your campaign category' },
          ]}
        >
          <Select
            placeholder="Select your campaign category"
            className={styles.selectInput}
          >
            <Option value="productReview">Product Review</Option>
            <Option value="sponsoredContent">Sponsored Content</Option>
            <Option value="socialMediaEngagement">
              Social Media Engagement
            </Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label={<div className={styles.label}>Campaign Description</div>}
          name="campaignDescription"
          rules={[
            {
              required: true,
              message: 'Please enter a description for your campaign',
            },
          ]}
        >
          <TextArea
            rows={4}
            placeholder="Enter your campaign description here"
            className={styles.textArea}
          />
        </Form.Item>

        <Form.Item
          label={<div className={styles.label}>Select Preferred Channels</div>}
        >
          <Space className={styles.iconSpace}>
            <div>
              <img
                alt="instagram"
                className={styles.icon}
                src={instagramLightIcon}
              />
            </div>
            <div>
              <img alt="tiktok" className={styles.icon} src={tiktokLightIcon} />
            </div>
            <div>
              <img
                alt="youtube"
                className={styles.icon}
                src={youtubeLightIcon}
              />
            </div>
            <div>
              <img
                alt="twitter"
                className={styles.icon}
                src={twitterLightIcon}
              />
            </div>

            <div>
              <img
                alt="facebook"
                className={styles.icon}
                src={facebookLightIcon}
              />
            </div>
          </Space>
        </Form.Item>

        <Form.Item
          label={<div className={styles.label}>Campaign Budget</div>}
          name="campaignBudget"
          rules={[
            { required: true, message: 'Please enter your campaign budget' },
          ]}
        >
          <Input
            placeholder="Enter your campaign budget"
            className={styles.inputField}
          />
        </Form.Item>

        <Form.Item>
          <div className={styles.submitButtonWrapper}>
            <Button
              type="primary"
              htmlType="submit"
              className={styles.submitButton}
            >
              Create New Campaign
            </Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateCampaign;
