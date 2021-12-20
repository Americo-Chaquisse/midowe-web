export default class Campaign {
  constructor(
    public categoryId: string,
    public campaignId: string,
    public userId: string,
    public title: string,
    public content: string,
    public profileImage: string,
    public additionalImages: string[],
    public targetAmount: number,
    public targetDate: string,
    public approved: boolean,
    public approvedBy: string,
    public approvedAt: string,
    public totalDonations: number,
    public totalAmount: number,
    public createdAt: string
  ) {}
}
