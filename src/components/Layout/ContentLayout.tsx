import * as React from 'react';

import {
  UserCircleIcon,
  ArrowLeftOnRectangleIcon,
  Cog6ToothIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

import { protectedRoutes } from '@/routes/protected'; // 会員のみ閲覧可のルート

import { Head } from '../Head';

type ContentLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

const Breadcrumb = () => {
  // excludePathsオプションで、デフォルトで追加されるroot'/'を除いています。
  const breadcrumbs = useBreadcrumbs(protectedRoutes, { excludePaths: ['/'] });

  return (
    <ol
      className="flex min-w-0 flex-1 items-center whitespace-nowrap"
      aria-label="Breadcrumb"
    >
      {breadcrumbs.map(({ match, breadcrumb }, index) => {
        return (
          // FIXME: Currentの場合のスタイルの切り替えしたい
          <li className="text-sm" key={match.pathname}>
            <Link
              className={twMerge(
                'flex items-center text-gray-500 hover:text-blue-600',
              )}
              to={match.pathname}
            >
              {index > 0 && (
                <ChevronRightIcon className="mx-3 h-3 w-3 shrink-0 overflow-visible text-gray-500 dark:text-gray-600" />
              )}
              {breadcrumb}
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

const AccountToolBox = () => {
  const items = [
    {
      name: '個人設定',
      to: '/mypage/user',
      icon: <Cog6ToothIcon className="h-6 w-6" />,
    },
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
        <UserCircleIcon className="h-6 w-6 text-gray-800" />
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

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="container mx-auto text-gray-900 dark:text-white">
        {/* <div className="mb-2 hidden lg:flex">
          <Breadcrumb />

          <AccountToolBox />
        </div> */}
        <h1 className="mb-2.5 text-2xl font-semibold">{title}</h1>
        <div>{children}</div>
      </div>
    </>
  );
};
