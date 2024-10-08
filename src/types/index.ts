export interface Campaign {
  id: number;
  campaignTitle: string;
  brandName: string;
  campaignCategory: 'Entertainment' | 'Movie' | 'Games';
  campaignDescription: string;
  preferredChannels: string[];
  campaignBudget: string;
  postedDate: number;
}
