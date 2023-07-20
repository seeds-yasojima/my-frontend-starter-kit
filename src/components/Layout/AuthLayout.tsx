import React from 'react';

import { Head } from '../Head';

type AuthLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const AuthLayout = ({ children, title }: AuthLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="h-screen bg-gray-100 dark:bg-slate-900">
        <div className="flex h-full py-8 md:py-16">
          <main className="mx-auto w-full max-w-md p-6">{children}</main>
        </div>
      </div>
    </>
  );
};
