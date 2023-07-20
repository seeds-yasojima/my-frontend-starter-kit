import * as React from 'react';

import { twMerge } from 'tailwind-merge';

import { Breadcrumb } from '@/components/Breadcrumb';
import { SideNav, SpToolBar, AccountToolBox } from '@/components/Layout';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpen = React.useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <div className="h-screen bg-gray-50 dark:bg-slate-900">
      <SpToolBar />

      <SideNav isOpen={isOpen} />

      <div>
        <div
          className={twMerge(
            'sticky inset-x-0 top-0 z-40 hidden border-b bg-gray-100 px-4 py-2 pl-72 transition-all duration-300 lg:block',
            isOpen && 'lg:pl-8',
          )}
        >
          <div className="flex items-center">
            <button
              type="button"
              className="mr-3 rounded-md border p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-600"
              onClick={handleOpen}
            >
              <span className="sr-only">Toggle Navigation</span>
              <svg
                className="h-5 w-5"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </button>
            <div className="flex-1">
              <Breadcrumb />
            </div>

            <AccountToolBox />
          </div>
        </div>

        <main
          className={twMerge(
            'w-full px-4 pb-20 pt-4 transition-all duration-300 sm:px-6 md:px-8 md:pt-4 lg:pl-72',
            isOpen && 'lg:pl-8',
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};
