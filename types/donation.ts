export default class Donation {
  constructor(
    public categoryId: string,
    public campaignId: string,
    public transactionId: string,
    public conversationId: string,
    public thirdyPartyReference: string,
    public responseCode: string,
    public userPhone: number,
    public userName: string,
    public amount: number,
    public message: string,
    public createtAt: string
  ) {}
}
