export type Campaign = {
  id: number;
  campaignTitle: string;
  brandName: string;
  campaignCategory: 'Entertainment' | 'Movie' | 'Games';
  campaignDescription: string;
  preferredChannels: string[];
  campaignBudget: string;
  postedDate: number;
};

export interface ProfileData {
  name: string;
  profileImage: string;
  profileCompletion: number;
  instructions: string;
  profileLink: string;
}

export type MonthSummary = {
  totalFundInEscrow: number;
  totalIncome: number;
};

export type FinancialOverViewData = {
  totalIncome: number;
  fundsInEscrow: number;
  avgIncomeMonthly: number;
  januarySummary: MonthSummary;
};
