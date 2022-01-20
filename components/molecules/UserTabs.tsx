import TabGroup from '../atoms/TabGroup';

const UserTabs = () => {
  const tabs = [
    {
      name: 'Campanhas',
      link: '/u/campaigns',
      selected: true,
    },
    {
      name: 'Pendentes',
      link: '/u/campaigns/pending',
    },
  ];
  return <TabGroup tabs={tabs} />;
};

export default UserTabs;
