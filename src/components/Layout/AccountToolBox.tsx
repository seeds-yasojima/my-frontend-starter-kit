import { Link } from 'react-router-dom';

import {
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/solid';

export const AccountToolBox = () => {
  const items = [
    // {
    //   name: '個人設定',
    //   to: '/mypage/user',
    //   icon: <Cog6ToothIcon className="h-6 w-6" />,
    // },
    {
      name: 'ログアウト',
      to: '/',
      icon: <ArrowLeftOnRectangleIcon className="h-6 w-6" />,
    },
  ];

  return (
    <div className="hs-dropdown relative inline-flex">
      <button
        id="hs-dropdown-custom-icon-trigger"
        type="button"
        className="hs-dropdown-toggle"
      >
        <UserCircleIcon className="h-6 w-6 text-gray-600" />
      </button>

      <div
        className="hs-dropdown-menu duration mt-2 hidden rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:border dark:border-gray-700 dark:bg-gray-800"
        aria-labelledby="hs-dropdown-custom-icon-trigger"
      >
        {items.map(({ name, to, icon }) => (
          <Link
            key={name}
            className="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
            to={to}
          >
            {icon}
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};
