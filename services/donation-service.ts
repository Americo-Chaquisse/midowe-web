import Category from '../types/category';
import Donation from '../types/donation';
import _BaseService from './_base-service';

class DonationService extends _BaseService {
  async getHistory(
    categoryId: string,
    campaignId: string,
    lastTransactionId: string = '',
    perPage: number = 10
  ): Promise<Donation[]> {
    const response = await fetch(
      `${this.serverUrl()}/donations/${categoryId}/${campaignId}?lastTransactionId=${lastTransactionId}&perPage=${perPage}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<Donation[]>;
  }

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
