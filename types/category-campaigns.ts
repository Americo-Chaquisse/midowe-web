import Campaign from './campaign';
import Category from './category';

export default class CategoryCampaigns {
  constructor(public category: Category, public campaigns: Campaign[]) {}
}
