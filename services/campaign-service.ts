import { Campaign } from '../types/campaign';
import _BaseService from './_base-service';

class CampaignService extends _BaseService {
  async getFeatured(): Promise<Campaign[]> {
    const response = await fetch(`${this.serverUrl()}/campaigns/featured`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<Campaign[]>;
  }
}

export default CampaignService;
