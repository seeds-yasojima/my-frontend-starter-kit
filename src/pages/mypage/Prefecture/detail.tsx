import * as React from 'react';
import { useParams } from 'react-router-dom';

import { ContentLayout } from '@/components/Layout';
import { useCites, getPopulation, usePref } from '@/features/test/api/getPref';
import { DemoLineChart } from '@/features/test/components/DemoLineChart';

import useSWRMutation from 'swr/mutation';
import { twMerge } from 'tailwind-merge';

const NoContents = () => {
  return <div>データが選択されていません。</div>;
};

export const PrefectureDetail = () => {
  const { prefCode } = useParams();

  const { prefectures, isLoading: prefIsLoading } = usePref();

  const getPrefName = (): string => {
    if (prefCode && !prefIsLoading) {
      const machPrefObj = prefectures?.find(
        (item) => String(item.prefCode) === prefCode,
      );
      return machPrefObj?.prefName || '';
    }

    return '';
  };

  const prefectureName = getPrefName();

  const { cites, isLoading, isError } = useCites(prefCode as string);

  const { data: populations, trigger } = useSWRMutation(
    '/population/composition/perYear',
    getPopulation,
  );

  const [selectedCity, setSelectedCity] = React.useState<string | null>(null);

  const getCityInfo = async (
    cityCode: string,
    prefCode: string,
  ): Promise<void> => {
    const args = {
      cityCode,
      prefCode,
    };

    if (cityCode === selectedCity) {
      return;
    }

    try {
      await trigger(args);
      setSelectedCity(cityCode);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <>Loading...</>;
  }

  if (isError) {
    return <>エラーが発生しました！</>;
  }

  return (
    <ContentLayout title={prefectureName}>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-3 grid gap-4">
          <ul className="flex max-w-xs flex-col">
            {cites.map(({ cityCode, cityName }) => (
              <li
                key={cityCode}
                className="-mt-px inline-flex items-center gap-x-2 border bg-white first:mt-0 first:rounded-t-lg last:rounded-b-lg dark:border-gray-700 dark:bg-gray-800"
              >
                <button
                  onClick={() => getCityInfo(cityCode, prefCode as string)}
                  className={twMerge(
                    'w-full px-4 py-3 text-left text-sm font-medium text-gray-800 hover:bg-gray-100 hover:text-blue-600 dark:text-white',
                    selectedCity === cityCode && 'bg-gray-100 text-blue-600',
                  )}
                >
                  {cityName}
                  <span className="mt-1 block text-xs text-gray-400">
                    {cityCode}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative col-span-9">
          <div className="sticky top-16">
            <div className="rounded-lg border bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:shadow-slate-700/[.7] md:p-5">
              {populations ? (
                <DemoLineChart args={populations} />
              ) : (
                <NoContents />
              )}
            </div>
            <div className="mt-4 text-center">
              <span className="text-sm text-gray-500">
                RESAS（地域経済分析システム）を加工して作成
              </span>
            </div>
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};
