import React, { useState } from 'react';
import { Modal, Form, Input, Button, Select, Checkbox, Space } from 'antd';
import styles from './CreateCampaignForm.module.css';
import CampaignRepository from '../../../lib/CampaignRepository';
import { Campaign } from '../../../types';
import {
  facebookLightIcon,
  instagramLightIcon,
  tiktokLightIcon,
  twitterLightIcon,
  youtubeLightIcon,
} from '../../../assets/icons';

const { TextArea } = Input;
const { Option } = Select;

interface CreateCampaignProps {
  visible: boolean;
  onClose: () => void;
  onCampaignAdded: () => void;
}

const CreateCampaignForm: React.FC<CreateCampaignProps> = ({
  visible,
  onClose,
  onCampaignAdded,
}) => {
  const [form] = Form.useForm();
  const [selectedChannels, setSelectedChannels] = useState<string[]>([]);

  const onFinish = (values: Campaign) => {
    const newCampaign: Campaign = {
      id: Date.now(),
      postedDate: Date.now(),
      campaignTitle: values.campaignTitle,
      brandName: values.brandName,
      campaignCategory: values.campaignCategory,
      campaignDescription: values.campaignDescription,
      preferredChannels: values.preferredChannels,
      campaignBudget: values.campaignBudget,
    };

    CampaignRepository.addCampaign(newCampaign);
    onCampaignAdded();
    onClose();
    form.resetFields();
  };

  const handleChannelChange = (checkedValues: string[]) => {
    setSelectedChannels(checkedValues);
  };

  const getIconStyle = (channel: string) => ({
    border: selectedChannels.includes(channel) ? '1.7px solid #1890ff' : 'none',
    borderRadius: '12%',
    // padding: '1px',
  });

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
            <Option value="entertainment">Entertainment</Option>
            <Option value="movie">Movie</Option>
            <Option value="games">Games</Option>
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
          name="preferredChannels"
          label={<div className={styles.label}>Select Preferred Channels</div>}
          rules={[
            {
              required: true,
              message: 'Please select at least one channel',
              type: 'array',
              min: 1,
            },
          ]}
        >
          <Checkbox.Group onChange={handleChannelChange}>
            <Space className={styles.iconSpace}>
              <Checkbox className={styles.checkbox} value="instagram">
                <img
                  alt="instagram"
                  src={instagramLightIcon}
                  className={styles.icon}
                  style={getIconStyle('instagram')}
                />
              </Checkbox>
              <Checkbox className={styles.checkbox} value="tiktok">
                <img
                  alt="tiktok"
                  src={tiktokLightIcon}
                  className={styles.icon}
                  style={getIconStyle('tiktok')}
                />
              </Checkbox>
              <Checkbox className={styles.checkbox} value="youtube">
                <img
                  alt="youtube"
                  src={youtubeLightIcon}
                  className={styles.icon}
                  style={getIconStyle('youtube')}
                />
              </Checkbox>
              <Checkbox className={styles.checkbox} value="twitter">
                <img
                  alt="twitter"
                  src={twitterLightIcon}
                  className={styles.icon}
                  style={getIconStyle('twitter')}
                />
              </Checkbox>
              <Checkbox className={styles.checkbox} value="facebook">
                <img
                  alt="facebook"
                  src={facebookLightIcon}
                  className={styles.icon}
                  style={getIconStyle('facebook')}
                />
              </Checkbox>
            </Space>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item
          label={<div className={styles.label}>Campaign Budget</div>}
          name="campaignBudget"
          rules={[
            { required: true, message: 'Please enter your campaign budget' },
            {
              type: 'number',
              min: 0,
              transform: (value) => Number(value),
              message: 'Campaign budget must be a positive number',
            },
          ]}
        >
          <Input
            type="number"
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

export default CreateCampaignForm;
