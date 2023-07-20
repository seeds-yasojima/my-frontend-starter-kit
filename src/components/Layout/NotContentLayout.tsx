import mainImage from '@/assets/sorry-image.svg';

import { Head } from '../Head';

type ContentLayoutProps = {
  title: string;
};

export const NotContentLayout = ({ title }: ContentLayoutProps) => {
  return (
    <>
      <Head title={title} />
      <div className="container mx-auto mt-14 text-gray-900 dark:text-white">
        <h1 className="text-center text-3xl font-semibold">Comming soon...</h1>
        <div className="mt-6">
          <img className="mx-auto h-80" src={mainImage} alt="すみません" />
        </div>
        <div className="mt-6 text-center">
          現在、作成中です。もうしばらくお待ちください。
        </div>
      </div>
    </>
  );
};
