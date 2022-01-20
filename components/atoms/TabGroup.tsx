import Link from 'next/link';

interface TabItem {
  name: string;
  link: string;
  selected?: boolean;
}

interface TabGroupProps {
  tabs: TabItem[];
}

const TabGroup = ({ tabs }: TabGroupProps) => {
  return (
    <div className="bg-white">
      <nav className="flex flex-col sm:flex-row">
        {tabs.map((item, index) => {
          return (
            <Link href={item.link}>
              <a
                key={index}
                className={`text-gray-600 py-3 px-6 block hover:text-indigo-600 focus:outline-none ${
                  item.selected
                    ? 'text-indigo-600 border-b-2 font-medium border-indigo-600'
                    : ''
                }`}
              >
                {item.name}
              </a>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default TabGroup;
