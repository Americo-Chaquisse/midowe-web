import Category from '../types/category';
import _BaseService from './_base-service';

class DonationService extends _BaseService {
  async registerDonation(
    categoryId: string,
    campaignId: string,
    amount: number,
    transactionReference: string,
    userPhone: number,
    userName: string,
    email: string,
    message: string
  ): Promise<any> {
    const response = await fetch(
      `${this.serverUrl()}/donations/${categoryId}/${campaignId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          transactionReference,
          userPhone,
          userName,
          email,
          message,
        }),
      }
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<any>;
  }
}

export default DonationService;
