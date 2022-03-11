export type CategoryType = {
  id: string;
  name: string;
  description: string;
};

export type UserDataType = {
  fullName: string;
  pictureUrl: string;
};

export type CampaignType = {
  categoryId: string;
  campaignId: string;
  userId: string;
  userData: UserDataType;
  title: string;
  description: string;
  profileImage: string;
  additionalImages: [];
  targetAmount: number;
  targetDate: string;
};
