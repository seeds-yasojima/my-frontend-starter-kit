import * as React from 'react';

import { Head } from '../Head';

type ContentLayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="container mx-auto text-gray-900 dark:text-white">
        <h1 className="mb-2.5 text-2xl font-semibold">{title}</h1>
        <div>{children}</div>
      </div>
    </>
  );
};
