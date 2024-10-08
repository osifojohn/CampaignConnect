import campaignsData from '../data/campaigns.json';
import { Campaign } from '../types';

class CampaignRepository {
  private campaigns: Campaign[] = [];

  constructor() {
    this.initializeCampaigns();
  }

  private initializeCampaigns() {
    this.campaigns = campaignsData as Campaign[];
  }

  addCampaign(campaign: Campaign) {
    this.campaigns.unshift(campaign);
  }

  getAllCampaigns() {
    return this.campaigns;
  }

  searchCampaignsByTitle(title: string) {
    return this.campaigns.filter((campaign) =>
      campaign.campaignTitle.toLowerCase().includes(title.toLowerCase())
    );
  }
}

export default new CampaignRepository();
