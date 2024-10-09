import React, { createContext, useContext, useState } from 'react';

interface CampaignModalContextProps {
  campaignModalVisible: boolean;
  toggleCampaignModal: () => void;
}

const CampaignModalContext = createContext<CampaignModalContextProps>({
  campaignModalVisible: false,
  toggleCampaignModal: () => {},
});

export const CampaignModalProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [campaignModalVisible, setCampaignModalVisible] = useState(false);

  const toggleCampaignModal = () => {
    setCampaignModalVisible((prev) => !prev);
  };

  return (
    <CampaignModalContext.Provider
      value={{ campaignModalVisible, toggleCampaignModal }}
    >
      {children}
    </CampaignModalContext.Provider>
  );
};

export const useCampaignModal = () => useContext(CampaignModalContext);
