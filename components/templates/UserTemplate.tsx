import Header from '../molecules/Header';
import UserTabs from '../molecules/UserTabs';

interface UserTempleteProps {
  children: JSX.Element | JSX.Element[];
}
const UserTemplate = ({ children }: UserTempleteProps) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-30 pb-12 md:pt-32">
        <UserTabs />
      </div>
      <main className="flex-grow">{children}</main>
    </div>
  );
};

export default UserTemplate;
