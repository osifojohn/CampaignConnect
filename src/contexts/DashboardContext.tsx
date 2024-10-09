import React, { createContext, useContext, useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import CampaignRepository from '../lib/CampaignRepository';
import FinancialRepository from '../lib/FinancialRepository';
import UserRepository from '../lib/UserRepository';
import useDebounce from '../hooks/useDebounce';
import { Campaign, FinancialOverViewData, ProfileData } from '../types';

type DashboardContextType = {
  isLargeScreen: boolean;
  campaigns: Campaign[];
  searchTerm: string;
  debouncedSearchTerm: string;
  isSearching: boolean;
  financialData: FinancialOverViewData | null;
  profileData: ProfileData | null;
  setSearchTerm: (term: string) => void;
  updateCampaigns: () => void;
};

const DashboardContext = createContext<DashboardContextType | undefined>(
  undefined
);

export const DashboardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [campaigns, setCampaigns] = useState<Campaign[]>(
    CampaignRepository.getAllCampaigns()
  );
  const [isSearching, setIsSearching] = useState(false);
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1000px)' });

  const profileData = UserRepository.getUserProfile();
  const financialData = FinancialRepository.getFinancialData();

  const updateCampaigns = () =>
    setCampaigns(CampaignRepository.getAllCampaigns());

  useEffect(() => {
    if (debouncedSearchTerm) {
      setCampaigns(
        CampaignRepository.searchCampaignsByTitle(debouncedSearchTerm.trim())
      );
      setIsSearching(true);
    } else {
      setCampaigns(CampaignRepository.getAllCampaigns());
      setIsSearching(false);
    }
  }, [debouncedSearchTerm]);

  return (
    <DashboardContext.Provider
      value={{
        isLargeScreen,
        campaigns,
        searchTerm,
        debouncedSearchTerm,
        isSearching,
        financialData,
        profileData,
        setSearchTerm,
        updateCampaigns,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error(
      'useDashboardContext must be used within a DashboardProvider'
    );
  }
  return context;
};
