import Campaign from '../types/campaign';
import CategoryCampaigns from '../types/category-campaigns';
import _BaseService from './_base-service';

class CampaignService extends _BaseService {
  async getFeatured(): Promise<Campaign[]> {
    const response = await fetch(`${this.serverUrl()}/campaigns/featured`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<Campaign[]>;
  }

  async getTopPerCategory(perCategory: number): Promise<CategoryCampaigns[]> {
    const response = await fetch(
      `${this.serverUrl()}/campaigns/top?perCategory=${perCategory}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<CategoryCampaigns[]>;
  }
}

export default CampaignService;
